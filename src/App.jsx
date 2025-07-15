import React, { useState } from "react";
import { Table } from "./components/Table";
import { AddModal } from "./components/AddModal";

const App = () => {
  const [data, setData] = useState([{ id: 1, name: "John", status: false }]);
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      id: Date.now(),
      name: e.target[0].value,
      status: true,
    };
    setData([...data, newData]);
    setShowModal(false);
  };
  const handleEditSubmit = (obj) => {
    setData(
      data.map((e) => {
        if (e.id == obj.id) {
          e = obj;
        }
        return e;
      })
    );
  };
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        style={{
          border: "1px solid black",
          padding: "8px 16px",
          cursor: "pointer",
          borderRadius: "4px",
          backgroundColor: "#f0f0f0",
        }}
      >
        Open Modal
      </button>
      {showModal && <AddModal handleSubmit={handleSubmit} />}
      <Table data={data} handleSubmit={handleEditSubmit} />
    </>
  );
};

export default App;
