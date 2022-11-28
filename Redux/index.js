import createStore from "redux";
const BUY_CAKE = "BUY_CAKE";

// action
function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

//* Reducer is a function having state and action as argument.

// const initialCakeCount = 20;
const initial = {
  noOfCakes: 20,
};

function shopKeeper(state = initial, action) {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, noOfCakes: state.noOfCakes - 1 };
    default:
      return state;
  }
}

const store = createStore(shopKeeper);
const unSubscribe = store.subscribe(() => console.log(store.getState())); // Subscribe will run whenever there is a change in state of store

// getState() -> get the data from the store
console.log("Initial cakes" + store.getState().noOfCakes);
// dispatch() -> to change state inside the store (it takes action)

store.dispatch();
store.dispatch();
store.dispatch();

console.log("After Selling" + store.getState().noOfCakes);
unSubscribe();
