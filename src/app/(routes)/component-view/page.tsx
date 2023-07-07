import { Spinner } from '@/components/atoms';

const ComponentViewPage = () => {
	return (
		<div className="flex w-full h-screen bg-cyan-200">
			<Spinner loading={true} />
		</div>
	);
};

export default ComponentViewPage;