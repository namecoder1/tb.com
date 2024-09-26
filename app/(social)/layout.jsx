const MainLayout = ({ children }) => {
	return (
			<>
				<main className='dark:bg-slate-950 h-[100vh]'>
					{children}
				</main>
			</>
	);
};

export default MainLayout;