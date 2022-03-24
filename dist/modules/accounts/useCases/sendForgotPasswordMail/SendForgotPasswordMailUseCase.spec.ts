import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UersRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";
import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase"

let sendForgotPasswordMailUserCase: SendForgotPasswordMailUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let mailProvider: MailProviderInMemory;

describe("Send Forgot Mail", () => {

  beforeEach(()=> {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    dateProvider = new DayjsDateProvider();
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
    mailProvider = new MailProviderInMemory();

    sendForgotPasswordMailUserCase = new SendForgotPasswordMailUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
      mailProvider
    );
  })

  it ("should be able to send a forgot password mail to user", async ()=> {
    const sendMail = jest.spyOn(mailProvider, "sendMail");

    await usersRepositoryInMemory.create({
      driver_license: "123456",
      email: "emailTest@email.com",
      name: "Name Test",
      password: "1234",
    });

    await sendForgotPasswordMailUserCase.execute("emailTest@email.com");

    expect(sendMail).toHaveBeenCalled();
  });

  it("should not be able to send an email if user does not exists", async() => {
    await expect(
      sendForgotPasswordMailUserCase.execute("emailPass@emial.com")
    ).rejects.toEqual(new AppError("User does not exists!"))
  });

  it("should be able to create an users token", async () => {
    const generateTokenMail = jest.spyOn(usersTokensRepositoryInMemory, "create")

    usersRepositoryInMemory.create({
      driver_license: "123458",
      email: "emailTest1@email.com",
      name: "Name Test1",
      password: "1234",
    });

    await sendForgotPasswordMailUserCase.execute("emailTest1@email.com");

    expect(generateTokenMail).toBeCalled();
  });
});