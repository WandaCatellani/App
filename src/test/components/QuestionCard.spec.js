import { render, screen } from '@testing-library/react';

import QuestionCard from '../../components/QuestionCard';

const props = {};

describe('Test en el componente QuestionCard', () => {
  test('Debe renderizar el componente QuestionCard', () => {
    render(<QuestionCard {...props} />);
    const question = screen.getByText('');
    expect(question).toBeInTheDocument();
  });
});
