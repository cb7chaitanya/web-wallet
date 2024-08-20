import { useState } from "react"
import ViewButton from "../ViewButton"
import { MdOutlineDone } from "react-icons/md"
import CopyButton from "../CopyButton"
import { FaRegCopy } from "react-icons/fa6"

const EthereumAddress = ({address}: {address: string}) => {
    const [addressCopied, setAddressCopied] = useState(false)
    const [addressViewed, setAddressViewed] = useState(false)
  return (
    <div className="p-2 text-[10px] md:text-lg">
        <div className="flex justify-between">
            <div>
                <span className="font-bold">Wallet Address:</span> 
                {addressViewed ? <span className="ml-2">{address}</span> : <span className="ml-2">************************</span>}
            </div>
            <div>
                {addressCopied ? <CopyButton name={address} label={<MdOutlineDone />} tooltipContent="Copied!" setState={setAddressCopied} className="border-0 px-2 hover:text-gray-500 duration-300"/> : <CopyButton name={address} label={<FaRegCopy />} tooltipContent="Copy to clipboard!" setState={setAddressCopied} className="border-0 px-2 hover:text-gray-500 duration-300"/>}
                <ViewButton setState={setAddressViewed} state={addressViewed}/>
            </div>
        </div>
    </div>
  )
}

export default EthereumAddress