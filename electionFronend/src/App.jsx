import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import { ConnectButton } from "@rainbow-me/rainbowkit";

function App() {

  return (
    <>
      <div className="bg-black text-white">
        <div className="flex items-center justify-between flex-row px-4 py-2">
          <h1 className="text-2xl font-bold">Election</h1>
          <ConnectButton />
        </div>
        <div className="flex items-center justify-center min-h-screen">
          <h1 className="text-4xl font-extrabold">Vote</h1>
        </div>
      </div>
    </>
  )
}

export default App
