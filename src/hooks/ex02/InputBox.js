import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('')
  const [nickName, setNickname] = useState('')

  useEffect(() => {
    console.log(name)
    console.log(nickName)
  }, [name, nickName])

  const onChangeName = e => {
    setName(e.target.value)
  }
  const onChangeNickname = e => {
    setNickname(e.target.value)
  }

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickName} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>name:</b> {name}
        </div>
      </div>
      <div>
        <div>
          <b>nickName:</b> {nickName}
        </div>
      </div>
    </div>
  )
}

export default Info;