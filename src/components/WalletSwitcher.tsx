import Button from "./Button"

const WalletSwitcher = ({setWalletType} : {setWalletType: any }) => {
  const handleClick = (walletType: string) => {
    setWalletType(walletType)
  }

  return (
    <div className="flex p-4">
      <Button name={"Solana"} onClick={() => handleClick('solana')} className="border-r-2 border-r-black px-4 py-2"/>
      <Button name={"Ethereum"} onClick={() => handleClick('ethereum')} className="px-4 py-2"/>
    </div>
  )
}

export default WalletSwitcher