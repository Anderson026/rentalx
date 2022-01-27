import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
describe("List Cars", () => {

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory()
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  })

  it("should be able to list all available cars", async() => {

    const car = await carsRepositoryInMemory.create({
      brand: "Car_brand",
      category_id: "category_id",
      daily_rate: 140.00,
      description: "Car description",
      fine_amount: 100,
      license_plate: "DEF-1212",
      name: "Car 1"
    });

    const cars = await listAvailableCarsUseCase.execute({});
    
    expect(cars).toEqual([car]);
    
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car_brand_test",
      category_id: "category_id",
      daily_rate: 140.00,
      description: "Car description",
      fine_amount: 100,
      license_plate: "DEF-1212",
      name: "Car 2"
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_brand_test",
    });

    console.log(cars);
    
    expect(cars).toEqual([car]);
    
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car_brand_test",
      category_id: "category_id",
      daily_rate: 140.00,
      description: "Car description",
      fine_amount: 100,
      license_plate: "DEF-1215",
      name: "Car 3"
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car_brand_test",
    });

    console.log(cars);
    
    expect(cars).toEqual([car]);
    
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Car_brand_test",
      category_id: "12345",
      daily_rate: 140.00,
      description: "Car description",
      fine_amount: 100,
      license_plate: "DEF-1215",
      name: "Car 3"
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "12345",
    });

    console.log(cars);
    
    expect(cars).toEqual([car]);
    
  });
});