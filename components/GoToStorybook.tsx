import type { PropsWithChildren } from "react"
import { Button } from "./fresco"

function GoToStorybook({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <Button
      className={`${className} hover:scale-[1.007] active:border-gray-300 transition-all`}
      onClick={() => {
        window.open("https://fresco-storybook.vercel.app", "_blank")
      }}
    >
      {children}
    </Button>
  )
}

export default GoToStorybook
