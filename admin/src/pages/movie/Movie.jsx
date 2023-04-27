import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import "./movie.css";
import { Publish } from "@material-ui/icons";
import { updateMovie } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import storage from "../../firebase";
export default function Movie() {
  const location = useLocation();
  const movie = location.movie;
  // new code

  const [upmovie, setMovie] = useState({_id: movie._id});
  const [img, setImg] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const { dispatch } = useContext(MovieContext);
  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({...upmovie, [e.target.name]: value });
    console.log(upmovie);
  };

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMovie(upmovie, dispatch);
  };
  // old code starts here

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movie.img} alt="" className="productInfoImg" />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{movie._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{movie.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">year:</span>
              <span className="productInfoValue">{movie.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">limit:</span>
              <span className="productInfoValue">{movie.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input type="text" name="title" placeholder={movie.title} onChange={handleChange}/>
            <label>Year</label>
            <input type="text" name="year" placeholder={movie.year} onChange={handleChange}/>
            <label>Genre</label>
            <input type="text" name="genre" placeholder={movie.genre} onChange={handleChange}/>
            <label>Limit</label>
            <input type="text" name="limit" placeholder={movie.limit} onChange={handleChange}/>
            <label>Trailer</label>
            <input type="file" name="trailer" placeholder={movie.trailer} onChange={(e) => setTrailer(e.target.files[0])}/>
            <label>Video</label>
            <input type="file" name="video" placeholder={movie.video} onChange={(e) => setVideo(e.target.files[0])}/>
           
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={movie.img}
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" name="img" style={{ display: "none" }} onChange={(e) => setImg(e.target.files[0])}/>
            </div>
          </div>
                  {uploaded === 3 ? (
          <button className="addProductButton" onClick={handleSubmit}>
            Create
          </button>
        ) : (
          <button className="addProductButton" onClick={handleUpload}>
            Upload
          </button>
        )}
        </form>
      </div>
    </div>
  );
}
