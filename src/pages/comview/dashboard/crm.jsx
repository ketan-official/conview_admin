import React, { useEffect, useState } from "react";
import Card from "@/components/ui/Card";

import HomeBredCurbs from "../../dashboard/HomeBredCurbs";
import GroupChart1 from "@/components/partials/widget/chart/group-chart-1";
import ReportsTable from "../report/ReportsTable";
import axios from "axios";
import { Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";
const CrmPage = () => {
  const navigate = useNavigate();
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
  const handleNavigate = () => {
    navigate("/assets");
  };
  return (
    <div>
      <HomeBredCurbs title="Dashboard" />
      <div className="space-y-5">
        <div className="grid grid-cols-12 gap-5 mb-5">
          <div className="2xl:col-span-9 lg:col-span-8 col-span-12">
          <Card bodyClass="p-4">
              <div className="grid md:grid-cols-3 col-span-1 gap-4">
                {/* <GroupChart2 /> */}
                <div onClick={handleNavigate}>
                  <Card bodyClass="pt-4 pb-3 px-4 cursor-pointer">
                    <div className="flex space-x-3 rtl:space-x-reverse">
                      <div className="flex-none">
                        <div
                          className={`bg-[#E5F9FF] dark:bg-slate-900 text-info-500 h-12 w-12 rounded-full flex flex-col items-center justify-center text-2xl`}
                        >
                          <Icon icon="heroicons:arrow-trending-up-solid" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-slate-600 dark:text-slate-300 text-sm mb-1 font-medium">
                          Report
                        </div>
                        <div className="text-slate-900 dark:text-white text-lg font-medium">
                          0
                        </div>
                      </div>
                    </div>
                    <div className="ltr:ml-auto rtl:mr-auto max-w-[124px]">
                      {/* <Chart
                        options={item.name.options}
                        series={item.name.series}
                        type="area"
                        height="41"
                        width="124"
                      /> */}
                    </div>
                  </Card>
                </div>
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
