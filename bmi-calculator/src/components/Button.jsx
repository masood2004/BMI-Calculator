const Button = (props) => {

    const {type, text, onClick} = props;

  return (
    <button type={type} onClick={onClick}>{text}</button>
  )
}

export default Button;