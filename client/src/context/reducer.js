const Reducer = (state, action) => {
  switch (action.type) {
    case 'IN_COUNT':
      return {
        info: action.payload,
      }
    case 'PAY_BILL':
      return {
        info: action.payload,
      }
    case 'ORDER_AGAIN':
      return {
        info: action.payload,
      }
    // case 'LOGOUT':
    //   return {
    //     user: null,
    //     isFetching: false,
    //     error: false,
    //   }
    // case 'CHANGE_WATCHLIST':
    //   return {
    //     ...state,
    //     user: action.payload,
    //   }
    default:
      return { ...state }
  }
}

export default Reducer
