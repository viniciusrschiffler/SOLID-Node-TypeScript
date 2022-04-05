import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {

    constructor (
        // Mesma cosia que criar a varivel e fazer um this.userRepository = userRepository
        private userRepository: IUsersRepository
    ){}
    
    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);

        if (userAlreadyExists) {
            throw new Error('User already exists.');
        }

        const user = new User(data);
        await this.userRepository.save(user);
    }
}