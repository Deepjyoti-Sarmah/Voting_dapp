import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import AddCandidate from "./components/AddCandidate";
import Voting from './components/Voting';

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useContract} from 'wagmi';

import { CONTRACT_ADDRESS, CONTRACT_ABI } from './CONTRACT';

function App() {

	const [screen, setScreen] = useState('home');
	const {address} = useAccount();

	// const { data: signer } = useWalletClient();
	const contract = useContract({
		address: CONTRACT_ADDRESS,
		abi: CONTRACT_ABI,
		signerOrProvider: signer
	});

	console.log(contract)



	const RenderScreen = () => {
		return (
			<div className="flex flex-col gap-4 items-center justify-center min-h-screen">
				{
					screen === 'addCandidate' ? (
						<AddCandidate setScreen={setScreen} />
					) : (
						<Voting setScreen={setScreen} />
					)
				}
			</div>
		)
	}

	return (
		<div className="bg-black text-white">
			<div className="flex items-center justify-between flex-row px-4 py-2">
				{/* Logo */}
				<h1 className="text-2xl font-bold">Election</h1>
				<ConnectButton />
			</div>
			{
				screen === 'home' ? (
					<div className="flex flex-col gap-4 items-center justify-center min-h-screen">
						<h1 className="text-4xl font-extrabold">Election</h1>
						{
							address ? (
								<div className="flex flex-row gap-4 items-center justify-center">
									<button 
                onClick={() => setScreen('addCandidate')} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add Candidate</button>
									<button
                onClick={() => setScreen('vote')} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Vote</button>
								</div>
							) : (
								<ConnectButton />
							)
						}
					</div>
				) : (
					<RenderScreen />
				)
			}
		</div>
	);
}

export default App
