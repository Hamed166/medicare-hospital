import React from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import useAuth from '../../../Hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react/cjs/react.development';



const Login = () => {
    
    const [email, setEmail]= useState('');
    const [password, setPassword]=useState('');
    const [error, setError]= useState('');
    const [islogin, setIsLogin]= useState(false)

    const auth = getAuth();

    const {signInUsingGoogle}= useAuth();

    const toggleLogin=e=>{
        setIsLogin(e.target.checked);
    }
    
    const handleEmailChange= e=>{
        setEmail(e.target.value);
    }
    const handlePasswordChange= e=>{
        setPassword(e.target.value);
    }
const handleRegistration= e=>{
    e.preventDefault();
    console.log( email, password)
    if(password.length < 6){
        setError('Your Password must be 6(six) character long')
        return;
    }if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
        setError('Your Password must have two uppercase letters(A-Z)')
        return;
    }

    islogin? loginProcess(email, password) : createNewUser(email, password);
}


    const loginProcess =(email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
            .then(result=>{
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error=>{
                setError(error.message);
            })
    }

    const createNewUser =( email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setError('');
            verifyEmail();
        })
        .catch(error=>{
            setError(error.message);
        })
    }
    const verifyEmail=()=>{
        sendEmailVerification(auth.currentUser)
        .then(result=>{
            console.log(result)
        })
    }
    return (
        <div>
            <div className="mt-24 ">
                <div className=" bg-cover mix-blend-multiply bg-amber-300 ">
                    <img className="w-full" src="../../3.png" alt=""/>
                </div>
                <div className="relative right-10 -top-40 left-0 bottom-0">
                    <h2 className=" text-center text-5xl text-white font-bold">Contact</h2>
                </div>
            </div>
            <div className="container mx-auto mx-2 mt-12">
                <div className="grid grid-cols-3 gap-8 overflow-hidden ">
                    <div className="flex bg-gray-200 p-4 rounded-md">
                        <div className="mx-2">
                            <h4 className="bg-blue-400 rounded-full text-2xl h-20 w-20 p-5 "><FontAwesomeIcon icon={faPhone} /></h4>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-lg text-indigo-900">Our Phone</h3>
                            <p>0187778899</p>
                        </div>
                    </div>
                    <div className="flex bg-gray-200 p-4 rounded-md">
                        <div className="mx-2">
                            <h4 className="bg-blue-400 text-2xl rounded-full h-20 w-20 p-5 "><FontAwesomeIcon icon={faEnvelope} /></h4>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-lg text-indigo-900">Our Email</h3>
                            <p>react-hero@.com</p>
                        </div>
                    </div>
                    <div className="flex bg-gray-200 p-4 rounded-md">
                        <div className="mx-2">
                            <h4 className="bg-blue-400 text-2xl rounded-full h-20 w-20 p-5 "><FontAwesomeIcon icon={faAddressCard} /></h4>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-lg text-indigo-900">Our Address</h3>
                            <p>2 St, Chittagong</p>
                        </div>
                    </div>
                </div>
                <div className="flex my-16  p-4 rounded-md">
                
                    <div className="flex-1 h-20 w-72 mt-16">
                        <span className="uppercase  font-bold text-sm text-gray-600">Get In Touch---</span>
                        <h3 className="text-4xl uppercasr font-black text-blue-500  my-4">Write Us a Message</h3>
                        <p className="my-8 text-gray-600 text-sm text-justify">Being in control of your life and having realistic expectations about your day-to-day challenges are the keys to stress management</p>
                        
                    </div>
                    <form onSubmit={handleRegistration} className="flex-1 bg-gray-50 mt-5 mx-8">
                        <h2 className="text-blue-600 font-bold text-2xl mt-2">Please {islogin ? 'Login': 'Register'}</h2>
                        <div className="p-8">
                                <div className="grid grid-cols-2 gap-8 ">
                                <div>
                                    <div>
                                        <input  type="text" placeholder="Fisrt Name"className=" w-full border-solid border-2 border-light-blue-900 outline-none p-4 rounded-md" required/>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                    <input type="text" placeholder="Last Name" className="w-full border-solid border-2 border-light-blue-900 outline-none p-4 rounded-md" required/>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                    <input onBlur={handleEmailChange} type="email" placeholder="Email" className=" w-full border-solid border-2 border-light-blue-900 outline-none p-4 rounded-md" required/>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                    <input onBlur={handlePasswordChange} type="password" placeholder="Password" className="w-full border-solid border-2 border-light-blue-900 outline-none p-4 rounded-md" required/>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                    <input onChange={toggleLogin} type="checkbox"  className="w-full h-8  p-8 rounded-md" required/>
                                    <label className="text-lg text-thin text-blue-400">Alreadey Registered!</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="text-lg text-red-500 mb-4">{error}</div>
                            <button  type="submit" name="submit" className=" bg-yellow-400 hover:bg-green-400 bg-yellow-400 py-4 px-8 rounded-md">{islogin ? 'Login': 'Register'}</button>
                        </div>
                        <br/>
                        <div>
                            <button onClick={signInUsingGoogle} className="bg-blue-400 rounded p-2 mt-2">Sign in with Google</button>
                        </div>
                    </form>
                </div>
         </div>
    </div>
    );
};

export default Login;