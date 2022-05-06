import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import '../../styles/editPage.css';
function PageForm() {
  const { id } = useParams();
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/posts/${id}`).then((response) => {
      setAllPosts(response.data);
    });
  }, []);

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
      console.log(response.data);
    });
  }

  let postDisplay = allPosts.map((post, index) => {
    return (
      <div className='post' key={index}>
        <div>{post.title}</div>
        <div>{post.page}</div>
      </div>
    );
  });

  return (
    <div className='edit-page'>
      <h2>edit</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validatonSchema={validatonSchema}
      >
        <Form className='form'>
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
      <a href={`/admin/page/${id}/postform`}>Create a new Post</a>
      <div className='post-container'>{postDisplay}</div>
    </div>
  );
}

export default PageForm;
