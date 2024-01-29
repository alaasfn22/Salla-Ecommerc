import {Outlet} from "react-router-dom";

const ReqauirBack = () => {
  const token = localStorage.getItem("token");
  return token ? window.history.back() : <Outlet />;
};

export default ReqauirBack;
