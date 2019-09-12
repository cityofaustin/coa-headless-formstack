import React from 'react';

const Checkbox = (props) => {
  const {
    field,
    onChange,
    value,
  } = props;

  // This will only work for one checkbox
  // at best
  const _onChange = (e) => {
    const selectedValue = e.target.value;
    if (value === selectedValue) {
      onChange('');
    } else {
      onChange(selectedValue);
    }
  }

  return (
    <div>
      {field.options.map((option, i) => (
        <label key={i}>
          <input
            className="form-checkbox"
            onChange={_onChange}
            value={option.value}
            checked={value === option.value}
            type="checkbox"
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
