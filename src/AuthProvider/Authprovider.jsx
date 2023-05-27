import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.congig";

export const AuthContext = createContext();


const Authprovider = ({ children }) => {
     const [user, setUser] = useState(null);
     const gooogleprovider=new GoogleAuthProvider();
     const [loading, setloading] = useState(true);
     const auth = getAuth(app);
     const creacUser = (email, password) => {
          setloading(true)
          return createUserWithEmailAndPassword(auth, email, password)
     }
     const singIn = (email, password) => {
          setloading(true)
          return signInWithEmailAndPassword(auth, email, password)
     }

     useEffect(() => {
          const unsubcript = onAuthStateChanged(auth, currentUser => {
               setUser(currentUser)
               setloading(false)
          })
          return () => {
               unsubcript()
          }
     }, []);

     const logOut = () => {
          setloading(true);
          return signOut(auth);
      }
  
      const updateUserProfile = (name, photo) => {
          return setloading(auth.currentUser, {
              displayName: name, photoURL: photo
          });
      }
      const Googlesing=()=>{
           return signInWithPopup(auth,gooogleprovider)
      }
     const userinfo = {
          user,
          creacUser,
          singIn,
          logOut,
          loading,
          updateUserProfile,
          Googlesing
     }
     return (


          <div>

               <AuthContext.Provider value={userinfo}>
                    {children}
               </AuthContext.Provider>

          </div>
     );
};

export default Authprovider;