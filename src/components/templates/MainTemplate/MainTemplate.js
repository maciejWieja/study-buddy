import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles';
import { SearchBar } from 'components/organisms/SearchBar/SearchBar';
import NewsSection from '../NewsSection/NewsSection';
import NotesWidget from 'components/organisms/NotesWidget/NotesWidget';

const MainTemplate = ({ children }) => (
  <Wrapper>
    <Navigation />
    <SearchBar />
    {children}
    <NewsSection />
    <NotesWidget />
  </Wrapper>
);

export default MainTemplate;
