import React from 'react';

import Text from 'src/components/fields/Basic/Text';
import TextArea from 'src/components/fields/Basic/TextArea';
import Checkbox from 'src/components/fields/Basic/Checkbox';
import Radio from 'src/components/fields/Basic/Radio';
import SectionHeading from 'src/components/FormPage/SectionHeading';

import { NOT_A_FORM_FIELD } from 'src/helpers/constants';

// map from FormStack types to our components
const fieldMap = {
  'text': {
    component: Text,
    initialValue: '',
  },
  'textarea': {
    component: TextArea,
    initialValue: '',
  },
  'checkbox': {
    component: Checkbox,
    initialValue: '',
  },
  'radio': {
    component: Radio,
    initialValue: '',
  },
  'datetime': {
    component: Text,
    initialValue: '',
  },
  'section': {
    component: SectionHeading,
    initialValue: NOT_A_FORM_FIELD,
  },
  'coa_test_fallback': {
    component: (props) => (
      <div>
        404! We can't render {props.field.type} yet.
      </div>
    ),
    initialValue: null,
  }
};

export const getFieldData = (field) => {
  return (fieldMap[field.type] || fieldMap.coa_test_fallback);
}

export const getFieldInitialValues = (fields) => {
  return fields.reduce((fieldInitialValues, field) => {
    const initialValue = (fieldMap[field.type] || fieldMap.coa_test_fallback).initialValue;
    if (initialValue !== NOT_A_FORM_FIELD) {
      fieldInitialValues[field.id] = initialValue;
    }
    return fieldInitialValues;
  }, {});
}
