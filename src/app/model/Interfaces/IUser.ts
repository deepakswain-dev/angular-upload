


export interface IUser {
    userId: number;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    token?: string;
    roleName: string;
}

export interface IEmployee {
    id: number;
    name: string;
    gender: string;
    email?: string;
    phoneNumber?: number;
    contactPreference: string;
    dateOfBirth: Date;
    department: string;
    isActive: boolean;
    photoPath?: any;
    password?: string;
    confirmPassword?: string;
}

export class IDepartment{
    id: number;
    name: string;
}