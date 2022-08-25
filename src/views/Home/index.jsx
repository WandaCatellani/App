import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate('/game');
  };

  return (
    <>
      <h1>Página de Home</h1>
      <Button onClick={onClickButton} text='Ir a Game' />
    </>
  );
};

export default Home;
