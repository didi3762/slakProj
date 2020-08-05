import { createAction, props, createReducer, on, Action } from '@ngrx/store';
import { IUser, IStateUsers } from './users.interface';
/*
        actions
*/
export const addUsers = createAction(
    '[Add Users] Users',
    props<{ users: IUser[] }>()
);

export const addUser = createAction(
    '[Add single User] Users',
    props<{ user: IUser }>()
);

export const deleteUser = createAction(
    '[delete single User] Users',
    props<{ id: number }>()
);

export const getAllusers = createAction(
    '[Get all Users] Users',
    props()
)

export const loginData = createAction(
    '[login data] login',
    props<{ loginData: IUser }>()
)


export const getUser = createAction(
    '[Get  User] Users',
    props<{ user: IUser }>()
)

export const initialState: IStateUsers = {
    users: [],
    paidUsers:[]
};
/*
   reducer
*/
const usersReducer = createReducer(
    initialState,
    on( addUsers, (state: IStateUsers,users): IStateUsers => {
      

        return { ...state , users:users.users }
    }),
    on( addUser, (state: IStateUsers,user): IStateUsers => {
              
        return { ...state ,users:[...state.users,user.user]}
    }),
    on( loginData, (state: IStateUsers,user): IStateUsers => {

        const data:IUser = user.loginData
        // data.islogin = true
        
              
        return { ...state ,users:[data]}
    }),
);

export function reducerUser(state: IStateUsers | undefined, action: Action) {

    return usersReducer(state, action);
}

