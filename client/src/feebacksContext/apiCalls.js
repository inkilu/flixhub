import axios from "axios";

import { getFeedbacksStart,
        getFeedbacksSuccess,
        getFeedbacksFailure,
        deleteFeedbacksStart,
        deleteFeedbacksSuccess,
        deleteFeedbacksFailure,
        createFeedbacksFailure,
        createFeedbacksStart,
        createFeedbacksSuccess
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
export const createFeedbacks = async (feedbacks, dispatch) => {
  dispatch(createFeedbacksStart());
  try {
    const res = await axios.post("/feedbacks", feedbacks, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createFeedbacksSuccess(res.data));
  } catch (err) {
    dispatch(createFeedbacksFailure());
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
