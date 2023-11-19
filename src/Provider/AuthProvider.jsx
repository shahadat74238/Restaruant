import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const createUser = (email, password) =>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   }


   useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
         setUser(currentUser);
         console.log(currentUser);
         setLoading(false);
      });
      return ()=>{
         return unSubscribe;
      }
   }, [])

   const loginUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider)
   }

   const updateUserProfile = (name, photo) =>{
      setLoading(true);
      return updateProfile(auth.currentUser, {
         displayName: name, photoURL: photo
       })
   };

   const logOut = () =>{
      setLoading(true);
      return signOut(auth);
   }


   const authInfo = {
      user,
      loading,
      createUser,
      loginUser,
      googleLogin,
      logOut,
      updateUserProfile
   }

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;