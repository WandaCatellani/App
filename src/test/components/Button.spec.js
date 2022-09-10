import { render, screen } from '@testing-library/react';

import Button from '../../components/Button';
import userEvent from '@testing-library/user-event';

const props = {
  text: 'Ir a Game',
  disabled: false,
  onClick: jest.fn(),
};

describe('Test en el componente Button', () => {
  test('Debe renderizar mi componente Button', () => {
    render(<Button {...props} />);

    // Capturo mi boton
    const button = screen.getByText('Ir a Game');

    // Lo que esperamos
    expect(button).toBeDefined();
  });

  test('Debe ejecutar la funcion Onclick', () => {
    render(<Button {...props} />);

    // Con screen.logTestingPlaygroundURL() vemos que funcion realizar
    const button = screen.getByRole('button', {
      name: /ir a game/i,
    });

    // Se ejecuto 1 clic
    userEvent.click(button);

    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
