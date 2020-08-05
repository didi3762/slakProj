import { MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';
import { IStateUsers, IUser, AppState } from './users.interface';

export const selectUSersFeature :MemoizedSelector<object,IStateUsers>= createFeatureSelector<AppState, IStateUsers>('users');

export const usersFeature:MemoizedSelector<object,IUser[]>= createSelector(
  selectUSersFeature,
  (state):IUser[]=>state.users
)

export const selectUsersName:MemoizedSelector<object,string[]> = createSelector(
    usersFeature,
  (users: IUser[]) :string[]=> users.map(user=>user.name)
);

export const currentUserSelector :MemoizedSelector<object,IStateUsers> = createFeatureSelector<AppState, IStateUsers>('users');

export const userCurrent:MemoizedSelector<object,IUser>= createSelector(
    currentUserSelector,
    (state):IUser=>state.users[0]
  )
  
 