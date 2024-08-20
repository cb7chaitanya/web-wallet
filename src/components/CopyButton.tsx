import { toast } from "react-toastify"

const CopyButton = ({name, label, tooltipContent, setState, className} : {name: string, label: React.ReactNode, tooltipContent: string, setState?: React.Dispatch<React.SetStateAction<boolean>>, className?: string}) => {
    const onCopy = () => {
        name === '' ? toast.error('Nothing to copy!') : navigator.clipboard.writeText(`${name}`)
        setState && setState(true)
    }
  return (
    <button onClick={onCopy} data-tooltip-id="copy-button" className={className}  data-tooltip-content={tooltipContent} >{label}</button>
  )
}

export default CopyButton