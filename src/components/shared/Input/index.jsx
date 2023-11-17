const Input = ({
  type = "text",
  id,
  placeholder = "Enter here",
  className,
  onChange,
  name,
  value,
  disabled

}) => {
  return (
    <input
      name={name}
      value={value}
      type={type}
      className={` w-[25rem] sm:w-[23rem] py-[0.5rem] px-[0.8rem] border rounded-[0.5rem] outline-none block ${className}`}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default Input;
