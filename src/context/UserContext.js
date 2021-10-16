import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({
  user: {},
  setUser() {},
  loading: Boolean,
  setLoading() {},
  updateUserName(name) {},
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUser({
        name: "Prasoon",
        email: "abc@gmail.com",
        isActive: true,
      });
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const updateUserName = (name) => [
    setUser((prevState) => {
      return { ...prevState, name };
    }),
  ];

  const value = {
    user,
    setUser,
    loading,
    setLoading,
    updateUserName,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
