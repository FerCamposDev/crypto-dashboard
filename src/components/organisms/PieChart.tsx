'use client';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import { CoinWithBalanceAndMarket } from '@/interfaces';
import { colors } from '@/utils';
import LegendItem from '../molecules/LegendItem';

ChartJS.register(ArcElement, Tooltip);

interface Props {
  coinData: CoinWithBalanceAndMarket[];
}

const PieChart: React.FC<Props> = ({ coinData }) => {
  const totalUsd = coinData.reduce((total, curr): number => total + curr.usdBalance, 0);

  const chartData = {
    labels: coinData.map(coin => coin.name),
    datasets: [{
      data: coinData.map(coin => coin.usdBalance),
      backgroundColor: colors
    }]
  };

  return (
		<div>
			<div className='flex justify-between'>
				Balances: <span>Total: {totalUsd?.toFixed(2)} USD</span>
			</div>
			<div className='flex gap-2'>
				<Pie
					height={400}
					width={400}
					data={chartData}
				/>
				<ul className='flex flex-col justify-center'>
					{coinData.map((coin, index) => (
						<LegendItem
							key={coin.name}
							color={colors[index]}
							iconUrl={coin.marketData.image}
							text={coin.name}
						/>
					))}
				</ul>
			</div>
		</div>
  );
};

export default PieChart;
