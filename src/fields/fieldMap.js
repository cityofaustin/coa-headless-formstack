import React from 'react';

import Text from 'src/fields/basic/Text';
import TextArea from 'src/fields/basic/TextArea';
import Checkbox from 'src/fields/basic/Checkbox';
import Radio from 'src/fields/basic/Radio';

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
  'email': {
    component: Text,
    initialValue: '',
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

export const getFieldComponent = (field) => {
  return (fieldMap[field.type] || fieldMap.coa_test_fallback).component;
};

export const getFieldInitialValue = (field) => {
  return (fieldMap[field.type] || fieldMap.coa_test_fallback).initialValue;
};
