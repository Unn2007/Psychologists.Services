import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectCamperList } from "../../redux/campers/selectors.js";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  // const campers = useSelector(selectCamperList);
  // const isCampers = campers.length === 0 ? true : false;

  return true ? <Navigate to={redirectTo} /> : Component;
};
