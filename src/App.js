import './App.css';
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import auth from './firebase.init';
import { useState } from 'react';



function App() {

  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: ''

  });
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {

    signInWithPopup(auth, googleProvider)
      .then(result => {
        const { displayName, photoURL, email } = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        }
        setUser(signedInUser);
      })
      .catch(error => {
        console.error('error', error)
      })
  }


  const handleSignOut = () => {
    signOut(auth)
      .then(res => {
        const signOutUser = {
          isSignedIn: false,
          name: '',
          email: '',
          photo: ''

        }
        setUser(signOutUser);
        console.log(res);
      })
      .catch(error => {
        setUser({});
      });
  }


  const handleBlur = (event) => {

    let isFieldValid = true;

    if (event.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }

    if (event.target.name === 'password') {
      const passwordHasNumber = event.target.value.length > 6;
      const isPasswordValid = /\d{1}/.test(event.target.value);

      isFieldValid = isPasswordValid && passwordHasNumber;
    }

    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }

  }

  const handleSubmit = (event) => {
    if (user.name && user.password) {
      console.log('submites')
    }
    event.preventDefault();
  }

  return (
    <>
      <div className="App">
        {
          user.isSignedIn ? <button onClick={handleSignOut} >Sign Out </button> :
            <button onClick={handleGoogleSignIn} >Sign In </button>
        }
        {
          user.isSignedIn && <div>
            <h2>Name: {user.name}</h2>
            <p>I know your email address: {user.email}</p>
            <img src={user.photo} alt="" />
          </div>
        }
        <br />
        <h2>Our Own Authentication</h2>
        <h4>Name:{user.name}</h4>
        <h4>Email:{user.email}</h4>
        <h4>password:{user.password}</h4>
        <form onSubmit={handleSubmit}>
          <input type="text" name='name' onBlur={handleBlur} placeholder='Your Name ' required />
          <br />
          <input type="text" name='email' onBlur={handleBlur} placeholder='Your Email Adress' required />
          <br />
          <input type="password" name='password' onBlur={handleBlur} placeholder='Your Password' required />
          <br />
          <input style={{ width: '200px', backgroundColor: 'red', color: 'white' }} type="submit" value="Sumbit" />
        </form>
      </div>
    </>

  );
}

export default App;
