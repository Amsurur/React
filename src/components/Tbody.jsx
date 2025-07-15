import React, { useState } from "react";
import { EditModal } from "./EditModal";

const Tbody = ({ data, handleSubmit }) => {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState(null);
  const [idx, setIdx] = useState(null);
  const handleSubmit2 = (e) => {
    e.preventDefault();
    let edited = {
      id: idx,
      name: e.target[0].value,
      status: false,
    };
    handleSubmit(edited);
    setShowModal(false);
  };
  const handleEditOpen = (e) => {
    setShowModal(true);
    setValue(e.name);
    setIdx(e.id);
  };
  return (
    <tbody>
      {data.map((e, i) => (
        <tr>
          <td>{i}</td>
          <td>{e.name}</td>
          <td>{e.status ? "Active" : "Inactive"}</td>
          <td style={{ display: "flex", gap: "10px" }}>
            <button>delete</button>
            <button onClick={() => handleEditOpen(e)}>✒️</button>
          </td>
        </tr>
      ))}
      {showModal && <EditModal value={value} handleSubmit={handleSubmit2} />}
    </tbody>
  );
};

export default Tbody;
