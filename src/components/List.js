import React from 'react';
export default function List({
    id,
    title,
    completed,
    todoData,
    setTodoData,
    provided,
    snapshot}
) {
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
        <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            <div
                className={`${snapshot.isDragging
                    ? "bg-gray-400"
                    : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600  border rounded`}>

                <div className="items-center">
                    <input
                        className="mr-5"
                        type="checkbox"
                        defaultChecked={completed}
                        onChange={() => handleCompleteChange(id)}/>
                    <span
                        className={completed
                            ? "line-through"
                            : undefined}>{title}</span>
                </div>
                <div className="items-center">
                    <button className="px-4 py-2 float-right" onClick={() => handleClick(id)}>x</button>
                </div>
            </div>
        </div>
    )
}
