/**
 * A HOC AuthContext for project
 * file: auth-context.jsx
 */

import { onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase-config";

const AuthContext = createContext();
function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const value = { userInfo, setUserInfo, loading, setLoading };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const docRef = query(collection(db, "users"));
        where("email", "==", user.email);

        onSnapshot(docRef, (snapshot) => {
          snapshot.forEach((doc) => {
            setUserInfo({
              ...user,
              ...doc.data(),
              id: doc.id,
            });
            setLoading(true);
          });
        });
      } else {
        setUserInfo(null);
      }
    });
  }, []);
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}
function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within AuthProvider");
  return context;
}
export { AuthProvider, useAuth };
