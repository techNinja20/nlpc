const Input = ({
  type = "text",
  id,
  placeholder = "Enter here",
  className,
  onChange,
}) => {
  return (
    <input
      type={type}
      className={` w-[25rem] py-[0.5rem] px-[0.8rem] border rounded-[0.5rem] outline-none block ${className}`}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
