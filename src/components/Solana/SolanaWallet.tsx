import { Keypair } from "@solana/web3.js"
import SolanaBalance from "./SolanaBalance"
import SolanaPrivateKey from "./SolanaPrivateKey"
import SolanaAddress from "./SolanaAddress"

const SolanaWallet = ({solanaWallets} : {solanaWallets: Keypair[]}) => {
    return (
    <div className="flex flex-col w-[90%]">
        <div className="text-white font-bold flex items-center flex-col mb-4">Solana Wallet List</div>
        {solanaWallets.map((key, index) => 
        <div key={index} className="flex flex-col text-white">
            <SolanaAddress publicKey={key.publicKey}/>
            <SolanaPrivateKey secretKey={key.secretKey}/>
            <SolanaBalance address={key.publicKey.toBase58()}/>
            <div className="p-2 border-b-2"></div>
        </div>
)}
    </div>
    )
}

export default SolanaWallet