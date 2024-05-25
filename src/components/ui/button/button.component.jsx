const Button = ({ children, ...otherprops }) => {
  return (
    <button {...otherprops}>{children}</button>
  )
}

export default Button;