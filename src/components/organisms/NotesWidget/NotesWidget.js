import Note from 'components/moleculs/Note/Note';
import React, { useState } from 'react';
import { NotesWrapper, WidgetHandler, Wrapper } from './NotesWidget.styles';
import { useGetNotesQuery } from 'store';

const NotesWidget = () => {
  const { data, isLoading } = useGetNotesQuery();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
      {isLoading ? (
        <h3>Loading...</h3>
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

export default NotesWidget;
