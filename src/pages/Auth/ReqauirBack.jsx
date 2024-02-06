import {Outlet, Navigate, useLocation} from "react-router-dom";

const ReqauirBack = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  return (
    <div>
      {token ? (
        <Navigate state={{from: location}} replace to="/" />
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default ReqauirBack;
