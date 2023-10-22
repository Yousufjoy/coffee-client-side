import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userInfo = { user, loading, createUser };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider> // jei jei componenet e ami data pathate chai sekhane provider diye warp kore dibo children hisebe sob route jehetu nisi tai, ar value hocche jei value ta component e pathaite chai rki
  );
};

export default AuthProvider;
