import React from "react";

const AllDelete = ({ taskList, setTaskList }) => {
  const handleAllDelete = () => {
    const confirm = window.confirm("本当にすべてを削除しますか");
    if (confirm) return setTaskList([]);
  };
  return (
    <div className="flex px-10 rop-shadow-md ">
      <button
        onClick={handleAllDelete}
        disabled={taskList.length === 0}
        className="bg-red-500  text-white py-1 h-10 px-4 rounded mb-2  container mx-auto hover:bg-red-400"
      >
        All Delete
      </button>
    </div>
  );
};

export default AllDelete;
