import axios from "axios";
import {
  createReqFailure,
  createReqStart,
  createReqSuccess,
  deleteReqFailure,
  deleteReqStart,
  deleteReqSuccess,
  getReqFailure,
  getReqStart,
  getReqSuccess,
  updateReqStart,
  updateReqSuccess,
  updateReqFailure
} from "./MovieActions";

export const getMovies = async (dispatch) => {
  dispatch(getReqStart());
  try {
    const res = await axios.get("/movies", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getReqSuccess(res.data));
  } catch (err) {
    dispatch(getReqFailure());
  }
};

//create
export const createMovie = async (movie, dispatch) => {
  dispatch(createReqStart());
  try {
    const res = await axios.post("/movies", movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createReqSuccess(res.data));
  } catch (err) {
    dispatch(createReqFailure());
  }
};

//update

export const updateMovie = async (movie, dispatch) => {
  dispatch(updateReqStart());
  try {
    const res = await axios.put(`/movies/${movie._id}`,movie, { //const res = await axios.put("/movies/"+movie._id,
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(updateReqSuccess(res.data));
  } catch (err) {
    dispatch(updateReqFailure());
  }
};

//delete
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteReqStart());
  try {
    await axios.delete("/movies/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteReqSuccess(id));
  } catch (err) {
    dispatch(deleteReqFailure());
  }
};
