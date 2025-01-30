import DocumentTitle from '../../components/DocumentTitle';
import { useNavigate } from "react-router-dom";
import { Icon } from '../../components/Icon/Icon.jsx';
import css from './HomePage.module.css';
import mainFoto from '../../assets/images/mainFoto.jpg';
import mainFoto2x from '../../assets/images/mainFoto2x.jpg';
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
  const navigate = useNavigate();

  const buttonClick = () => {
    navigate("/psychologists");
  };

  return (
    <section className={css.home}>
    <div className={`container ${css.container}`}>
      <DocumentTitle>Home</DocumentTitle>
      <div className={css.hero}>
        <h1 className={css.mainHeader}>
          <span>The road to the </span>
          <span className={css.italicText}>depths</span>
          <span> of the human soul</span>
        </h1>
        <p className={css.text}>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <button type="button" className={css.button} onClick={buttonClick}>
          <span className={css.buttonText}>Get started</span>
          <Icon
            width={14}
            height={18}
            href="icon-arrow"
            className={css.iconArrow}
          />
        </button>
      </div>
      <div className={css.info}>
        <div className={css.thumb}>
          <img
            srcSet={`${mainFoto} 1x, ${mainFoto2x} 2x`}
            src={mainFoto}
            alt="Foto woman psychologist"
            className={css.mainImg}
          />
        </div>
        <div className={css.quantity}>
          <div className={css.iconWrapper}>
            <Icon
              width={20}
              height={15}
              href="icon-check"
              className={css.check}
            />
          </div>
          <p>
            <span className={css.quantityText}>Experienced psychologists</span>
            <span className={css.quantityNumber}>15,000</span>
          </p>
          
        </div>
        <div className={css.question}>
          <Icon
              width={9}
              height={15}
              href="icon-question"
              className={css.questionIcon}
            />
          </div>
      </div>
    </div>
    </section>
  );
};

export default HomePage;
