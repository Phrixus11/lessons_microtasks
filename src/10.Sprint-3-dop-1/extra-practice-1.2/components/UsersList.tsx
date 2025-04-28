import {FC, memo} from 'react';
import { UserType } from '../types';
import { User } from './User';

type PropsType = {
  users: UserType[];
};

export const UsersList: FC<PropsType> = memo(({users}) => {
  return (
    <>
      {users.map(({id, name}) => <User key={id} id={id} name={name} />)}
    </>
  );
});
