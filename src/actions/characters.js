// export const getCharactersRequest = offset => ({
//   type: 'GET_CHARS_REQUEST',
//   payload: {offset}
// });

export const getCharactersRequest = () => ({
  type: 'GET_CHARS_REQUEST',
});

export const getCharactersResponse = data => ({
  type: 'GET_CHARS_RESPONSE',
  payload: data
});

export const getCharacterInfo = data => ({
  type: 'GET_CHAR_INFO',
  payload: data
});

export const setCharacterInfo = data => ({
  type: 'SET_CHAR_INFO',
  payload: data
})

export const resetStatus = () => ({
  type: 'RESET_CHARS_LIST'
})