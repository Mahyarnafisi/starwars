import { legacy_createStore } from "redux";

const InitState = {
  appLoading: true,
  homeBtnVisible: false,
};

const reducer = (state = InitState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        appLoading: false,
      };

    case "HOME-BTN-VISIBLE":
      return {
        homeBtnVisible: !state.homeBtnVisible,
      };

    default:
      return state;
  }
};

const Store = legacy_createStore(reducer);

export default Store;
