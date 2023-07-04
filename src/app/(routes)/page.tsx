'use client';
import { Goerli, useEtherBalance, useTokenBalance } from "@usedapp/core";
import { formatUnits } from "ethers/lib/utils";

const EUROC_CONTRACT = '0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c';

const ADDRESS = '0x52b6780bd3D62dAd028475f13da8DA7bc5D73aE6'

export default function Home() {
  const eurocBalance = useTokenBalance(EUROC_CONTRACT, ADDRESS);
  const goerlyBalance = useEtherBalance(ADDRESS, {
    chainId: Goerli.chainId

  })
  console.log('eurocBalance :>> ', eurocBalance);
  console.log('goerlyBalance :>> ', goerlyBalance);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Main page
      <div>
        <p>EUROC balance: {formatUnits(eurocBalance || 0, 6)} EUROC</p>
        <p>gETH balance: {formatUnits(goerlyBalance || 0, 6)} gETH</p>
      </div>
    </main>
  )
}
