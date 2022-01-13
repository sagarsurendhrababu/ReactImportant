export default function reducer(state, action) {
    switch (action) {
      case 'up':
        return {
            ...state, value1: state.value1 + 1,
        };
      case 'down':
        return {
            ...state, value1: state.value1 - 1,
        };
        case 'up1':
            return {
                ...state, value2: state.value2 + 10,
            };
          case 'down1':
            return {
                ...state, value2: state.value2 - 10,
            };        
      default:
        return state
    }
  }