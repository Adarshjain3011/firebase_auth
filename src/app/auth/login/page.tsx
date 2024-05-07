
"use client"

import { FcGoogle } from "react-icons/fc";



import {

    signInWithPopup,
    GoogleAuthProvider,
    getAuth

} from "firebase/auth";

import {auth} from "@/app/config/firebaseConfig";

import { useState } from "react";


const GoogleSignUp = () => {

    const [error, setError] = useState(false);

    const [googleErrorMessage, setGoogleErrorMessage] = useState("");


    // Handle user sign up with google
    const handleGoogleSignIn = async () => {
        try {
            // Sign in with Google provider
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            if (user) {
                // Check if user exists in Firestore
                const userRef = doc(firestore, 'users', user.uid);
                const userDoc = await getDoc(userRef);

                if (userDoc.exists()) {
                    // User exists in Firestore, fetch additional data
                    const userData = userDoc.data();
                    console.log('User data from Firestore:', userData);
                    // Display user data or perform additional actions
                } else {
                    // User doesn't exist in Firestore, create new user document
                    await setDoc(userRef, {
                        displayName: user.displayName,
                        email: user.email,
                        // Add any other user data you want to store
                    });
                    console.log('New user document created in Firestore');
                    // Perform further actions after user document creation
                }

                // Redirect user to another page or update UI as needed
            }
        } catch (error:any) {
            // Handle specific error cases
            if (error.code === 'auth/account-exists-with-different-credential') {
                // User tried to sign in with a credential that's already associated with a different account
                toast.error('This email is already associated with a different account. Please sign in using the correct method.');

            } else {
                // General error handling
                toast.error(error.message);
            }
        }
    }

    return (
        <div className='signupContainer'>
            <div className='signupContainer__box__google'>
                <button onClick={handleGoogleSignUp}>
                    <span>
                        <FcGoogle />
                    </span>
                    Sign Up with Google
                </button>
                {error && <p>{googleErrorMessage}</p>}
            </div>

            <div className='signupContainer__box__login'>
                <p>
                    Already have an account? Singup
                </p>
            </div>


        </div>
  );
};

export default GoogleSignUp;




