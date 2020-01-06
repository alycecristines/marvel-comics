const INITIAL_STATE = {
  dados: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_DADOS':
      return {...state, dados: action.payload.dados.results};
    default:
      return state;
  }
};
