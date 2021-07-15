const initialState = {
  visible: false,
  cards: [],
};

const reducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case "createNew":
      console.log("success")
      let newCard = {
        title: action.sendTitle,
        description: action.sendDescription,
      };
      return {
        ...state,
        cards: [...state.cards, newCard],
      };
    default:
      return state;
  }
  
};



export default reducerFunction;