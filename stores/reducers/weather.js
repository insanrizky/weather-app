const data = {
  current: {},
  forecast: {},
  history: {}
}

export const weatherTypes = {
  CURRENT: 'CURRENT',
  HISTORY: 'HISTORY',
  FORECAST: 'FORECAST',
}

export const weather = (state = data, action) => {
  switch (action.type) {
    case weatherTypes.CURRENT:
      return {
        ...state,
        current: action.payload
      }
    case weatherTypes.HISTORY:
      return {
        ...state,
        history: action.payload
      }
    case weatherTypes.FORECAST:
      return {
        ...state,
        forecast: action.payload
      }
    default:
      return state
  }
}

  