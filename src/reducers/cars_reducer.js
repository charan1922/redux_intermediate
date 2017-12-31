export default function(state = [], action) {
  switch (action.type) {
    case "SEARCH_CARS":
      console.log(action.payload);
      return action.payload;

    default:
      return state;
  }
}
