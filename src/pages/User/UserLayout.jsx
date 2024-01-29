import {useLocation, Navigate} from "react-router-dom";
import {Outlet} from "react-router-dom";
import UserSideBar from "../../components/user/UserSideBar";

const UserLayOut = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("userData"));
  return (
    <div className="min-h-screen flex gap-1 md:gap-8">
      <UserSideBar />
      <div className="grow min-h-full w-full overflow-hidden ">
        {token && user.role === "user" ? (
          <Outlet></Outlet>
        ) : (
          <Navigate state={{from: location}} replace to="/login" />
        )}
      </div>
    </div>
  );
};

export default UserLayOut;
