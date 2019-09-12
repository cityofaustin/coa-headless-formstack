import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { UPDATE_FIELD_VALUE } from 'src/redux/actions';
import { getFieldComponent } from 'src/helpers/fieldMap';
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

  console.log("eryThing", useSelector(state => state));
  const FieldComponent = getFieldComponent(field.type);

  return (
    <div className='coa-FieldContainer__container'>
      {field.label}
      <FieldComponent
        field={field}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FieldContainer;
