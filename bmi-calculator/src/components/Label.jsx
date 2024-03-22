import "../App.css";

const Label = (props) => {

    const {measurment, unit, placeholder, onChange} = props;

  return (
    <div className="label">
      <label htmlFor="">{measurment} ({unit}): </label>
      <input type="text" placeholder={placeholder} onChange={onChange}/>
    </div>
  );
};

export default Label;
