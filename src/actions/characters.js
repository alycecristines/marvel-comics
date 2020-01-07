export const getCharactersRequest = offset => ({
  type: 'GET_CHARS_REQUEST',
  payload: {offset},
});

export const getCharactersResponse = data => ({
  type: 'GET_CHARS_RESPONSE',
  payload: {data},
});

export const getCharacterRequest = id => ({
  type: 'GET_CHAR_REQUEST',
  payload: {id},
});

export const getCharacterResponse = data => ({
  type: 'GET_CHAR_RESPONSE',
  payload: {data},
});
