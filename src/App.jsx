import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";
import AllDelete from "./components/AllDelete";
import AllComplete from "./components/AllComplete";
export default function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="bg-blue-800 h-autoz pb-10">
      <div className="flex-col flex justify-center text-center items-center ">
        <div className=" pt-10  font-bold text-3xl text-center text-white pb-2">
          Todo-List
        </div>
        <div className="   w-full">
          <Form taskList={taskList} setTaskList={setTaskList} />
          <AllComplete taskList={taskList} setTaskList={setTaskList} />
          <AllDelete taskList={taskList} setTaskList={setTaskList} />
        </div>
      </div>
      <>
        <List taskList={taskList} setTaskList={setTaskList} />
      </>
    </div>
  );
}
