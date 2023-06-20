import { Title } from './Title';

// eslint-disable-next-line
export default {
  title: 'Components/Atoms/Title',
  component: Title,
};

const Template = ({ text }) => <Title>{text}</Title>;

export const Short = Template.bind({});
Short.args = {
  text: 'Title',
};

export const Long = Template.bind({});
Long.args = {
  text: 'Very long title to see how it looks',
};
