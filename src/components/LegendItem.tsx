import Image from 'next/image';

type Props = {
  color: string;
  text: string;
  iconUrl: string;
}

const LegendItem: React.FC<Props> = ({ color, text, iconUrl }) => {
	return (
		<li className='w-full flex items-center p-2 gap-2'>
			<svg height="10" width="10">
				<circle cx="5" cy="5" r="5" fill={color} />
			</svg>
			<span>{text}</span>
			<Image alt="icon" src={iconUrl} width={22} height={22} fill={false} />
		</li>
	);
};

export default LegendItem;