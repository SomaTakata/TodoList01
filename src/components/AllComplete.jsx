import React from "react";

const AllComplete = ({ taskList, setTaskList }) => {
  const handleAllComplete = () => {
    const confirm = window.confirm("本当に完了してもいいですか？");
    if (confirm)
      return setTaskList(
        taskList.map((task) => {
          return {
            ...task,
            completed: !task.completed,
          };
        })
      );
  };
  return (
    <div className="flex px-10 rop-shadow-md ">
      <button
        onClick={handleAllComplete}
        disabled={taskList.length === 0}
        className="bg-green-500  text-white py-2 px-4 rounded mb-1  container mx-auto hover:bg-green-400"
      >
        All Complete
      </button>
    </div>
  );
};

export default AllComplete;
