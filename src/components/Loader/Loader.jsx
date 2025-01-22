import css from "./Loader.module.css";
import { InfinitySpin } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#87d28d"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};
