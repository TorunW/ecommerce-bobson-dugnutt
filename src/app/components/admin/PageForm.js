import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function PageForm() {
  const initialValues = {
    title: '',
    link: '',
    order: '',
  };

  const validatonSchema = Yup.object().shape({
    title: Yup.string().min(10).max(15).required('erro'),
    link: Yup.string().required(),
    order: Yup.number().required(),
  });

  function onSubmit(data) {
    axios.post('http://localhost:8080/pages', data).then((response) => {
      console.log('itork');
    });
  }

  return (
    <div>
      <h2>Create Page</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validatonSchema={validatonSchema}
      >
        <Form>
          <label>Title</label>
          <ErrorMessage name='title' element='h1' />
          <Field name='title' placeholder='Ex. title' />
          <label>Link</label>
          <ErrorMessage name='link' component='span' />
          <Field name='link' placeholder='Ex. /link' />
          <label>Order of apperance</label>
          <ErrorMessage name='order' component='span' />
          <Field name='order' placeholder='Ex. 1' />
          <button type='submit'>Create Page</button>
        </Form>
      </Formik>
    </div>
  );
}

export default PageForm;
