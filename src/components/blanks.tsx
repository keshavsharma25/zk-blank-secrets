import { cn } from "@/lib/utils";
import { options, oswald } from "@/pages";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { useContext, useEffect, useState } from "react";
import { BlanksContext } from "@/context/blanks";
import { defaultBlanks } from "@/utils/blanks";

type Props = {
	id: keyof typeof defaultBlanks;
};

export const Blanks = ({ id }: Props) => {
	const blanks = useContext(BlanksContext);
	const [blank, setBlank] = useState<string>("");

	useEffect(() => {
		blanks[id] = blank;
		console.log(blanks);
	}, [blank, blanks, id]);

	useEffect(() => {
		setBlank("");
	}, [blanks]);

	return (
		<Select
			onValueChange={e => {
				setBlank(e);
			}}
		>
			<SelectTrigger
				className={cn(
					"px-4 py-2 text-xl text-center bg-gray-500 rounded-md mx-1 w-max inline-flex relative border-none",
					oswald.className
				)}
			>
				<SelectValue placeholder={"Select Option"} />
			</SelectTrigger>
			<SelectContent>
				{options.map(option => {
					return (
						<SelectItem key={option} value={option}>
							{option}
						</SelectItem>
					);
				})}
			</SelectContent>
		</Select>
	);
};
