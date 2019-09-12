import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { UPDATE_FIELD_VALUE } from 'src/redux/actions';
import { getFieldComponent } from 'src/helpers/fieldMap';
import 'src/components/containers/FieldContainer.scss';

const FieldContainer = ({ field }) => {
  const value = useSelector(state => state.fields[field.id]);
  const dispatch = useDispatch();
  const onChange = (value) => {
    return dispatch({
      type: UPDATE_FIELD_VALUE,
      id: field.id,
      value: value,
    })
  };

  const FieldComponent = getFieldComponent(field);

  // Don't render FieldComponent until useEffect() to build form fields has finished
  return (value !== undefined) ? (
    <div className='coa-FieldContainer__container'>
      {field.label}
      <FieldComponent
        field={field}
        value={value}
        onChange={onChange}
      />
    </div>
  ) : (
    <></>
  );
};

export default FieldContainer;
