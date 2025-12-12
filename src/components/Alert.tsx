import { cn } from "@/lib/utils"; // or replace with your own helper

const alertVariants = {
	default: "bg-white border border-gray-200 text-gray-900",
	destructive: "bg-red-50 border border-red-300 text-red-700",
	success: "bg-green-50 border border-green-300 text-green-700",
	info: "bg-blue-50 border border-blue-300 text-blue-700",
	warning: "bg-yellow-50 border border-yellow-300 text-yellow-800"
};

type AlertProps = {
	title?: string;
	description?: string;
	variant?: keyof typeof alertVariants;
	onClose: () => void;
	className?: string;
};

export default function Alert({ title, description, variant = "default", onClose, className }: AlertProps) {
	return (
		<div
			className={cn("rounded-md p-4 text-sm relative flex gap-3", alertVariants[variant], className)}
			role="alert"
		>
			<div className="flex-1">
				{title && <h5 className="font-semibold mb-1">{title}</h5>}
				{description && <p className="opacity-90">{description}</p>}
			</div>

			<button
				onClick={onClose}
				className="absolute right-3 top-3 text-lg leading-none opacity-70 hover:opacity-100"
			>
				×
			</button>
		</div>
	);
}
