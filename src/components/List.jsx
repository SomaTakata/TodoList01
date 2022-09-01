import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
const List = ({taskList,setTaskList}) => {
  const handleDelete = (id) =>{
    setTaskList(taskList.filter((task)=> task.id !== id))

  }
  const handleCompleted = (id) =>{
    setTaskList(taskList.map((task) =>{
      if(id===task.id){
        return{
          ...task,
          completed:!task.completed
        }
      }
      return task;
    }))


  }
  return (
    <div className="text-black px-10 flex-col ">
        {taskList.map((task,index)=> (
            
       <ul key={index} className={task.completed ? "completed":""} >
        <li>
          <div className="my-2 py-2 bg-white flex h-15 border-bold border-black rounded-md ">
            <div className="w-4/5 ml-2 overflow-x-auto  ">
              <p className="">{task.text}</p>
            </div>
            <div
              className=" w-1/5 flex justify-center  border-solid rounded-md bg-blue-500 ml-1 items-center hover:bg-blue-400"
              onClick=""
              >
              <BsCheckLg onClick={()=> handleCompleted(task.id)} />
            </div>
            <div
              className=" w-1/5 flex justify-center border-solid rounded-md bg-red-500 mx-2 items-center hover:bg-red-400"
              onClick=""
              >
              <MdDeleteForever onClick={() =>handleDelete(task.id)} />
            </div>
          </div>
        </li>
      </ul>
     ))}
    </div>
  );
};

export default List;
