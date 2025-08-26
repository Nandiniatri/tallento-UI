const Input = ({
    label,
    name,
    type,
    value,
    onChange,
    placeholder,
    className,
}) => {
    return (
        <div>
            {label && <label>{label}</label>}
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={className}
            />
        </div>
    );
};

export default Input;
