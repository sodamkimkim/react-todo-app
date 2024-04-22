import React, {useState} from 'react';
const List = React.memo(({
    id,
    title,
    completed,
    todoData,
    setTodoData,
    provided,
    snapshot,
    handleClick
}) => {
    console.log("List is Rendering")
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

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
    function handleEditChange(event) {
        setEditedTitle(event.target.value);
    }
    function handleSubmit(event)
    {
        console.log("edit submit");
        event.preventDefault();
        let newTodoData = todoData.map((data)=>{
            if(data.id === id)
            {
                data.title = editedTitle;
            }
            return data;
        });
        setTodoData(newTodoData);
        setIsEditing(false); 
    }

    if (isEditing == true) {
        return (
            <div>
                <div
                    className="bg-gray-100 flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600  border rounded">

                    <div className="items-center">
                        <form onSubmit={handleSubmit}> 
                            <input
                                value={editedTitle}
                                className='w-full px-3 py-2 mr-4 text-gray-500 rounded'
                                onChange={handleEditChange}
                                autoFocus/>
                        </form>
                    </div>
                    <div className="items-center">
                        <button className="px-4 py-2 float-right" onClick={() => handleClick(id)}>x</button>
                        <button
                            type='submit'
                            className="px-4 py-2 float-right"
                            onClick={handleSubmit}>Save</button>
                    </div>
                </div>
            </div>
        )
    } else {
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
                        <button className="px-4 py-2 float-right" onClick={() => setIsEditing(true)}>Edit</button>
                    </div>
                </div>
            </div>
        )
    }

});
export default List;