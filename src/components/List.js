import React from "react";

export default function List({todoData, setTodoData}) {
    const btnStyle = {
        color: "#fff",
        border: "none",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right"
    };
    function getStyle(completed) {
        return {
            padding: "20px",
            borderBottom: "1px dotted #ccc",
            textDecoration: completed
                ? "line-through"
                : "none"
        };
    };
    function handleCompleteChange(id) {
        let newTodoData = todoData.map(data => {
            if (data.id === id) {
                data.completed = !data.completed;
            };
            return data;
        });
        setTodoData(newTodoData);
        console.log(todoData);
    };
    function handleClick(id) {
        let newTodoData = todoData.filter((data) => data.id !== id);
        setTodoData(newTodoData);
        console.log('newTodoData', newTodoData);
    };
    return (
        <div>
            {
                todoData.map((data) => (
                    <div style={getStyle(data.completed)} key={data.id}>
                        <input
                            type="checkbox"
                            defaultChecked={data.completed}
                            onChange={() => handleCompleteChange(data.id)}/>{data.title}
                        <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
                    </div>
                ))
            }
        </div>
    )
} // end of functional component