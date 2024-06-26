import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { addUser, removeUser } from "../../utils/slices/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../../utils/constants/constants";
import { ChevronDown } from "lucide-react";
import { toggleGptSearch } from "../../utils/slices/gptSlice";
import { changeLanguage } from "../../utils/slices/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);
  const language = useRef();
  const [scrolled, setScrolled] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

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

    return () => {
      unsubscribe();

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  const handleChangeLanguage = () => {
    dispatch(changeLanguage(language.current.value));
  };

  return (
    <header
      className={`fixed top-0 left-0 w-screen z-50 bg-gradient-to-b from-black py-3 ${
        scrolled
          ? "bg-black shadow-[0_2px_25px_2px_rgba(0,0,0,0.9)] animate-[slideDown_0.5s_ease-in-out]"
          : null
      }`}
    >
      <div className="w-full xl:w-[75rem] 2xl:w-[100rem] px-5 md:px-8 xl:px-0 xl:mx-auto">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div className="flex items-center justify-center w-[9.25rem] overflow-hidden">
            <img className="w-full h-auto" src={LOGO} alt="Netflix Logo" />
          </div>

          {user && (
            <div className="flex items-center justify-between md:justify-end gap-x-7 w-full md:w-auto">
              {showGptSearch && (
                <select
                  className="select select-bordered w-full max-w-xs"
                  ref={language}
                  onChange={handleChangeLanguage}
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}
              <button
                className="btn bg-red-600 text-white hover:bg-red-800"
                onClick={handleGptSearch}
              >
                {showGptSearch ? "Browse" : "GPT Search"}
              </button>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost hover:bg-transparent gap-x-4 p-0 flex-nowrap"
                >
                  <div className="w-8 flex items-center justify-center overflow-hidden rounded-md">
                    <img
                      src={user?.photoURL}
                      alt="User default avatar"
                      className="w-full h-auto"
                    />
                  </div>
                  <ChevronDown size={20} color="white" strokeWidth={2} />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-10 menu bg-black w-52 border border-gray-800 p-0 mt-5"
                >
                  <li
                    className="cursor-pointer p-4 text-base font-medium"
                    onClick={handleSignOut}
                  >
                    Sign out of Netflix
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
