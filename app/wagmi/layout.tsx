'use client';
import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';

import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import config from './config';
const queryClient = new QueryClient();

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
       <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
            <RainbowKitProvider coolMode>
              {children}
            </RainbowKitProvider>
        </QueryClientProvider>
    </WagmiProvider>
    </div>
  );
}

