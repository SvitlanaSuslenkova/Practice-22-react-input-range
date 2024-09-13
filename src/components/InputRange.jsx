import './InputRange.css';

export default function InputRange({
  type,
  min,
  max,
  defaultValue,
  step,
  value,
  onChange,
  style,
}) {
  return (
    <input
      type={type}
      min={min}
      max={max}
      defaultValue={defaultValue}
      step={step}
      value={value}
      onChange={onChange}
      style={style}
    ></input>
  );
}
