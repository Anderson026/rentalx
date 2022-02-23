import { inject, injectable } from "tsyringe";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";


interface IRquest {
  id: string;
  user_id: string;
}

@injectable()
class DevolutionRentalUseCase {

  constructor(
    @inject("RentalsRepository")
    private rentalsRepository: IRentalsRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider,
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ){}

  async execute({id, user_id}: IRquest): Promise<Rental> {
    const rental = await this.rentalsRepository.findById(id);
    const car = await this.carsRepository.findById(rental.car_id);

    const minimum_daily = 1;

    if(!rental) {
      throw new AppError("Rental does not exists!");
    }

    //Verificar o tempo de aluguel
    const dateNow = this.dateProvider.dateNow();
    // verifica a diária
    let daily = this.dateProvider.compareInDays(
      rental.start_date,
      this.dateProvider.dateNow()
    )
      // se for uma diário menor ou igual a zero, é atribuído o valor mínimo
    if(daily <= 0) {
      daily = minimum_daily;
    }
    // calculando a quantidade de atrasos para calcular a multa
    const delay = this.dateProvider.compareInDays(
      dateNow,
      rental.expected_return_date
    );

    let total = 0;
    if(delay > 0) {
      const calculate_fine = delay * car.fine_amount;
      total = calculate_fine;
    }
    // somando o total mais a multa
    total += daily * car.daily_rate;
    // atualiza todos os valores
    rental.end_date = this.dateProvider.dateNow();
    rental.total = total;

    await this.rentalsRepository.create(rental);
    await this.carsRepository.updateAvailable(car.id, true);

    return rental;
    
  }
};

export { DevolutionRentalUseCase };