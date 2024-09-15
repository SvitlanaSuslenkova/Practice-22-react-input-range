import './InputCheckbox.css';
export const InputCheckbox = ({ htmlFor, ...inputProps }) => {
  return (
    <>
      <input type="checkbox" {...inputProps}></input>
      {/* label ONLY AFTER INPUT */}
      <label htmlFor={htmlFor}></label>
    </>
  );
};
