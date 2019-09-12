import React from 'react';

const Checkbox = (props) => {
  const {
    field,
    onChange,
    value,
  } = props;

  const values = value.split('/n');

  // This will only work for one checkbox
  // at best
  const _onChange = ({ target: { value } }) => {
    const index = values.indexOf(value);
    if (index !== -1) {
      onChange(values.push(value).join('/n'));
    } else {
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
