import React from 'react';
import { useSelector } from 'react-redux';

import FieldRouter from 'src/components/FormPage/FieldRouter';
import 'src/components/containers/FieldContainer.scss';

const FieldContainer = ({ field }) => {
  console.log(`${field.id} info:`, field)
  const value = useSelector(state => state.fields[field.id]);

  return (
    <div className='coa-FieldContainer__container'>
      {field.label}
      <FieldRouter field={field}/>
    </div>
  );
};

export default FieldContainer;
