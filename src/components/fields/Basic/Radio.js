import React from 'react';

const Checkbox = (props) => {
  const {
    field,
    onChange,
    value,
  } = props;

  const _onChange = ({ target: { value } }) => {
    return onChange(value);
  }

  return (
    <div>
      {field.options.map((option, i) => (
        <label key={i}>
          <input
            type="radio"
            onChange={_onChange}
            value={option.value}
            checked={(value === option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
