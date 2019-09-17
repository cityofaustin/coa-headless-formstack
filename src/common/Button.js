import React from 'react';

import 'src/common/Button.scss';

const Button = ({ onClick, children }) => (
  <div onClick={onClick} className='coa-Button__container'>
    {children}
  </div>
)

export default Button;
