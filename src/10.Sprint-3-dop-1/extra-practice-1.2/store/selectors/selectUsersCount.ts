import {RootStoreType} from "../index.ts";


export const selectUsersCount = (state: RootStoreType): number => state.userCount.count;
