import { getAuth, signOut } from "firebase/auth";
import { auth } from "@/app/config/firebaseConfig";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


export default function Header() {
    
    const router = useRouter();
    
    async function signOutHandler() {
    
    
      try {
    
        await signOut(auth);
        
        toast.success("Sign-out successful.");
        
        router.push("/auth/signup");
    
      } catch (error:any) {
        toast.error(error.message);
        console.error(error.message);
      }
    }


  return (

    <div className="relative w-full border-b-2 border-darker-blue">

      <div className="flex justify-between items-center p-3 w-11/12 mx-auto">

        <div>

          <h1 className="text-white font-bold">

            LO <span className="bg-light-blue p-1 rounded-md">Go</span>
          </h1>

        </div>
        <button onClick={signOutHandler} className="text-light-blue font-bold text-base">
          Sign Out
        </button>
      </div>
    </div>
  );
}



