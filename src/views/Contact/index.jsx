import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate('/');
  };

  return (
    <>
      <h1>Página Contacto</h1>
      <Button onClick={onClickButton} text='Ir a Home' />
    </>
  );
};

export default Contact;
