const checkValidData = (
  password,
  confirmPassword = null,
  isSignUpForm = false
) => {
  const isPassword = String(password).length >= 6;
  if (!isPassword)
    return "Password is not valid. Please enter at least 6 characters.";

  if (isSignUpForm && confirmPassword !== password) {
    return "Passwords do not match";
  }
  return null;
};

export default checkValidData;
