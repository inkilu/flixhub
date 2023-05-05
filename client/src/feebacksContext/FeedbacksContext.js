import FeedbacksReducer from "./FeedbacksReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  feedbacks: [],
  isFetching: false,
  error: false,
};

export const FeedbacksContext = createContext(INITIAL_STATE);

export const FeedbacksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FeedbacksReducer, INITIAL_STATE);

  return (
    <FeedbacksContext.Provider
      value={{
        feedbacks: state.feedbacks,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </FeedbacksContext.Provider>
  );
};