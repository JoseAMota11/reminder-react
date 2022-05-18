import '../css/Person.css'

function Person({image, fullname, age, children}) {
  return (
    <>
      <div className="person__container">
        <div className="person__data">
          <img className="image" src={image} alt="" />
          <div className='info__container'>
            <h2 className="person__name">{fullname}</h2>
            <h3 className="person__age">{age} years</h3>
          </div>
        </div>
        {children}
      </div>
    </>
  )
}

export default Person