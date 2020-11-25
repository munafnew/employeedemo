import React from "react";
import { Loader } from "simple-react-loader";

function LoadingHandle({ loading, error, children }) {
  return (
    <div>
      {loading ? children : error ? error : (
        <Loader showLoader={true} type="pulse" />
      )}
    </div>
  );
}

export default LoadingHandle;
