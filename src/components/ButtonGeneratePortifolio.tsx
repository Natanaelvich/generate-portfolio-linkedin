type Props = {
  onClick: () => void
}

const ButtonGeneratePortifolio = ({ onClick }: Props) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <button
        className="px-4 py-2 text-white bg-blue-600 rounded-md"
        onClick={onClick}
      >
        Generate Portifolio
      </button>
    </div>
  )
}

export default ButtonGeneratePortifolio
