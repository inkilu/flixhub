import axios from "axios";

import { getFeedbacksStart,
        getFeedbacksSuccess,
        getFeedbacksFailure,
        deleteFeedbacksStart,
        deleteFeedbacksSuccess,
        deleteFeedbacksFailure,
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
export const createFeedbacks = async (feedbacks) => {
  try {
    const res = await axios.post("/feedbacks", feedbacks);
    alert("Request Submitted!");
    window.location('/');
  } catch (err) {
console.log(err)
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
