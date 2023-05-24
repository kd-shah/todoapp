import PropTypes from "prop-types";

export default function InputView  (props)  {
  return (
    <>
      <input
        id="input"
        className="input"
        defaultValue={props.value}
        placeholder={props.placeholder}
        ref={props.refer}
      />
    </>
  );
};

InputView.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
