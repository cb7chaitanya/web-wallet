import axios from "axios"
import { useEffect, useState } from "react"
import { MdOutlineAccountBalance } from "react-icons/md"
import { solanaUrl } from "../../conf/config"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"

const SolanaBalance = ({address}: {address: string}) => {
    const [balance, setBalance] = useState(0)
    const getBalance = async ({address}: {address: string}) => {
        const res = await axios.post(solanaUrl, {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "getBalance",
            "params": [address]
        })
        setBalance(res.data.result.value)
        console.log(res.data.result.value)
    }
    useEffect(() => {
        getBalance({address})
    }, [balance])
    return (
        <div className="p-2 text-[10px] md:text-lg">
            <div className="flex justify-between">
                <div className="text-wrap">
                    <span className="font-bold">Wallet Balance:</span> 
                    <span className="ml-2">{balance/LAMPORTS_PER_SOL}</span>
                </div>
                <div>
                    <MdOutlineAccountBalance/>
                </div>
            </div>
        </div>
    )
}

export default SolanaBalance