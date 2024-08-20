import axios from "axios";
import { ethereumUrl } from "../../conf/config";
import { useEffect, useState } from "react";
import { MdOutlineAccountBalance } from "react-icons/md"

const EthereumBalance = ({address}: {address: string}) => {
    const [balance, setBalance] = useState('')
    const [loading, setLoading] = useState(true)
    const getBalance = async ({address}: {address: string}) => {
        const res = await axios.post(ethereumUrl, {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "eth_getBalance",
            "params": [address, "latest"]
        })
        console.log(res)
        setBalance(parseInt(res.data.result).toString())
    }
    useEffect(() => {
        getBalance({address})
        setLoading(false)
    }, [balance])
    return (
        <div className="p-2 text-[10px] md:text-lg">
            <div className="flex justify-between">
                <div className="text-wrap">
                    <span className="font-bold">Wallet Balance:</span> 
                    <span className="ml-2">{loading ? <div>
                    </div> : parseInt(balance)/10**18}</span>
                </div>
                <div>
                    <MdOutlineAccountBalance/>
                </div>
            </div>
        </div>
    )
}

export default EthereumBalance