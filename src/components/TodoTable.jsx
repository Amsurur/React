import React from "react";
import EditDialog from "./EditModal";
import Button from "@mui/material/Button";

const TodoTable = ({ data, EditData }) => {
  const [open, setOpen] = React.useState(false);
  const [elem, setElem] = React.useState("");

  const handleClickOpen = (e) => {
    setElem(e);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
        border: "1px solid #ddd",
        padding: "8px",
        textAlign: "left",
      }}
    >
      <thead style={{ textAlign: "left" }}>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e, i) => {
          return (
            <tr>
              <td>{i + 1}</td>
              <td>{e.name}</td>
              <td>{e.status ? "Active" : "Inactive"}</td>
              <td>
                <button>delete</button>
                <Button variant="outlined" onClick={() => handleClickOpen(e)}>
                  Open dialog
                </Button>
                <button>Info</button>
              </td>
            </tr>
          );
        })}
      </tbody>
      <EditDialog
        setElem={setElem}
        EditData={EditData}
        elem={elem}
        open={open}
        handleClose={handleClose}
      />
    </table>
  );
};

export default TodoTable;
