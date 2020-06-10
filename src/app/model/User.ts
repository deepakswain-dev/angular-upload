import { IUser } from './Interfaces/IUser';



export class User implements IUser{
    userId: 0;
    firstName: '';
    lastName: '';
    userName: '';
    password: '';
    token?: '';
    roleName: '';
}