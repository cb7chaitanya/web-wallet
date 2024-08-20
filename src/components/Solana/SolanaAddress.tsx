import { useState } from "react"
import CopyButton from "../CopyButton"
import { PublicKey } from "@solana/web3.js"
import { MdOutlineDone } from "react-icons/md"
import { FaRegCopy } from "react-icons/fa6"
import ViewButton from "../ViewButton"

const SolanaAddress = ({publicKey} : {publicKey: PublicKey}) => {
    const [addressViewed, setAddressViewed] = useState(false)
    const [addressCopied, setAddressCopied] = useState(false)
  return (
    <div className="p-2 text-[10px] md:text-lg">
        <div className="flex justify-between">
            <div className="text-wrap">
                <span className="font-bold">Wallet Address:</span> 
                {addressViewed ? <span className="ml-2">{publicKey.toBase58()}</span> : <span className="ml-2">************************</span>}
            </div>
            <div>
                {addressCopied ? <CopyButton name={publicKey.toBase58()} label={<MdOutlineDone />} tooltipContent="Copied!" setState={setAddressCopied} className="border-0 px-2 hover:text-gray-500 duration-300"/> : <CopyButton name={publicKey.toBase58()} label={<FaRegCopy />} tooltipContent="Copy to clipboard!" setState={setAddressCopied} className="border-0 px-2 hover:text-gray-500 duration-300"/>}
                <ViewButton setState={setAddressViewed} state={addressViewed}/>
            </div>
        </div>
    </div>
  )
}

export default SolanaAddress