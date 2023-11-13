const Label = ({ labelValue , htmlFor = "" }) => {
  return <label htmlFor={htmlFor}>{labelValue}</label>;
};

export default Label;
