import '../css/Card.css'
import Person from './Person'
import Arr from './data'
import { useState } from 'react'

function Card() {

  const [ data, setData ] = useState(Arr)

  const deleteAll = () => {
    setData([])
  }

  const deletePerson = (id) => {
    const newPerson = data.filter(person => {
      if (person.id !== id) {
        return person
      }
    })
    setData(newPerson)
  }

  return (
    <>
      <div className="card">
        <h1 className='title'>{data.length} birthdays today</h1>
        <>
          {
            data.map(person => {
              return (
                <Person {...person} key={person.id}>
                  <button onClick={() => deletePerson(person.id)} className="icon">
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </Person>
              )
            })
          }
        </>
        <button className='btn' onClick={deleteAll}>
          Clear All
        </button>
      </div>
    </>
  )
}

export default Card