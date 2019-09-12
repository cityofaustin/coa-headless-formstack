import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FieldRouter from 'src/components/containers/FieldRouter';
import { UPDATE_FIELD_VALUE } from 'src/redux/actions';
import 'src/components/containers/FieldContainer.scss';

const FieldContainer = ({ field }) => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.fields[field.id]);
  const onChange = (value) => {
    return dispatch({
      type: UPDATE_FIELD_VALUE,
      id: field.id,
      value: value
    })
  };

  const wholeThing = useSelector(state => state);
  console.log("eryThing", wholeThing);

  return (
    <div className='coa-FieldContainer__container'>
      {field.label}
      <FieldRouter
        field={field}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FieldContainer;
