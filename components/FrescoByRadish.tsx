import Logo from "./Logo"

function FrescoByRadish() {
  return (
    <nav className="flex items-center gap-2">
      <figure className="max-w-[6rem]">
        <Logo />
      </figure>
      <p className="hidden md:inline text-xs">by Radish</p>
    </nav>
  )
}

export default FrescoByRadish
