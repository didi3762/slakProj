export interface IUser {
    id?:string,
    islogin:boolean,
    name:string,
    mail: string, 
    password: string
}

export interface IStateUsers {
    users:IUser[];
    paidUsers:IUser[]
}

export interface AppState {
    users: IStateUsers
  }