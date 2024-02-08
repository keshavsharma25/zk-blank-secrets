import { Blanks } from "@/components/blanks";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BlanksContext } from "@/context/blanks";
import { cn } from "@/lib/utils";
import { ConnectKitButton } from "connectkit";
import { Oswald, Righteous } from "next/font/google";
import { useContext } from "react";

const righteous = Righteous({
	subsets: ["latin"],
	weight: "400",
});

export const oswald = Oswald({
	subsets: ["latin"],
	weight: ["400"],
});

export const options = [
	"cryptography",
	"Interactive Proof Systems",
	"transactions",
	"multi-party computation ",
	"security",
	"privacy",
	"confidentiality",
] as const;

export default function Home() {
	const blanks = useContext(BlanksContext);

	return (
		<div className="flex flex-col items-center pt-10 gap-10 min-h-screen py-2 bg-gray-400">
			<h1 className={cn("text-8xl text-center", righteous.className)}>
				Blank Secrets
			</h1>
			<ConnectKitButton />

			<Separator className="bg-black" />

			<div className="flex flex-col items-center justify-center gap-10">
				<span className={cn("text-4xl", oswald.className)}>
					<b>
						<u>Options</u>
					</b>
				</span>
				<div className="flex gap-5">
					{options.map((option, index) => {
						return (
							<div
								key={index}
								className={cn(
									"flex bg-gray-500 rounded-md px-4 py-2 text-xl",
									oswald.className
								)}
							>
								{option}
							</div>
						);
					})}
				</div>
			</div>

			<Separator className="bg-black" />

			<div
				className={cn(
					"break-words text-2xl mx-16 leading-[60px] text-justify",
					oswald.className
				)}
			>
				Zero-knowledge proofs (ZKPs) represent a groundbreaking advancement in
				technology, particularly within the field of
				<Blanks id="blank1" />
				. First introduced by Shafi Goldwasser, Silvio Micali, and Charles
				Rackoff in their 1985 research paper on
				<Blanks id="blank2" />
				, ZKPs aim to conceal specific information while proving its legitimacy
				to a verifier. These proofs have far-reaching applications, notably in
				blockchain networks where they enhance privacy and fungibility of
				<Blanks id="blank3" />
				. ZKPs also enable identity verification without compromising personal
				information, foster secure
				<Blanks id="blank4" />
				by keeping inputs private, and facilitate encrypted data analysis while
				preserving privacy. In decentralized finance (DeFi), ZKPs are
				instrumental in creating private financial instruments and transactions,
				ensuring the integrity of the financial system. Their ability to achieve
				<Blanks id="blank5" />
				,
				<Blanks id="blank6" />
				, and
				<Blanks id="blank7" />
				across digital systems and transactions makes ZKPs a revolutionary tool
				with immense potential for various industries, fundamentally reshaping
				how information is verified and transactions are conducted.
			</div>
			<Button className="text-xl w-24">Submit</Button>
		</div>
	);
}
