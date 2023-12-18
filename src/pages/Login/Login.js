import React,{useRef,useState,useEffect} from 'react';
import {  
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword

} from 'firebase/auth';
import { auth,firestore } from '../../firebase';
import { addDoc, collection, doc, setDoc,getDoc } from 'firebase/firestore';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userType, setUserType] = useState(); // ["consumer", "stakeholder", "recycler"]
  const emailRef = useRef();
  const passwordRef = useRef();
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    const email = loginEmailRef.current.value;
    const password = loginPasswordRef.current.value;

    signInWithEmailAndPassword(auth, email, password)
      .then(async(userCredential) => {
        const user = userCredential.user;
        const userDocRef = doc(firestore, 'users', user.uid);
        const userDocSnapshot = await getDoc(userDocRef);
    
        if (userDocSnapshot.exists()) {
          const userType = userDocSnapshot.data().userType;
          user.userType = userType;
        localStorage.setItem("user", JSON.stringify(user));

        // Redirect based on user type
        handleUserTypeRedirect(userType);
        }
      }
      )
  };

  const onSignUp = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(async(userCredential) => {
        const user = userCredential.user;
        user.userType = userType;
        // Save additional user details in Firestore
      const userDocRef = doc(firestore, 'users', user.uid);

    // You can use setDoc to replace the entire document or addDoc to create a new document
    await setDoc(userDocRef, {
      email: user.email,
      userType: userType, // Set your key element here
      // Add more fields as needed
    });

      localStorage.setItem("user", JSON.stringify(user));

        // Redirect based on user type
        handleUserTypeRedirect(userType);
      })
      .catch((error) => {
        console.error('Error signing up:', error.message);
      });
  };

  const handleUserTypeRedirect = (type) => {
    switch (type) {
      case "consumer":
        navigate("/consumer");
        break;
      case "stackholder":
        navigate("/stackholder");
        break;
      case "recycler":
        navigate("/recycler");
        break;
      default:
        // Handle other user types or show an error
        console.error('Unknown user type:', type);
    }
  };
 
  
return (
<div class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form onSubmit={onLogin} class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" ref={loginEmailRef} required/>
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" ref={loginPasswordRef} required/>
            </div>
            <input type="submit" value="sign in" class="btn solid" id="sign in" />
            <p class="social-text">Or Sign in with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form onSubmit={onSignUp} class="sign-up-form">
            <h2 class="title">Sign up</h2>
            {/* <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div> */}
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" ref={emailRef} required />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" ref={passwordRef} required/>
            </div>
            <div>
              <label for="userType">User Type</label>
              <select name="userType" id="userType" onChange={(e) => setUserType(e.target.value)}>
                <option value="none" selected disabled hidden></option>
                <option value="consumer">Consumer</option>
                <option value="stackholder">Stackholder</option>
                <option value="recycler">Recycler</option>
              </select>
            </div>
            <input type="submit" class="btn" value="Sign up"/>
            <p class="social-text">Or Sign up with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>
              
            </p>
            <button class="btn transparent" id="sign-up-btn" onClick={
              () => {
                const container = document.querySelector('.container');
                container.classList.add("sign-up-mode");
              }
            }>Sign up</button>
          </div>
          <img src="img/log.svg" class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>
              
            </p>
            <button class="btn transparent" id="sign-in-btn" onClick={
              () => {
                const container = document.querySelector('.container');
                container.classList.remove("sign-up-mode");
              }
            }>Sign in</button>
          </div>
          <img src="img/register.svg" class="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login
