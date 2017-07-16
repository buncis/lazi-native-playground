import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { View,Text } from 'react-native'
import {
  Input,
  Switch
} from 'react-native-clean-form/redux-form'
import {
  ActionsContainer,
  Button,
  FieldsContainer,
  Fieldset,
  Form,
  FormGroup,
  Label,
} from 'react-native-clean-form'

const onSubmit = (values, dispatch) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(values)
      resolve()
    }, 1500)
  })
}

class FormView extends Component {
  render() {
    const { handleSubmit, submitting } = this.props
    return (
      <Form>
        <FieldsContainer>
          <Fieldset label="Contact details">
            <Input name="first_name" label="First name" placeholder="John" />
            <Input name="email" label="Email" placeholder="something@domain.com" />
          </Fieldset>
          <Fieldset label="Shipping details" last>
            <Input name="password" label="Address" placeholder="Hejrevej 33" />
            <Input name="password_repeat" label="City" placeholder="Copenhagen" />
            <Switch label="Save my details" border={false} name="save_details" />
          </Fieldset>
        </FieldsContainer>
        <ActionsContainer>
          <Button icon="md-checkmark" iconPlacement="right" onPress={handleSubmit(onSubmit)} submitting={submitting}>Save</Button>
        </ActionsContainer>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'Form'
})(FormView)