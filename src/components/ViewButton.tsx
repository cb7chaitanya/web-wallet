import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

const ViewButton = ({setState, state} : {setState: React.Dispatch<React.SetStateAction<boolean>>, state: boolean}) => {
    const onClick = () => {
        setState(!state)
    }
  return (
    <button className="text-white" onClick={onClick}>
        {state ? <FaRegEyeSlash /> : <FaRegEye/>}
    </button>
  )
}

export default ViewButton