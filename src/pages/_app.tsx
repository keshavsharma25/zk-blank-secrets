import { BlanksContext } from "@/context/blanks";
import "@/styles/globals.css";
import { defaultBlanks } from "@/utils/blanks";
import { config, queryClient } from "@/utils/config";
import { QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider } from "connectkit";
import type { AppProps } from "next/app";
import { WagmiProvider } from "wagmi";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<ConnectKitProvider>
					<BlanksContext.Provider value={defaultBlanks}>
						<Component {...pageProps} />
					</BlanksContext.Provider>
				</ConnectKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
}
