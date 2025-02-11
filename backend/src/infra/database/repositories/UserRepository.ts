import { User } from '../typeorm/entities/User.entity';
import { UserCreationDTO } from '../interfaces/user.interface';

export default abstract class UserRepository {
  abstract getUserById(id: string): Promise<User>;
  abstract getUserByCPF(cpf: string): Promise<User>;
  abstract getUserByEmail(email: string): Promise<User>;
  abstract createUser(user: UserCreationDTO): Promise<void>;
  abstract createAdminUser(user: UserCreationDTO): Promise<User>;
  abstract getUsers(): Promise<User[]>;
}
