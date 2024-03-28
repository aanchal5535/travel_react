'use client'
import { FcGoogle } from 'react-icons/fc'
import LoginImage from '../assests/maldives2.jpg'


export default function Login() {
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f4f1] ">
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 overflow-hidden">
        <section className=" relative">
          <img
            src={LoginImage}
            alt="Login page "
            className="w-[450px] h-full hidden rounded-3xl p-3 md:block object-cover"
          />
        </section>

        <section className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Welcome back</span>
          <span className="font-light text-gray-400 mb-8">
            Welcome back! Please enter your details
          </span>
          <form  className="flex flex-col">
            <input  type="hidden"  />

            <input
         
              className="w-full border border-neutral-400 p-2 rounded-lg text-black text-sm mt-5"
              type="text"
              placeholder="Email"
              required
            />
            <input
            
              className="w-full border border-neutral-400 p-2 rounded-lg text-black text-sm mt-5"
              type="text"
              placeholder="Password"
              required
            />

            <div className="flex justify-between w-full py-4">
              <div className="mr-24">
                <input type="checkbox" name="ch" id="ch" className="mr-2" />
                <span className="text-md">Remember Me</span>
              </div>
              <a href="#" className="text-black text-md  hover:text-blue-500 ">
                Forget Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-lg mb-6 hover:bg-blue-400 "
            >
             Login
            </button>
          </form>
          <p className="font-medium text-sm text-[#9A9A9A] text-center ">
            --- Or login with ---
          </p>
          <br />
          <button
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:text-black hover:bg-white border border-black"
           
          >
            <FcGoogle className="w-6 g-6 inline mr-2" />
            Sign in with Google
          </button>
         
        </section>
      </div>
    </div>
  )
}
