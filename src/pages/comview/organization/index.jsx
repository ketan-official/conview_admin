import React from "react";
import DropZone from "./DropZone";
import ValidationTypes from "./validation-types";
import Card from "../../../components/ui/Card";
import UnderConstructionPage from "../../utility/under-construction";

const Organization = () => {
  return (
    <>
      <div className="xl:col-span-2 col-span-1">
        <Card title="Add Photo">
          <DropZone />
        </Card>
      </div>

      <div>
        <div className="xl:col-span-2 col-span-1 mt-5">
          <Card title="Add Organization">
            <ValidationTypes />
          </Card>
        </div>
      </div>

{/* <UnderConstructionPage /> */}
    </>
  );
};

export default Organization;
