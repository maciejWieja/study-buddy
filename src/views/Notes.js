import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import Note from 'components/moleculs/Note/Note';
import { useForm } from 'react-hook-form';
import { FormWrapper, NotesWrapper, StyledFormField, Wrapper } from './Notes.styles';
import { useGetNotesQuery, useAddNoteMutation } from 'store';

const Notes = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { data, isLoading } = useGetNotesQuery();
  const [addNote] = useAddNoteMutation();

  const handleAddNote = ({ title, content }) => {
    addNote({ title, content });
    reset();
  };

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmit(handleAddNote)}>
        <StyledFormField label="Title" name="title" id="title" {...register('title', { required: true })} />
        <StyledFormField isTextarea label="Content" name="content" id="content" {...register('content', { required: true })} />
        {errors.title && <span>Title is required</span>}
        {errors.content && <span>Content is required</span>}
        <Button type="submit">Add</Button>
      </FormWrapper>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <NotesWrapper>
          {data.notes.length ? (
            data.notes.map(({ title, content, id }) => <Note key={id} title={title} content={content} id={id} />)
          ) : (
            <p>Create your first note</p>
          )}
        </NotesWrapper>
      )}
    </Wrapper>
  );
};

export default Notes;
