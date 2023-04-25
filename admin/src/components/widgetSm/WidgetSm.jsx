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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTI5ZDdiMGJlOWFkMWVmODIyNTVkMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjE1ODI1NywiZXhwIjoxNjg0NzUwMjU3fQ.yYpL4QN6kzQgCtijl8eJyphIUbIcjTl9IlOYq5AiE4I",
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);
  
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Users</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <div className="widgetSmTitle"> Profile Photo</div>
          <div className="widgetSmTitle"> Username</div>
          <div className="widgetSmTitle"> Email-id</div>
          {/* <div className="widgetSmUsername"> Subscription</div> */}
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
          </li>
        ))}
      </ul>
    </div>
  );
}
