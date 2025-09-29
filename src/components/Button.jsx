const Button = (props) => (
    <button className={`btn btn-primary ${props.className}`} onClick={props.update}>{props.langname}</button>
)

export default Button