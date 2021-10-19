import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../Pages/Login/Firebase/Firebase.init";

  firebaseInitialize();

const useFirebase =()=>{
    const [user, setUser]= useState({});
    

    const auth = getAuth();

    const signInUsingGoogle=()=>{
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then((result) => {
            setUser(result.user);
  })
    }
    
//observe user;s state change.............
    useEffect(()=>{
      const unsubscribed = onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }else{
                setUser({})
            }
        });
        return ()=> unsubscribed;
    },[])

    const logOut = ()=>{
        setUser(auth)
        .then(()=>{});
    }


    return{
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;