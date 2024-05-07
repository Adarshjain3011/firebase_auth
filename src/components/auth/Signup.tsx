
"use client"

import React, { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import {
    createUserWithEmailAndPassword,
    signInWithPopup, GoogleAuthProvider,
    fetchSignInMethodsForEmail
} from 'firebase/auth';

import { FcGoogle } from 'react-icons/fc';

import { doc, getDoc, setDoc } from 'firebase/firestore';

import { auth, googleProvider, firestore } from "@/app/config/firebaseConfig";

import { HiOutlineMail } from "react-icons/hi"; // react icons 

import Button from '../common/CTAButton';

import InputField from '../common/CTAInput';

import { useRouter } from 'next/navigation';



const SignupForm: React.FC<any> = () => {

    const router = useRouter();

    const [click, setClick] = useState(false);

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');


    // email password signup handler

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        // Check if the email is already registered

        if (!email || !password) {
            toast.error('Please fill all the fields');
            return
        }

        try {

            console.log('Checking if email is registered...');

            const signInMethods = await fetchSignInMethodsForEmail(auth, email);

            console.log('signInMethods:', signInMethods);

            if (signInMethods && signInMethods.length > 0) {

                console.log('Email is already registered.');

                toast.error('This email address is already registered.');

                return;
            }

            // Email is not registered, proceed with creating a new account

            console.log('Creating new user...');

            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            const user = userCredential.user;

            console.log('User created:', user);

            if (user) {

                // Successfully signed up

                console.log('User signed up:', user);

                toast.success("you are successfully signup.");

                // Redirect to another page or show success message

                router.push("/");

            }
        } catch (error: any) {

            console.log('Error:', error.message);

            toast.error(error.message);

        }
    };



    // google singup handler 

    const handleGoogleSignIn = async () => {

        //     try {

        //       const result = await signInWithPopup(auth, googleProvider);

        //       const user = result.user;

        //       if (user) {

        //         console.log(`User signed in with Google: ${user.uid}`);

        //         const userRef = doc(firestore, "users", user.uid);
        //         const userDoc = await getDoc(userRef);

        //         if (userDoc.exists()) {

        //           console.log("User already exists in Firestore");
        //           toast.error("This email is already registered");

        //         } else {

        //           console.log("Creating new user document in Firestore...");
        //           await setDoc(userRef, {
        //             displayName: user.displayName,
        //             email: user.email,
        //             // Add any other user data you want to store
        //           });
        //           console.log("New user document created in Firestore");
        //           toast.success("You are signed up successfully!");

        //           // Redirect to homepage after sign-up

        //           router.push("/homepage");
        //         }
        //       }
        //     } catch (error:any) {

        //       console.error(`Error in handleGoogleSignIn: ${error.message}`);
        //       toast.error("Failed to sign in with Google. Please try again.");

        //     }
        //   };


        try {

            // Sign in with a pop-up window

            const result = await signInWithPopup(auth, googleProvider);

            // Pull signed-in user credential.

            const user = result.user;

            console.log(`User signed in with Google: ${user}`);

            toast.success("user signup successfully ");

            router.push("/");

        } catch (err: any) {

            // Handle errors here.

            const errorMessage = err.message;
            const errorCode = err.code;
            
            toast.error(errorMessage);

        }
    }

    


    return (

        <div className=' relative min-h-screen w-full bg-[#0a1324] flex flex-col m-auto'>

            <h1 className='pl-9 pt-5 text-center'>Journey to a trillion miles starts from here!!</h1>

            {

                !click && <div className=' relative w-full h-full flex flex-col justify-center items-center gap-14 mt-32 '>

                    <div className='flex flex-col gap-3'>

                        <h1 className='text-xl text-center font-bold text-white'> Sign up</h1>

                        <p className='text-white lette tracking-wide'>Choose a Sign up method</p>

                    </div>

                    <div className='flex flex-col gap-5'>

                        <Button icon={FcGoogle} onClick={handleGoogleSignIn}>Sign Up with Google</Button>

                        <Button icon={HiOutlineMail} onClick={() => {

                            setClick(true)

                        }}>Sign Up with Gmail</Button>

                    </div>

                    <p className='text-white/90 text-sm'>Already a user? <span className='text-sky-400 text-sm'>Log in</span> </p>

                </div>
            }

            <div className='relative w-full h-full flex justify-center items-center m-auto p-3'>

                {


                    click && <form onSubmit={handleSubmit} className="max-w-sm  p-6 shadow-2xl  rounded-md shadow-m flex flex-col justify-center items-center gap-6">

                        <h2 className="text-xl font-semibold mb-4 text-teal-600">Sign Up</h2>

                        <div className="">

                            <input

                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter Your Email'
                                className="form-input mt-1 block p-3 w-[300px] rounded-md text- bg-gray-800 border"
                                required
                            />
                        </div>

                        <div className="">

                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Enter Your Password'
                                className="form-input mt-1 block text-white w-[300px] p-3 rounded-md bg-gray-800 border"
                                required
                            />

                        </div>


                        <Button onClick={handleSubmit}>signup</Button>

                    </form>

                }

            </div>

        </div>
    );
};

export default SignupForm;




