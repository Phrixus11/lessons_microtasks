import { UserType } from "../../types";


import {RootStoreType} from "../index.ts";


export const selectUsers = (state: RootStoreType): UserType[] => state.usersData.users;
