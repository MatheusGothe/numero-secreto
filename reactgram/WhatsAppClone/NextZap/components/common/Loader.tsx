"use client"
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loader: React.FC = () => {
  return (
    // suppressHydrationWarning={true}
    <div className="grid place-items-center bg-white h-screen" >
      {/* <CircularProgress color="primary" /> */}
      <p>carregando</p>
    </div>
  );
};

export default React.memo(Loader);