import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { UPDATE_FIELD_VALUE } from 'src/redux/actions';
import { NOT_A_FORM_FIELD } from 'src/helpers/constants';
import { getFieldData } from 'src/helpers/fieldMap';
import { shouldHide } from 'src/helpers/validation';
import 'src/components/containers/FieldContainer.scss';

const FieldContainer = ({ field }) => {
  const value = useSelector(state => state.fields[field.id]);
  const fieldValues = useSelector(state => state.fields);
  const dispatch = useDispatch();
  const onChange = (value) => {
    return dispatch({
      type: UPDATE_FIELD_VALUE,
      id: field.id,
      value: value,
    })
  };

  const { component: FieldComponent, initialValue } = getFieldData(field);
  const hidden = shouldHide(field, fieldValues);

  // This catch prevents glitches that happen when FieldComponents expect a value to exist.
  // If field value is undefined, then we haven't dispatched SET_INITIAL_FIELD_VALUES yet.
  // The dispatch is in useEffect(), which is async. It runs right after the page is rendered.
  if ((value === undefined) && (initialValue !== NOT_A_FORM_FIELD)) {
    return <></>
  } else {
    return (
      <div
        className={classNames('coa-FieldContainer__container', {
          'coa-FieldContainer__hidden': hidden,
        })}
      >
        {field.label}
        <FieldComponent
          field={field}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
};

export default FieldContainer;
