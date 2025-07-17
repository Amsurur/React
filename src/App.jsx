import axios from "axios";
import { Api } from "./config/api";
import { useEffect, useState } from "react";
import TodoTable from "./components/TodoTable";
import AddModal from "./components/AddModal";
import useDarkSide from "./config/useDarkMode";

const App = () => {
  const [data, setData] = useState([]);
  const [theme, toggleTheme] = useDarkSide();

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
    <div className="">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-yellow-400 dark:text-black"
      >
        Toggle Theme
      </button>
      {openModal && <AddModal AddData={AddData} />}
      <TodoTable data={data} />
    </div>
  );
};

export default App;
