import React from "react";
import ContentRowCenter from "./ContentRowCenter";
import ContentRowDB from "./ContentRowDB";
import Chart from "./Chart";

function ContentRowTop() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">DTeachLife - Dashboard</h1>
        </div>
        <ContentRowDB />
        <ContentRowCenter />
        <Chart />
      </div>
    </React.Fragment>
  );
}
export default ContentRowTop;
