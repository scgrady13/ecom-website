
import './FormInput.scss'
const FormInput = ({ label, ...otherValues }) => {
  return (
    <div className="group">
      <label
        className={`${
          otherValues.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
      <input className="form-input" {...otherValues} />
    </div>
  );
};

export default FormInput;
