import Note from 'components/moleculs/Note/Note';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NotesWrapper, WidgetHandler, Wrapper } from './NotesWidget.styles';

const NotesWidget = () => {
  const notes = useSelector((state) => state.notes);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
      <NotesWrapper>
        {notes.length ? (
          notes.map(({ title, content, id }) => <Note key={id} title={title} content={content} id={id} />)
        ) : (
          <p>Create your first note</p>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default NotesWidget;
