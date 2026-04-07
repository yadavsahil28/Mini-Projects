type HeaderProps = {
    title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold py-4 border-b
                    border-gray-200 shadow-sm bg-white">
      {title}
    </div>
  )
}

export default Header
