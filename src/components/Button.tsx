const Button = ({name, onClick, className}: { name: string | JSX.Element , onClick: () => void, className?: string }) => {
  return (
    <button className={`bg-zinc-800 duration-300 hover:bg-zinc-700 text-white font-bold cursor-default ${className}`} onClick={onClick}>{name}</button>
  )
}

export default Button