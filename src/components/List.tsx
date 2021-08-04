import React from 'react'



interface IProps{
    people: {
      name: string
      age: number
      url: string
      note?: string
    }[]
  }

const  List: React.FC<IProps> = ({ people }) =>  {

    const renderList = (): JSX.Element[] => {
        return people.map(person => {
          return (
                <li className="List">
                <div className="List-header">
                <img src={person.url} alt="pic" className="List-img" />
                {person.name}
                </div>
                <p>{person.age} years old</p>
                <p className="List-note">{person.note}</p>
            </li>
          )
        })
    }

    
    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List
