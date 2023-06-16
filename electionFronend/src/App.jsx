import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

// import { ConnectButton } from "@rainbow-me/rainbowkit";

function App() {

  return (
    <>
      <div className='flex items-center justify-center min-h-screen bg-black text-white'>
        <h1 className='text-4xl font-extrabold'>Election Dapp</h1>
        <ConnectButton />
      </div>
      
    </>
  )
}

export default App
