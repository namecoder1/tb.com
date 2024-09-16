import '@/assets/styles/globals.css';

const RootLayout = ({children}) => {
	return (
		<html lang='it'>
			<body>
				{children}
			</body>
		</html>
	);
};

export default RootLayout;