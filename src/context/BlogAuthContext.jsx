import { createContext, useState } from "react";

export const BlogAuthContext = createContext();

export function BlogAuthProvider({ children }) {
  const [isAuthenticated, setAuth] = useState(false);

  const login = (cb) => {
    setAuth(true);
    if (cb) cb();
  };

  const logout = (cb) => {
    setAuth(false);
    if (cb) cb();
  };

  return (
    <BlogAuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </BlogAuthContext.Provider>
  );
}
