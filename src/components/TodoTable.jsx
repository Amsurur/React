import React from "react";

const TodoTable = ({ data }) => {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" , marginTop: "20px" , border: "1px solid #ddd", padding: "8px",textAlign:"left"}}>
      <thead style={{textAlign:"left"}}>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody >
        {data.map((e, i) => {
          return (
            <tr>
              <td>{i + 1}</td>
              <td>{e.name}</td>
              <td>{e.status ? "Active" : "Inactive"}</td>
              <td>
                <button>delete</button>
                <button>edit</button>
                <button>Info</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TodoTable;
