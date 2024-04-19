import React from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import List from "./List";
 
const Lists = React.memo(({todoData, setTodoData})=> {
    console.log("Lists is Rendering");
    const handleEnd = (result) => {
      //  console.log(result);
        if (!result.destination) 
            return;
        const newTodoData = [...todoData];
        // 1. 변경시키는 아이템을 배열에서 지워준다.
        // 2. return 값으로 지워진 아이템을 잡아준다.
        const [reorderedItem] = newTodoData.splice(result.source.index, 1);

        // 원하는 자리에 reorderItem을 insert
        newTodoData.splice(result.destination.index, 0, reorderedItem);
        setTodoData(newTodoData);
       // console.log(todoData);
    }
    return (
        <div>
            <DragDropContext onDragEnd={handleEnd}>
                <Droppable id="todoList" droppableId="todoList">
                    {
                        (provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {
                                    todoData.map((data, index) => (
                                        <Draggable
                                            key={data.id}
                                            draggableId={data
                                                .id
                                                .toString()}
                                            index={index}>
                                            {
                                                (provided, snapshot) => {
                                                //    console.log('provided', provided);
                                                //    console.log('snapshot', snapshot);
                                              return      ( 
                                                    
                                                    <List
                                                        key={data.id}
                                                        id={data.id}
                                                        title={data.title}
                                                        completed={data.completed}
                                                        todoData={todoData}
                                                        setTodoData={setTodoData}
                                                        provided={provided}
                                                        snapshot={snapshot}/>
                                                )}
                                            }
                                        </Draggable>
                                    ))
                                }
                                {provided.placeholder}
                            </div>
                        )
                    }
                </Droppable>
            </DragDropContext>
        </div>
    )
}) // end of functional component
export default Lists;