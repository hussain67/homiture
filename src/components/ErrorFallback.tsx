import { Button } from "./buttons/button";
import type { FallbackProps } from "react-error-boundary";
function ErrorFallback({ resetErrorBoundary }: FallbackProps) {
	return (
		<div className="align-content h-screen grid place-items-center">
			<div>
				<h1 className="mb-5 text-2xl ">Something went wrong</h1>
				<Button
					className="text-center block mx-auto"
					onClick={resetErrorBoundary}
				>
					Try again
				</Button>
			</div>
		</div>
	);
}

export default ErrorFallback;
