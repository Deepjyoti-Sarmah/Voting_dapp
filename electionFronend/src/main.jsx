import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import '@rainbow-me/rainbowkit/styles.css';

// import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
// import { configureChains, createClient, WagmiConfig } from 'wagmi';
// import { mainnet, polygonMumbai, optimism, arbitrum } from 'wagmi/chains';
// import { alchemyProvider } from 'wagmi/providers/alchemy';
// import { publicProvider } from 'wagmi/providers/public';


// const { chains, provider } = configureChains(
//   [polygonMumbai],
//   [
//     alchemyProvider({ apiKey: import.meta.env.REACT_APP_ALCHEMY_ID }),
//     publicProvider()
//   ]
// );

// const { connectors } = getDefaultWallets({
//   appName: 'FileStorage',
//   chains
// });

// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors,
//   provider
// })


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig> 
  </React.StrictMode>,
);
