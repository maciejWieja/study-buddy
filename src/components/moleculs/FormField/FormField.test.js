import React from 'react';
import FormField from './FormField';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Input With Button', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormField label="name" name="name" id="name" />);
  });
});
