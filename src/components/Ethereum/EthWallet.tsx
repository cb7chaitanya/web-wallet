import { Wallet } from "ethers"
import EthereumBalance from "./EthereumBalance"
import EthereumPrivateKey from "./EthereumPrivateKey"
import EthereumAddress from "./EthereumAddress"

const EthWallet = ({ethereumWallets} : {ethereumWallets: Wallet[]}) => {
    return (
        <div className="flex flex-col w-[90%]">
            <div className="text-white font-bold flex items-center flex-col mb-4">Ethereum Wallet List</div>
            {ethereumWallets.map((key, index) => 
            <div key={index} className="flex flex-col text-white ">
                <EthereumAddress address={key.address}/>
                <EthereumPrivateKey privateKey={key.privateKey}/>
                <EthereumBalance address={key.address}/>
                <div className="p-2 border-b-2"></div>
            </div>
        )}
        </div>
    )
}

export default EthWallet