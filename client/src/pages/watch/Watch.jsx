import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation, Redirect } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const movie = location.movie;
  const isPaid = JSON.parse(localStorage.getItem("user")).subscription;

    if (isPaid === false) {
      return <Redirect to="/Payment" />;
    }
  return (

    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={movie.video} />
    </div>
  );
}
