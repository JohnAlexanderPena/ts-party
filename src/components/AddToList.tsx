import React, {useState} from 'react'

import { IState as Props } from "../App"


interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}
const AddToList: React.FC<IProps> = ({ people, setPeople}) => {


    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: ""
    })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void  => {
            setInput({...input,
                [e.target.name]: e.target.value
            })
    }

    const handleClick = ():void => {
        console.log('working')
        if( !input.name || !input.age || !input.img) {
            return
        }



        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                img: input.img,
                note: input.note
            }
        ])

        setInput({
            name: "",
            age: "",
            note: "",
            img: ""
        })
    }



    console.log(input)
    return (
        <div className="AddToList">
            <input type="text" placeholder="Name" className="AddToList-input" onChange={handleChange} name="name" value={input.name}/>
            <input type="number" placeholder="Age" className="AddToList-input" onChange={handleChange} name="age" value={input.age}/>            
            <input type="text" placeholder="Image URL" className="AddToList-input" onChange={handleChange} name="img" value={input.img}/>
            <textarea  placeholder="Notes" className="AddToList-input"value={input.note} onChange={handleChange}  name="note"/>
            <button className="AddToList-btn" onClick={handleClick}>Add to list Component</button>
        </div>
    )
}

export default AddToList
