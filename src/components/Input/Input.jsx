import { useState } from 'react'

const Input = () => {

  const [ value, setValue ] = useState('');

  return (
    <>
      <div className="input">
        <div>{ value } </div>
        <input
          type="text"
          placeholder="Type something"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  )
}

export default Input