import { useState } from "react"
import CopyButton from "../CopyButton"
import { FaRegCopy } from "react-icons/fa6"
import { MdOutlineDone } from "react-icons/md"
import ViewButton from "../ViewButton"

const SolanaPrivateKey = ({secretKey} : {secretKey: Uint8Array}) => {
    const [privateKeyCopied, setPrivateKeyCopied] = useState(false)
    const [privateKeyViewed, setPrivateKeyViewed] = useState(false)
  return (
    <div className="p-2 text-[10px] md:text-lg">
        <div className="flex justify-between">
            <div className="text-wrap">
                <span className="font-bold">Wallet Private Key:</span>
                {privateKeyViewed ? <span className="ml-2 ">{Buffer.from(secretKey).toString('base64')}</span> : <span className="ml-2">************************</span>}
            </div>
            <div>
                {privateKeyCopied ? <CopyButton name={Buffer.from(secretKey).toString('base64')} label={<MdOutlineDone />} tooltipContent="Copied!" setState={setPrivateKeyCopied} className="border-0 px-2 hover:text-gray-500 duration-300" /> : <CopyButton name={Buffer.from(secretKey).toString('base64')} label={<FaRegCopy />} tooltipContent="Copy to clipboard!" setState={setPrivateKeyCopied} className="border-0 px-2 hover:text-gray-500 duration-300"/>}
                <ViewButton setState={setPrivateKeyViewed} state={privateKeyViewed}/>
            </div>
        </div>
    </div>
  )
}

export default SolanaPrivateKey