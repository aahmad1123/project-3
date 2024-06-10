import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_QUESTION } from '../utils/mutations';
import auth from '../utils/auth';

const AddQuestionForm = () => {
  const [formState, setFormState] = useState({ title: '', body: '', tags: '' });
  const [addQuestion, { error }] = useMutation(ADD_QUESTION);
  const userId = auth.getProfile().data._id
  console.log(userId)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // console.log(formState, user.data._id)
    const title = formState.title
    const body = formState.body
    const tags = formState.tags
    try {
        const data = await addQuestion({
            variables: { title, body, tags, userId }
          });
    
      
      setFormState({ title: '', body: '', tags: '' });
      location.reload()
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formState.title}
          onChange={handleChange}
          required
          className='formControl'
        />
      </div>
      <div>
        <label htmlFor="body">Body: </label>
        <textarea
          id="body"
          name="body"
          value={formState.body}
          onChange={handleChange}
          required
          className='formControl'
        ></textarea>
      </div>
      <div>
        <label htmlFor="tags">Tags: </label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={formState.tags}
          onChange={handleChange}
          className='formControl'
        />
      </div>
      <button type="submit">Add Question</button>
      {error && <div>Error adding question: {error.message}</div>}
    </form>
  );
};

export default AddQuestionForm;