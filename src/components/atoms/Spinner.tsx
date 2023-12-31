interface Props {
  loading: boolean;
}

const Spinner: React.FC<Props> = ({ loading }) => {
  if (!loading) return null;

  return (
		<div
			className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
			role="status">
		</div>
  );
};

export default Spinner;
