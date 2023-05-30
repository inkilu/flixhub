import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTI5ZDdiMGJlOWFkMWVmODIyNTVkMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NTEyMzY2OSwiZXhwIjoxNjg3NzE1NjY5fQ.G6U8MuRJ2Ks6gqMMlOk60JgRUrSck9SiCgj2Jz9xsSs",
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);
  let a = JSON.stringify(newUsers);
  localStorage.setItem('graphDetails', a);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Users</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <div className="widgetSmTitle"> Profile Photo</div>
          <div className="widgetSmTitle"> Username</div>
          <div className="widgetSmTitle"> Email-id</div>
          <div className="widgetSmUsername"> Subscription</div>
        </li>
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <span className="widgetSmUsername">{user.email}</span>
            {user.subscription ? (
              <span className="widgetSmUsername">{user.plan}</span>
            ) : (
              <span className="widgetSmUsername">None</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
