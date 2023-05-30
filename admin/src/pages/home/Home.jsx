import Chart from "../../components/chart/Chart";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import PieChartGraph from "../../components/totalprofit/Totalprofit";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTI5ZDdiMGJlOWFkMWVmODIyNTVkMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MTY0NDAyMiwiZXhwIjoxNjgyMDc2MDIyfQ.B0POM53M_rFFGlDP-K2j3pYdPk4IYN1P1bdjLqiKrLQ",
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);
 
return (
    <div className="home">
      <h1>FlixHub Admin Page</h1>
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        {console.log(userStats)}
        <WidgetSm />
      </div>
      <PieChartGraph/>
    </div>
  );
}
