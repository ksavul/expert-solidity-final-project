import { useTargetNetwork } from "../hooks/scaffold-eth/useTargetNetwork";
import * as shareTokenJson from "./assets/shareTokenABI.json";
import { useContractRead } from "wagmi";

export function GetSymbol({ selectedAddress }: { selectedAddress: string }) {
  const { targetNetwork } = useTargetNetwork();

  const { data } = useContractRead({
    chainId: targetNetwork.id,
    address: selectedAddress,
    abi: shareTokenJson.abi,
    functionName: "symbol",
    args: [],
    watch: true,
  });

  const symbol = typeof data === "string" ? data : "-";

  return symbol;
}
