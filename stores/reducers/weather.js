const data = {
  name: 'foo',
}

export const weatherTypes = {
  TICK: 'TICK',
}

export const weather = (state = data, action) => {
  switch (action.type) {
    case weatherTypes.TICK:
      return state
    default:
      return state
  }
}

  