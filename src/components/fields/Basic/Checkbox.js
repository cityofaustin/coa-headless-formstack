import React from 'react';

const Checkbox = (props) => {
  const {
    field,
    onChange,
    value,
  } = props;

  const values = !!value ? value.split('/n') : [];

  const _onChange = ({ target: { value } }) => {
    const index = values.indexOf(value);
    if (index === -1) {
      // If option was not selected, then add it.
      onChange([...values, value].join('/n'));
    } else {
      // If option was already selected, then remove it.
      onChange([...values.slice(0,index), ...values.slice(index+1)].join('/n'));
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
            checked={values.includes(option.value)}
            type="checkbox"
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
