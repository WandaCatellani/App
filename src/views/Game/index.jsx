import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const Game = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate('/');
  };

  return (
    <>
      <h1>Página de Game</h1>
      <Button onClick={onClickButton} text='Ir a Home' />
    </>
  );
};

export default Game;
