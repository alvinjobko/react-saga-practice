const entriesReducer = (state = initialEntries, action) => {
  let newEntries;
  switch (action.type) {
    case "ADD_ENTRY":
      newEntries = state.concat({ ...action.payload });
      return newEntries;

    case "REMOVE_ENTRY":
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      console.log(newEntries);
      return newEntries;

    default:
      return state;
  }
};

export default entriesReducer;

var initialEntries = [
  {
    id: 1,
    description: "Work income haha",
    value: 1000,
    isExpense: false,
  },
  {
    id: 2,
    description: "Water bill",
    value: 200,
    isExpense: true,
  },
  {
    id: 3,
    description: "Rent",
    value: 200,
    isExpense: true,
  },
  {
    id: 4,
    description: "Power bill",
    value: 200,
    isExpense: true,
  },
];
