export const checkValidData = (fullName, email, password) => {
  const isFullNameValid =
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
      fullName
    );
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isFullNameValid) return "Full name is not valid";
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
