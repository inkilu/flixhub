import axios from "axios";

import { getFeedbacksStart,
        getFeedbacksSuccess,
        getFeedbacksFailure,
        deleteFeedbacksStart,
        deleteFeedbacksSuccess,
        deleteFeedbacksFailure,
        createListFailure,
        createListStart,
        createListSuccess
} from "./FeedbacksActions";

export const getFeebacks = async (dispatch) => {
  dispatch(getFeedbacksStart());
  try {
    const res = await axios.get("/feedbacks", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getFeedbacksSuccess(res.data));
  } catch (err) {
    dispatch(getFeedbacksFailure());
  }
};

//create
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post("/allrequests", list, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFailure());
  }
};

//delete
export const deleteFeedbacks = async (id, dispatch) => {
  dispatch(deleteFeedbacksStart());
  try {
    await axios.delete("/feedbacks/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteFeedbacksSuccess(id));
  } catch (err) {
    dispatch(deleteFeedbacksFailure());
  }
};
