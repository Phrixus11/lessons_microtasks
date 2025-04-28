
import { UserType } from '../../types';
import {createUser} from "../actions";


const initState = {
  users: [] as UserType[],
};

type InitStateType = typeof initState;
type ActionsType = ReturnType<typeof createUser>;

export const usersReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {    
    case 'CREATE_USER':
      return {
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};
