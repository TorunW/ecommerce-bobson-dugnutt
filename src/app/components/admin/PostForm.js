import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function PostForm() {
  const [allPosts, setAllPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:8080/posts').then((response) => {
      setAllPosts(response.data);
    });
  }, []);

  const initialValues = {
    title: '',
    type: '',
    content: '',
    order: '',
    page: id,
  };

  const validatonSchema = Yup.object().shape({
    title: Yup.string().required(),
    type: Yup.string().required(),
    content: Yup.string().required(),
    order: Yup.number().required(),
    page: Yup.number().required(),
  });

  function onSubmit(data) {
    axios.post('http://localhost:8080/posts', data).then((response) => {
      console.log(response.data);
    });
  }

  let postDisplay = allPosts.map((post, index) => {
    console.log(post.page, 'hello');
    if (post.page === id) {
      return (
        <div key={index}>
          <div>{post.title}</div>
          <div>{post.page}</div>
        </div>
      );
    }
  });

  return (
    <div>
      <h2>Create Post</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validatonSchema={validatonSchema}
      >
        <Form>
          <label>Title</label>
          <Field name='title' placeholder='Ex. title' />
          <label>type</label>
          <Field
            name='type'
            placeholder='dropdown with choices, image, text'
          ></Field>
          <label>Content</label>
          <Field name='content' placeholder='This will be text editor'></Field>
          <label>Order of apperance</label>
          <Field name='order' placeholder='Ex. 1' />
          <label>Page</label>
          <Field name='page' placeholder='Ex. 1' />
          <button type='submit'>Create Post</button>
        </Form>
      </Formik>
      {postDisplay}
    </div>
  );
}

export default PostForm;
