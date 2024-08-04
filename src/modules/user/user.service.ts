import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService{
    getUserPassword(){
        return 'User Final Password';
    }
}