import '@/assets/styles/globals.css';
import { Analytics } from "@vercel/analytics/react"

const RootLayout = ({children}) => {
	return (
		<html lang='it'>
			<body>
				{children}
				<Analytics />
			</body>
		</html>
	);
};

export default RootLayout;