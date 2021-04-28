const initialState = {
  token: '',
  name: 'Teste',
};

export default (state = initialState, action) => {
  const returnState = { ...state };
  switch (action.type) {
    case 'SET_TOKEN':
      returnState.token = action.payload.token;
      break;
    case 'SET_NAME':
      returnState.name = action.payload.name;
      break;
    default:
      break;
  }

  return returnState;
};
