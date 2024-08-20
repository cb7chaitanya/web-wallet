import { useState } from "react"
import CopyButton from "../CopyButton"
import { MdOutlineDone } from "react-icons/md"
import ViewButton from "../ViewButton"
import { FaRegCopy } from "react-icons/fa6"

const EthereumPrivateKey = ({privateKey} : {privateKey: string}) => {
    const [privateKeyCopied, setPrivateKeyCopied] = useState(false)
    const [privateKeyViewed, setPrivateKeyViewed] = useState(false)
    return (
        <div className="p-2 text-[10px] md:text-lg">
            <div className="flex justify-between">
                <div>
                    <span className="font-bold">Wallet Private Key:</span> 
                    {privateKeyViewed ? <span className="ml-2">{privateKey}</span> : <span className="ml-2">************************</span>}
                </div>
                <div>
                    {privateKeyCopied ? <CopyButton name={privateKey} label={<MdOutlineDone />} tooltipContent="Copied!" setState={setPrivateKeyCopied} className="border-0 px-2 hover:text-gray-500 duration-300"/> : <CopyButton name={privateKey} label={<FaRegCopy />} tooltipContent="Copy to clipboard!" setState={setPrivateKeyCopied} className="border-0 px-2 hover:text-gray-500 duration-300"/>}
                    <ViewButton setState={setPrivateKeyViewed} state={privateKeyViewed}/>
                </div>
            </div>
        </div>
    )
}

export default EthereumPrivateKey