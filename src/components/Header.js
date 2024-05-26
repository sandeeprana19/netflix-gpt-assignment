import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());

        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <header className="absolute top-0 left-0 w-screen z-50 bg-gradient-to-b from-black">
      <div className="w-[75rem] mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center w-[9.25rem] overflow-hidden">
            <img className="w-full h-auto" src={LOGO} alt="Netflix Logo" />
          </div>

          {user && (
            <div className="flex items-center gap-x-3">
              <div className="w-8 flex items-center justify-center overflow-hidden">
                <img
                  src={user?.photoURL}
                  alt="User default avatar"
                  className="w-full h-auto"
                />
              </div>
              <button
                className="cursor-pointer text-lg font-bold text-white"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
