import React from "react";
import { Thead } from "./Thead";
import Tbody from "./Tbody";

export const Table = ({ data, handleSubmit }) => {
  return (
    <table
      style={{
        width: "90%",
        margin: "20px auto",
        borderCollapse: "collapse",
        border: "1px solid #ccc",
        textAlign: "left",
        marginTop: "20px",
      }}
    >
      <Thead />
      <Tbody data={data} handleSubmit={handleSubmit} />
    </table>
  );
};
