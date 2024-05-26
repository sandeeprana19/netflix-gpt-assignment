import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const fullName = useRef();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleFormSubmission = () => {
    const fullNameValue = fullName?.current?.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const message = checkValidData(fullNameValue, emailValue, passwordValue);

    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: fullNameValue,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg')] w-screen min-h-screen bg-no-repeat bg-cover bg-center">
      <Header />
      <div className="w-[28.125rem] py-12 px-[4.25rem] bg-black bg-opacity-80 rounded absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-[2rem] font-bold text-white mb-7">
            Sign {isSignInForm ? "In" : "Up"}
          </h1>
          <div className="flex flex-col gap-y-4">
            {!isSignInForm && (
              <input
                ref={fullName}
                type="text"
                placeholder="Full Name"
                className="p-4 h-14 rounded bg-gray-800 border border-gray-400 text-white w-full focus-visible:outline-none"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email"
              className="p-4 h-14 rounded bg-gray-800 border border-gray-400 text-white w-full focus-visible:outline-none"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-4 h-14 rounded bg-gray-800 border border-gray-400 text-white w-full focus-visible:outline-none"
            />
            {errorMessage && (
              <p className="text-lg font-bold text-red-500 py-2">
                {errorMessage}
              </p>
            )}
            <button
              className="bg-red-500 rounded text-base text-white h-10 font-medium"
              onClick={handleFormSubmission}
            >
              Sign {isSignInForm ? "In" : "Up"}
            </button>
          </div>

          {isSignInForm ? (
            <p
              className="text-base text-gray-400 mt-7 cursor-pointer"
              onClick={toggleSignInForm}
            >
              New to Netflix GPT?
              <span className="text-white font-medium ml-1">Sign up now.</span>
            </p>
          ) : (
            <p
              className="text-base text-gray-400 mt-7 cursor-pointer"
              onClick={toggleSignInForm}
            >
              Already registered?
              <span className="text-white font-medium ml-1">Sign in now.</span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
