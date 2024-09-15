import './InputCheckbox.css';
export default function InputCheckbox({ htmlFor, ...inputProps }) {
  return (
    <>
      <input type="checkbox" {...inputProps}></input>
      {/* label ONLY AFTER INPUT */}
      <label htmlFor={htmlFor}></label>
    </>
  );
}
