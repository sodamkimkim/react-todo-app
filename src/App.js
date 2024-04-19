import React, {useState} from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";
export default function App() {

    const [todoData, setTodoData] = useState([
        {
            id: "0",
            title: "공부하기",
            completed: false
        }, {
            id: "1",
            title: "청소하기",
            completed: true
        }
    ]);
    const [value, setValue] = useState("");
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
        setValue("");
    };
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-blue-50">
            <div className="w-full p-6 m-4 bg-white rounded shadow-md lg:w-3/4 lg:max-w-lg">
                <div className="flex justify-between mb-3">
                    <h1 className="text-3xl font-bold">List</h1>
                </div>
                <Lists todoData={todoData} setTodoData={setTodoData}/>
                <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
            </div>
        </div>
    )
}