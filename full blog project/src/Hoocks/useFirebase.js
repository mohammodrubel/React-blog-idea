import { GoogleAuthProvider , getAuth, signInWithPopup, signOut ,onAuthStateChanged} from "firebase/auth";
import { useEffect } from "react";
import { useState } from 'react';
import initializeFirebase from './../Pages/Login/Firebase/FirebaseInitialize';
initializeFirebase()

const useFirebase = ()=>{
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)
    const auth = getAuth();
    

    const singInWithGoogle = ()=>{
        setLoading(true)
        const googleprovider = new GoogleAuthProvider();
        signInWithPopup(auth,googleprovider)
        .then((result)=>{
            setUser(result.user)
        })
        .finally(()=> setLoading(false))
    }

    const logIn = ()=>{
        setLoading(true)
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(()=>setLoading(false))
    }

    const unSubscribe =useEffect(()=>{
        onAuthStateChanged(auth,user =>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setLoading(false)
        })
        return ()=> unSubscribe
    },[])


    return {
        loading,
        logIn,
        user,
        singInWithGoogle
    }
}

export default useFirebase