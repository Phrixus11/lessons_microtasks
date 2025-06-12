import { Navigate, Outlet } from "react-router-dom";
import { PATH } from "./router";

// type Props = {
//   children: ReactNode,
// }

export const ProtectedRoute = () => {
  const isAuth: boolean = false
  return (
      <div>
        {isAuth
            ? <Outlet/>
            : <Navigate to={PATH.LOGIN} /> }
      </div>
  );
};