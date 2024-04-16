import React from "react";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <p>Something Went Wrong</p>
      <p>{error.message}</p>
      {/* Add a button to trigger the error */}
      <button onClick={() => resetErrorBoundary()}>Retry</button>
    </div>
  );
};

export default ErrorFallback;
