import DocumentTitle from '../../components/DocumentTitle';
import css from './HomePage.module.css'
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
// import { createUserWithEmailAndPassword } from "firebase/auth"; 
// import { auth } from '../../utils/firebaseAuth.js';

 const HomePage = ()=> {
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
        <>
        <DocumentTitle>Home</DocumentTitle>
        <p>Home</p>
        </>
    )
}

export default HomePage;