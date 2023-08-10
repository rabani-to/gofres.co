import Logo from "./Logo"

function MainHeader() {
  return (
    <main className="flex flex-col gap-2 mt-12 items-center justify-center">
      <figure className="w-full px-12 md:px-4 max-w-[16rem] nx-text-slate-900 dark:nx-text-slate-100">
        <Logo />
      </figure>
      <p className="text-sm text-center">
        A React component libray for Ethereum
      </p>
    </main>
  )
}

export default MainHeader
