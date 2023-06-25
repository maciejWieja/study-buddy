import { fireEvent, render, screen } from 'test-utils';
import { SearchBar } from './SearchBar';
import '@testing-library/jest-dom';

describe('Search Bar', () => {
  it('Renders the component', () => {
    render(<SearchBar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('Search');
  });

  it('Displays users when search phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'Rob' } });

    await screen.findByText(/Robert/);
  });
});
