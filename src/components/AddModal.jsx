import React from "react";

const AddModal = ({ AddData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      name: e.target["name"].value,
      status: false,
    };
    AddData(obj);
  };
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        zIndex: 1000,
        width: "300px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          style={{
            marginBottom: "12px",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          type="text"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddModal;
