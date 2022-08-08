import IUserReadOnlyRepository from "@pbb/application/repository/IUserReadOnlyRepository";
import User from "@pbb/domain/User";
import { injectable } from "inversify";

@injectable()
export default class UserRepository implements IUserReadOnlyRepository{
    fetch(user: User): Promise<User> {
        throw new Error("Method not implement");
    }
}