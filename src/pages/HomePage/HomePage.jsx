import DocumentTitle from '../../components/DocumentTitle';
import {Icon} from '../../components/Icon/Icon.jsx';
import css from './HomePage.module.css';
// import { useDispatch } from "react-redux";
// import { logIn } from "../../redux/auth/operations";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../../utils/firebaseAuth.js';

const HomePage = () => {
  // const dispatch = useDispatch();
  // dispatch(
  //   logIn({

  //       email: "unn8000@i.ua",
  //       password: "asd1234",
  //     })
  //   );
  // createUserWithEmailAndPassword(auth, "unn1000@i.ua", "asd1234")
  //   .then((user) => {
  //     console.log(user);

  //   })
  //   .catch((error) => console.log(error));

  return (
    <div className={`container ${css.container}`}>
      <DocumentTitle>Home</DocumentTitle>
      <div>
        <h1>
          <span>The road to the</span>
          <span>depths</span>
          <span>of the human soul</span>
        </h1>
        <p>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <button type="button">
          <span>Get started</span>
          <Icon
            width={16}
            height={16}
            href="icon-arrow"
            className={css.iconArrow}
          />
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default HomePage;
