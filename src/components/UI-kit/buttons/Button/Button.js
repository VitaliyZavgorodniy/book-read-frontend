const Button = ({ type, text, isActive, onClick = null }) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    );

};

export default Button;

//<Button type="submit" text = "sign Up" isActive={true} />