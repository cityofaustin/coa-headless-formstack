import React from 'react';

import 'src/fields/basic/TextArea.scss';

const TextArea = (props) => {
  const {
    onChange,
    value,
  } = props;

  const _onChange = ({ target: { value } }) => {
    return onChange(value);
  }

  return (
    <textarea
      className='coa-TextArea__textarea'
      onChange={_onChange}
      value={value}
    />
  )
};

export default TextArea;
