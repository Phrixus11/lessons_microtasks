import {Fragment, useCallback, useEffect, useState} from 'react';
import {selectUsers, selectUsersCount} from './store/selectors';
import {createUser, plusUserCount} from './store/actions';
import {v1} from 'uuid';
import {CustomButton, UsersCountValue} from './components';
import {UsersList} from './components';
import {generateRandomName} from './utils';
import {SetTimeoutType} from './types';
import {AppDispatch} from "./store";
import {useDispatch, useSelector} from 'react-redux';

const DELAY = 500;

export const App_sprint3_1_2 = () => {


  const users = useSelector(selectUsers);
  const usersCount = useSelector(selectUsersCount);

  const [isAddNewUser, setIsAddNewUser] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const timeoutId: SetTimeoutType = setTimeout((): void => {
      setIsAddNewUser(false);
    }, DELAY);

    return () => clearTimeout(timeoutId);
  }, [users.length]);

  useEffect(() => {
    if (users.length > 0 && isAddNewUser) {
      dispatch(plusUserCount());
    }
  }, [dispatch, users.length, isAddNewUser]);

  const handleClick = useCallback((): void => {
    dispatch(createUser({id: v1(), name: generateRandomName()}));

    setIsAddNewUser(true);
  }, [dispatch]);

  return (
    <Fragment>
      <UsersCountValue usersCount={usersCount} />

      <CustomButton
        title="Click Me"
        isButtonDisabled={isAddNewUser}
        onClick={handleClick}
      />

      <UsersList users={users} />
    </Fragment>
  );
};
