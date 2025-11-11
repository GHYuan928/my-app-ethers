import { Signer, Contract } from "ethers";
import { useEthersProvider } from "./ethersProvider";
import { sepolia } from "wagmi/chains";
import { CONTRACT_ADDR } from "@/app/_const";
import { stakeAbi } from "@/app/abi";

const useStakeContract = (signer?: Signer)=>{
  const provider = useEthersProvider({chainId: sepolia.id});
  console.log("useStakeContract-provider",provider);
  console.log("useStakeContract-signer",signer);
  return new Contract(CONTRACT_ADDR,stakeAbi, signer || provider);
}
export {
  useStakeContract
}