import Logo from "./Logo"

function MainHeader() {
  return (
    <main className="flex flex-col gap-2 mt-12 items-center justify-center">
      <figure className="w-full max-w-[18rem] nx-text-slate-900 dark:nx-text-slate-100">
        <Logo />
      </figure>
      <p className="text-sm">A wagmi component libray for Ethereum</p>
    </main>
  )
}

export default MainHeader
