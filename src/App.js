import React, {useCallback, useEffect, useState} from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";

export default function App() {
    console.log("App is Rendering");
    // const initialTodoData = localStorage     .getItem("todoData")     .length ===
    // !0         ? JSON.parse(localStorage.getItem("todoData"))         : [
    // {                 id: "0",                 title: "청소하기",
    // completed: false             }         ];
    const [todoData, setTodoData] = useState(
        JSON.parse(localStorage.getItem("todoData")).length ==0
            ? [
                {
                    id: "0",
                    title: "청소하기",
                    completed: false
                }
            ]: JSON.parse(localStorage.getItem("todoData"))
    );
    const [value, setValue] = useState("");
    useEffect(() => {
        localStorage.setItem("todoData", JSON.stringify(todoData));
    }, [todoData]);

    const handleXClick = useCallback((id) => {
        let newTodoData = todoData.filter((data) => data.id !== id);
        setTodoData(newTodoData);
        // localStorage.setItem('todoData', JSON.stringify(newTodoData));
    }, [todoData]);
    function handleSubmit(e) {
        // form의 input data를 전송할 때 페이지 리로드되는 것을 막아줌
        e.preventDefault();

        // 새로운 할 일 데이터
        let newTodo = {
            id: Date.now(),
            title: value,
            completed: false
        };

        setTodoData(prev => [
            ...prev,
            newTodo
        ]);
        // localStorage.setItem('todoData', JSON.stringify([     ...todoData, newTodo
        // ]));
        setValue("");
    };
    const handleRemoveClick = () => {
        setTodoData([]);
        //      localStorage.setItem('todoData', JSON.stringify([]));
    }
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-blue-50">
            <div className="w-full p-6 m-4 bg-white rounded shadow-md lg:w-3/4 lg:max-w-lg">
                <div className="flex justify-between mb-3">
                    <h1 className="text-3xl font-bold">List</h1>
                    <button onClick={handleRemoveClick}>Delete All</button>
                </div>
                <Lists
                    todoData={todoData}
                    setTodoData={setTodoData}
                    handleClick={handleXClick}/>
                <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
            </div>
        </div>
    )
}