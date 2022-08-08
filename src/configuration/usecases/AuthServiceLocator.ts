import IUserReadOnlyRepository from "@pbb/application/repository/IUserReadOnlyRepository";
import SigninUseCase from "@pbb/application/usecase/SigninUseCase"
import { TYPES } from "@pbb/constants/types";
import { injectable,inject } from "inversify"
import { TYPE } from "inversify-express-utils";

@injectable()
export default class AuthServiceLocator{
    
    constructor(@inject(TYPES.IUserReadOnlyRepository) 
                private readRepository: IUserReadOnlyRepository){
                    
                }
    
    public GetSignInUseCase(){
        return new SigninUseCase(this.readRepository);
    }
}