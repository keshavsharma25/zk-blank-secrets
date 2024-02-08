import { QueryClient } from "@tanstack/react-query";
import { getDefaultConfig } from "connectkit";
import { createConfig, http } from "wagmi";
import { scrollSepolia } from "wagmi/chains";

export const config = createConfig(
	getDefaultConfig({
		chains: [scrollSepolia],
		transports: {
			[scrollSepolia.id]: http("https://sepolia-rpc.scroll.io/"),
		},
		walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
		appName: "blank-secrets",
	})
);

export const queryClient = new QueryClient();
