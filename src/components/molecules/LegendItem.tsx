import Image from 'next/image';

interface Props {
  color: string;
  text: string;
  iconUrl: string;
}

const LegendItem: React.FC<Props> = ({ color, text, iconUrl }) => {
  return (
		<li className='w-full flex items-center p-2 gap-2'>
			<svg height="20" width="20">
				<circle cx="10" cy="10" r="10" fill={color} />
			</svg>
			<Image alt="icon" src={iconUrl} width={22} height={22} fill={false} />
			<span>{text}</span>
		</li>
  );
};

export default LegendItem;
