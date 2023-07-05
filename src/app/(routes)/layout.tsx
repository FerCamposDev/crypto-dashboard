'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import { WagmiConfig, createConfig, mainnet } from 'wagmi';
import { createPublicClient, http } from 'viem';

const inter = Inter({ subsets: ['latin'] });

/* export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
} */
const queryClient = new QueryClient();

const config = createConfig({
	autoConnect: true,
	publicClient: createPublicClient({
		chain: mainnet,
		transport: http()
	}),
});

type Props = {
  children: React.ReactNode
};

const RootLayout: React.FC<Props> = ({ children }) => {
	return (
		<html lang="en">
			<body className={inter.className}>
				<QueryClientProvider client={queryClient}>
					<WagmiConfig config={config}>
						{children}
					</WagmiConfig>
				</QueryClientProvider>
			</body>
		</html>
	);
};

export default RootLayout;
