import { createContext, useState } from "react";

// context create
export const AuthContext = createContext(null);
const googleProvider = new googleProvider();

// auth provider component
const AuthProvider = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const LoginUser = (email, password) => {};
  return <div></div>;
};

export default AuthProvider;
