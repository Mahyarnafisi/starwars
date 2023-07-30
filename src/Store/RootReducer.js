import { legacy_createStore } from "redux";

const InitState = {
  appLoading: true,
  homeBtnVisible: false,
};

const reducer = (state = InitState, action) => {
  switch (action.type) {
    case "LOADING-OFF":
      return {
        ...InitState,
        appLoading: false,
      };

    case "LOADING-ON":
      return {
        InitState,
        appLoading: true,
      };

    case "HOME-BTN-VISIBLE":
      return {
        ...InitState,
        homeBtnVisible: !state.homeBtnVisible,
      };

    default:
      return state;
  }
};

const Store = legacy_createStore(reducer);

export default Store;
