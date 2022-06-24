import "./style.css";

const Button = ({ className, value, onClick, attr }) => {
  return (
    <input 
    type="button" 
    className={`${className} btn`}
    value={value} 
    onClick={onClick}
    {...attr}
    />
  )
}

export default Button;