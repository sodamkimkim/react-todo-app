import React, {useState} from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
export default function App() {

    const [todoData, setTodoData] = useState([
        {
            id: "1",
            title: "공부하기",
            completed: false
        }, {
            id: "2",
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
        <div className="container">
            <div className="todoBlock">
                <div className="title">
                    <h1>List</h1>
                </div>
                <List todoData={todoData} setTodoData={setTodoData}/> 
                <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
            </div>
        </div>
    )
}