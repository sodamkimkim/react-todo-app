import React, {useState} from "react";
import "./App.css"; 
import List from "./components/List";
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





    function handleChange(e) {
        setValue(e.target.value);
    }
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

                <form
                    style={{
                        display: "flex"
                    }}
                    onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="value"
                        style={{
                            flex: "10",
                            padding: "5px"
                        }}
                        placeholder="해야 할 일을 입력하세요."
                        value={value}
                        onChange={handleChange}/>
                    <input
                        type="submit"
                        value="입력"
                        className="btn"
                        style={{
                            flex: '1'
                        }}/>
                </form>
            </div>
        </div>
    )
}