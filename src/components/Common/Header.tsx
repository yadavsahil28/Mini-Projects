type HeaderProps = {
    title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold">
      {title}
    </div>
  )
}

export default Header
