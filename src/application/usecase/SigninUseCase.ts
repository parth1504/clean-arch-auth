import User from "@pbb/domain/User";
import IUserReadOnlyRepository from "../repository/IUserReadOnlyRepository";
import ISignInUseCase from "./ISignInUseCase";
import IUserDto from "./IUserDto";


export default class SigninUseCase implements ISignInUseCase{
    
    private userReadOnlyRepository: IUserReadOnlyRepository;

    constructor( userReadOnlyRepository: IUserReadOnlyRepository){
        this.userReadOnlyRepository= userReadOnlyRepository;
    }

    public async  signin(userDto: IUserDto): Promise<IUserDto>{
        let user = new User(userDto.id,userDto.name,userDto.email,userDto.password,userDto.type);
        user = await this.userReadOnlyRepository.fetch(user);
        const foundUserDto= user;
        return foundUserDto;
    }

   
}