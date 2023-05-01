const FeedbacksReducer = (state, action) => {
  switch (action.type) {
    case "GET_FEEDBACKS_START":
      return {
        feedbacks: [],
        isFetching: true,
        error: false,
      };
    case "GET_FEEDBACKS_SUCCESS":
      return {
        feedbacks: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_FEEDBACKS_FAILURE":
      return {
        feedbacks: [],
        isFetching: false,
        error: true,
      };
    case "CREATE_LIST_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_LIST_SUCCESS":
      return {
        lists: [...state.lists, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_LIST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPLOAD_LIST_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPLOAD_LIST_SUCCESS":
      return {
        lists: state.lists.map(
          (list) => list._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPLOAD_LIST_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "DELETE_FEEDBACKS_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_FEEDBACKS_SUCCESS":
      return {
        lists: state.lists.filter((list) => list._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_FEEDBACKS_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default FeedbacksReducer;
