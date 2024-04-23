import React from "react";

const ErrorFallback = ({ resetErrorBoundary }) => {
  return (
    <div>
      <p>Something Went Wrong</p>
      {/* Add a button to trigger the error */}
      <button onClick={() => resetErrorBoundary()}>Retry</button>
    </div>
  );
};

export default ErrorFallback;
