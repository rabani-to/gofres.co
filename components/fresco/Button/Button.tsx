function Button(props: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      onClick={() => alert("Yay")}
      className={`px-4 py-2 border rounded-lg ${props.className}`}
    >
      {props.children}
    </button>
  )
}

export default Button
