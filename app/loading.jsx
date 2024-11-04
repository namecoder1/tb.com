import Spinner from "@/components/ui/Spinner";

const Loading = () => {
	return (
		<div className='flex items-center justify-center min-h-[100vh]'>
			<Spinner />		
		</div>
	);
};

export default Loading;