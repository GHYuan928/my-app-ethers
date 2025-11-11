import {
  getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import {  cookieStorage,
  createStorage } from 'wagmi';
import {
  mainnet,
  sepolia
} from 'wagmi/chains';

const config = getDefaultConfig({
  appName: 'rainbowkit_1',
  projectId: '95b55679d39c9662807e7faa6fbbf2e9',
  chains: [mainnet, sepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
  storage: createStorage({
      storage: cookieStorage,
  })
});
export default config;