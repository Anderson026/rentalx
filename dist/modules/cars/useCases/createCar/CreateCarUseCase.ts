import { inject, injectable } from "tsyringe";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { AppError } from "@shared/errors/AppError";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

interface IRequest {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
}

@injectable()
class CreateCarUseCase {

  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ){}

  async execute({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id
  }: IRequest): Promise<Car> {
    // verifica se a license_plate existe
    const carAlreadyExists = await this.carsRepository.findByLicensePlate(license_plate);
    // se já existir apresenta uma mensagem
    if(carAlreadyExists) {
      throw new AppError("Car already exists!");
    }

    const car = await this.carsRepository.create({
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id
    });

    return car;
  }
}

export { CreateCarUseCase };