import { useState } from 'react';
import './ToDo.css';

const ToDo = () =>{
    const [toDoInput, setToDoInput] = useState("");
    const [toDoThings, setToDoThings] = useState([]);


    const searchArayOfObjets = (array, word_to_look_for) =>{
        let currentObject = {};
        let indexFound = -1;
        for(let counter = 0; counter < array.length; counter++){
            currentObject = array[counter];
            if(currentObject.title === word_to_look_for){
                indexFound = counter;
                return indexFound;
            }
        }
        return indexFound;
    }
    const addToDo = () =>{
        if(toDoInput.length > 0){
            let tempArray = []
            tempArray = tempArray.concat(toDoThings);
            tempArray.unshift({title: toDoInput, done: false});
            setToDoThings(tempArray);
        }
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
    }

    const removeToDo = (word_to_look_for) =>{
        let tempArray = [];
        tempArray = tempArray.concat(toDoThings);
        let indexFound = searchArayOfObjets(tempArray, word_to_look_for);
        tempArray.splice(indexFound, 1);
        setToDoThings(tempArray);
    }

    const cancelToDo = (word_to_look_for) =>{
        let tempArray = [];
        tempArray = tempArray.concat(toDoThings);
        let indexFound = searchArayOfObjets(tempArray, word_to_look_for);
        if(tempArray[indexFound].done){
            tempArray[indexFound].done = false;
        }else{
            tempArray[indexFound].done = true;
            tempArray.push(tempArray[indexFound]);
            tempArray.splice(indexFound, 1);
        }

        setToDoThings(tempArray);
    }
    return(
        <div className='toDoContainer'>
            <div className='toDo'>
                <h1>To do list</h1>
                <div className='toDoAdd'>
                    <input type="text" placeholder='New task' onKeyDown={(event) => {
                        if(event.key === 'Enter'){
                            addToDo();
                        }
                    }} onChange={(event) => setToDoInput(event.target.value)}/>
                    <button onClick={addToDo}>Add</button>
                </div>
                <div className='toDoList'>
                    {toDoThings.map((item, index) =>{
                        return(
                            <div key={index}>
                                <p className={item.done ? "done" : "notDone"} onClick={() => cancelToDo(item.title)}>
                                    {item.title}
                                </p> 
                                <button onClick={() => removeToDo(item.title)}>X</button>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default ToDo;