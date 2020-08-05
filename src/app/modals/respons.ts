export class User {
    id?:string
    name:string
    mail:string
    password:string
}

 export class Conversation {
    id:string
    me:User
    friend:User
    messeges:string[] = ['ברוך הבא']
    createTime:string
}
