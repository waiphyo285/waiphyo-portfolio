import React from "react";

function ParamListComponent({ params }) {
  return (
    <div className="col-md-12">
      {params.map((param, paramIdx) => (
        <p className="p" key={paramIdx}>
          {param}
        </p>
      ))}
    </div>
  );
}

export default ParamListComponent;
