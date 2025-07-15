export const AddModal = ({ handleSubmit }) => {
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
        borderRadius: "8px",
        width: "300px",
        textAlign: "center",
      }}
    >
      <h2>Add New Item</h2>

      <form onSubmit={handleSubmit} action="">
        <input
          style={{
            width: "100%",
            padding: "8px",
            margin: "12px 0",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
          type="text"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
