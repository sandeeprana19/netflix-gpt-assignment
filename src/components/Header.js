import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <header className="absolute top-0 left-0 w-screen z-50 bg-gradient-to-b from-black">
      <div className="w-[75rem] mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center w-[9.25rem] overflow-hidden">
            <img
              className="w-full h-auto"
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="Netflix Logo"
            />
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
