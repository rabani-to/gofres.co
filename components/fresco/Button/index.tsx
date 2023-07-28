export default function Button(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return (
    <button
      style={{
        padding: "0.5rem 2rem",
        border: "1px solid lightgray",
        borderRadius: "7px",
      }}
    >
      {props.children}
    </button>
  )
}
