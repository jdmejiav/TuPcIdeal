import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

const styleField= {

  margin: '8px 0',
  display: 'inline-block',
  border: '1px solid #ccc',
  boxShadow: 'inset 0 1px 3px #ddd',
  borderRadius: '4px',
  webkitBoxSizing: 'border-box',
  mozBoxSizing: 'border-box',
  boxSizing: 'border-box',
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingTop: '12px',
  paddingBottom: '12px',
};


function Input (props) {
  const { label, name, ...rest } = props

  return (
    <div className='form-control'>

      <Field style = {styleField} id={name} name={name} {...rest} placeHolder= {name} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Input