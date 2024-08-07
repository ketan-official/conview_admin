import React, { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import GroupChart3 from "../../../components/partials/widget/chart/group-chart-3";
import SelectMonth from "@/components/partials/SelectMonth";
import StackBarChart from "../../../components/partials/widget/chart/stack-bar";
import Calculation from "../../../components/partials/widget/chart/Calculation";
import ExampleTwo from "../../table/react-tables/ExampleTwo";
import HomeBredCurbs from "../../dashboard/HomeBredCurbs";
import ImageBlock1 from "@/components/partials/widget/block/image-block-1";
import GroupChart1 from "@/components/partials/widget/chart/group-chart-1";
import ReportsTable from "../report/ReportsTable";
import axios from "axios";

const campaigns = [
  {
    name: "Channel",
    value: "roi",
  },
  {
    name: "Email",
    value: "40%",
  },
  {
    name: "Website",
    value: "28%",
  },
  {
    name: "Facebook",
    value: "34%",
  },
  {
    name: "Offline",
    value: "17%",
  },
];
const CrmPage = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/report/getAll")
      .then((res) => {
        console.log(10, res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <HomeBredCurbs title="Dashboard" />
      <div className="space-y-5">
        <div className="grid grid-cols-12 gap-5 mb-5">
          <div className="2xl:col-span-9 lg:col-span-8 col-span-12">
            <Card bodyClass="p-4">
              <div className="grid md:grid-cols-3 col-span-1 gap-4">
                <GroupChart1 />
              </div>
            </Card>
          </div>
        </div>
       
        <ReportsTable data={data} />
      </div>
    </div>
  );
};

export default CrmPage;
