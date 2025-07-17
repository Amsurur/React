import axios from "axios";
import { Api } from "./config/api";
import { useEffect, useState } from "react";
import TodoTable from "./components/TodoTable";
import AddModal from "./components/AddModal";

const App = () => {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  async function GetData() {
    try {
      const { data } = await axios.get(Api);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function AddData(obj) {
    try {
      await axios.post(Api, obj);
      GetData();
      setOpenModal(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    GetData();
  }, []);
  return (
    <div>
      <button onClick={() => setOpenModal(true)}>Add New Todo</button>
      {openModal && <AddModal AddData={AddData} />}
      <TodoTable data={data} />
    </div>
  );
};

export default App;
