import React from "react";
import { useUser } from "@auth0/nextjs-auth0/dist/frontend";

function Navbar() {
const { user, error, isLoading } = useUser();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-700 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        
        <span className="font-semibold text-xl tracking-tight">Nextjs Todo App</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Blog
          </a>
        </div>
        <div>
            
            <a
               href={user!=null? "/api/auth/logout":"/api/auth/login"} 
               className=' font-semibold text-white mt-4 px-3 py-4' 
            >
            {user!=null?"Logout":"Login"}
            </a>
          
           <p
          className='inline-block font-semibold text-white '>
            {user!=null && user.name!=null?user.name:""}
          </p>
         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
