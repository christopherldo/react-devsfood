import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Titulo } from './styled';

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { nome } = useParams();

  const name = useSelector((state) => state.user.name);

  const handleTextChange = (e) => {
    dispatch({
      type: 'SET_NAME',
      payload: {
        name: e.target.value,
      },
    });
  };

  return (
    <Container>
      <Titulo>
        Tela2 de
        {' '}
        {nome}
      </Titulo>

      <input type="text" value={name} onChange={handleTextChange} />

      <button type="button" onClick={() => history.goBack()}>Voltar</button>
    </Container>
  );
};
