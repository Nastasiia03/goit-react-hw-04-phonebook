import { Formik } from 'formik';
import { Button, ErrorMessage, Field, Form, FormField } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import PropTypes from "prop-types";

function validateName(value) {
   let error;
   if (!value) {
     error = 'Required';
   } else if (!/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(value)) {
     error = 'Invalid name';
   }
   return error;
 }
 
 function validateNumber(value) {
   let error;
   if (!value) {
     error = 'Required';
   } else if (!/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(value)) {
     error = 'Invalid number';
   }
   return error;
 }

export const ContactForm = ({onSave}) => {
    return (
    <Formik
            initialValues={{ name: "", number: "" }}
            onSubmit={(values, actions) => {
              onSave({ ...values, id: nanoid(), });
              actions.resetForm();
            }}>
    {({ errors, touched }) => (
    <Form>
        <FormField>
            Name
            <Field name="name" type="text" validate={validateName} />
        {errors.name && touched.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </FormField>
        <FormField>
            Number
            <Field name="number" type="tel" validate={validateNumber} />
        {errors.number && touched.number && <ErrorMessage>{errors.number}</ErrorMessage>}
        </FormField>
                    
        <Button type="submit">Add contact</Button>
            </Form>
            )}
    </Formik>
  )
}

ContactForm.propTypes = {
  onSave: PropTypes.func.isRequired,
}