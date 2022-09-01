import { useState } from "react";

const Form = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
        completed: false,
      },
    ]);
    console.log(taskList);
    //入力した情報の取り消し
    setInputText("");
  };

  const handleChange = (event) => {
    setInputText(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex px-10 rop-shadow-md py-1 mb-3 ">
        <input
          type="text"
          className="pl-5 rounded-l-lg h-10 w-4/5 border-none pr-4  bg-gray-200 focus:bg-white focus:text-gray-6s00 outline-none "
          placeholder="Enter todo"
          onChange={handleChange}
          value={inputText}
        />
        <input
          type="submit"
          value="Add"
          className="rounded-r-lg w-1/5 bg-blue-500 hover:bg-blue-400 text-white h-10 "
        />
      </div>
    </form>
  );
};

export default Form;
