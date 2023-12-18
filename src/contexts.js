// // AuthContext.js
// import { createContext, useContext, useState, useEffect } from 'react';
// import {
//     auth,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     signOut,
//   } from './firebase';

// const AuthContext = createContext();

// export const useAuth = () => {
//   return useContext(AuthContext);
// };


// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);

//   const signup = (email, password) => {
//     return createUserWithEmailAndPassword(auth,email, password);
//   };

//   const login = (email, password) => {
//     return signInWithEmailAndPassword(auth,email, password);
//   };

//   const logout = () => {
//     return signOut(auth);
//   };

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//     });

//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     signup,
//     login,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };
