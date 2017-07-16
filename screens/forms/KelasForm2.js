import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

const submit = values => {
  console.log('submitting form', values)
}

const renderInput = ({ input: { onChange, ...restInput }}) => {
  return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
}

const Form = props => {
  const { handleSubmit } = props

  return (
    <View>
      <Text>Email:</Text>
      <Field name="email" component={renderInput} />
      <TouchableOpacity onPress={handleSubmit(submit)}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}


export default reduxForm({
  form: 'test'
})(Form)