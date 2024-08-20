import { useState } from "react"
import { generateMnemonic } from "bip39"
import SolanaWallet from "./components/Solana/SolanaWallet"
import { Keypair } from "@solana/web3.js";
import { mnemonicToSeed } from "bip39";
import nacl from "tweetnacl";
import { derivePath } from "ed25519-hd-key";
import Button from "./components/Button";
import { FaRegCopy } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Hero from "./components/Hero";
import WalletSwitcher from "./components/WalletSwitcher";
import EthWallet from "./components/Ethereum/EthWallet";
import { Wallet as EtherWallet, HDNodeWallet } from "ethers";
import CopyButton from "./components/CopyButton";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [mnemonic, setMnemonic] = useState<string>('')
  const [solanaIdx, setSolanaIdx] = useState<number>(0);
  const [walletType, setWalletType] = useState('solana');
  const [copyButtonClicked, setCopyButtonClicked] = useState(false);
  const [etherIdx, setEtherIdx] = useState<number>(0);
  const [ethereumWallet, setEthereumWallet] = useState<EtherWallet[]>([]);
  const [solanaWallets, setSolanaWallets] = useState<Keypair[]>([])
  const getMnemonic = () => {
    const mnemonic = generateMnemonic()
    setMnemonic(mnemonic)
    setCopyButtonClicked(false)
  }

  const generateSolanaWallet = (mnemonic: string) => {
    const seed = mnemonicToSeed(mnemonic);
    const path = `m/44'/501'/${solanaIdx}'/0'`;
    const newSeed = derivePath
    (path, seed.toString()).key;
    const secret = nacl.sign.keyPair.fromSeed(newSeed).secretKey;
    const pair = Keypair.fromSecretKey(secret);
    console.log(pair);
    setSolanaIdx(solanaIdx + 1);
    setSolanaWallets([...solanaWallets, pair]);
  }

  const generateEthereumWallet = async (mnemonic: string) => {
    const seed = await mnemonicToSeed(mnemonic);
    const path = `m/44'/60'/${etherIdx}'/0'`;
    const hdNode = HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(path);
    const privateKey = child.privateKey;
    const wallet = new EtherWallet(privateKey);
    setEtherIdx(etherIdx + 1);
    setEthereumWallet([...ethereumWallet, wallet]);
  }

  return (
    <div className="flex w-full overflow-hidden min-h-screen items-center flex-col bg-zinc-900">
      <Hero />
      <WalletSwitcher setWalletType={setWalletType}/>
      <Button className="py-2 px-4 rounded w-[78%] border-zinc-300 border-2" name="Generate Mnemonic" onClick={getMnemonic} />
      <div className="flex py-2 px-4 w-[80%]">
        <input className="py-2 w-full px-4 outline-none font-semibold" value={mnemonic}></input>
        {mnemonic && copyButtonClicked ? <CopyButton className="bg-white border-0 px-2 hover:text-gray-500 duration-300" tooltipContent="Copied!" data-tooltip-id="copy-button"  name={mnemonic} label={<MdOutlineDone />} /> : <CopyButton className="bg-white border-0 px-2 hover:text-gray-500 duration-300" name={mnemonic} label={<FaRegCopy />} tooltipContent="Copy to clipboard" data-tooltip-id="copy-button" setState={setCopyButtonClicked} />}
        <Button className="py-2 px-4 rounded-r" {...walletType === 'solana' ? {onClick: () => generateSolanaWallet(mnemonic)} : {onClick: () => generateEthereumWallet(mnemonic)}} name="Generate Wallet"/>
      </div>
      {walletType === 'solana' ? <SolanaWallet solanaWallets={solanaWallets}/> : <EthWallet ethereumWallets={ethereumWallet}/>}
      <ReactTooltip className="translate-y-5" id="copy-button"/>
      <ToastContainer/>
    </div>
  )
}

export default App