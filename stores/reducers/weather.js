const data = {
  current: {},
  forecast: {},
  history: {}
}

export const weatherTypes = {
  CURRENT: 'CURRENT',
  FORECAST: 'FORECAST',
  HISTORY: 'HISTORY',
}

export const weather = (state = data, action) => {
  switch (action.type) {
    case weatherTypes.CURRENT:
      return {
        ...state,
        current: action.payload
      }
    default:
      return state
  }
}

  