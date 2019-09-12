import React from 'react';

import 'src/components/fields/Basic/Text.scss';

const Text = (props) => {
  const {
    onChange,
    value,
  } = props;

  const _onChange = ({ target: { value } }) => {
    return onChange(value);
  }

  return (
    <input
      className='coa-Text__input'
      onChange={_onChange}
      value={value}
    />
  )
};

export default Text;
