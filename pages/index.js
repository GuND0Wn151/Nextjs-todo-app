import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useUser } from '@auth0/nextjs-auth0/dist/frontend'
export default function Home() {
  const {user,error,isLoading}  = useUser();
  
  return (
    <>
    <div className='flex items-center justify-center '>
      
    <img src={user.picture} className="object-contain h-50 w-40 mt-10 rounded-full " alt=""/>
    
    </div>
    <div className='header flex justify-center'>
      <h1 className='font-semibold mt-3 text-2xl'>
        {user.name} 
      </h1>
      
    </div>
    <p className='header flex justify-center font-serif'>The Todos Left are</p>
    </>

  )
}
