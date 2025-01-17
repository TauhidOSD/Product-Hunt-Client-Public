

import { createContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { app } from '../firebase/firebase.config'
import useAxiosPublic from '../hooks/useAxiosSecure/useAxiosPublic'

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const axiosPublic = useAxiosPublic();

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = async () => {
    setLoading(true)
    return signOut(auth)
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      if(currentUser){

        const userInfo = {email: currentUser.email};
        axiosPublic.post('/jwt',userInfo)
        .then(res => {
          if(res.data.token){
            localStorage.setItem('access-token',res.data.token);
          }
        })
//
      }
      else{
      localStorage.removeItem('access-token');
      }
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider



// import { createContext, useEffect, useState } from "react";
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { app } from "../firebase/firebase.config";
// const AuthContext =createContext(null);
// const auth =getAuth(app)
// const AuthProvider = ({children}) => {
 
//     const [user,setUser] =useState(null);
//     const [loading,setLoading] =useState(true);

//     const createUser = (email, password) =>{
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password)
//     }

//     const signIn =(email, password) => {
//         setLoading (true);
//         return signInWithEmailAndPassword(auth,email, password);
//     }

//     const logOut = () =>{
//         setLoading(true);
//         return signOut(auth);
//     }

//     useEffect( () =>{
//       const unsubscribe =  onAuthStateChanged(auth,currentUser => {
//             setUser(currentUser);
//             console.log('current user', currentUser);
//             setLoading(false);

//         });

//         return () => {
//             return unsubscribe();
//         }
//     },[])
//     const authInfo = {
//             user,
//             loading,
//             createUser,
//             signIn,
//             logOut
//     }


//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;


