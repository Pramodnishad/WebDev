import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { updateToPaste, addToPaste } from '../redux/pasteSlice'


const Home = () => {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const pasteId = searchParams.get('pasteId');
  const dispatch = useDispatch()

  const now = new Date()
  const formattedDate = now.toISOString('en-us', {
    month: 'short',
    day: 'numeric'
  })

  const formattedTime = now.toLocaleString('en-us', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  })


  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Math.floor(Math.random()*999)+1,
      createdAt: formattedDate 

    }
    if (pasteId) {
      dispatch(updateToPaste(paste))
    } else {

      dispatch(addToPaste(paste))
    }
    setTitle('')
    setValue('')
    setSearchParams({})
  }

  return (
    <div className='flex flex-col gap-4 aligin-center mt-4 '>
      <div className='flex flex-row justify-between align-center mt-4 gap-4 '>
        <input type="text"
          placeholder='Enter title here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='p-2 rounded-xl border border-gray-300'
        />
        <button onClick={createPaste}
          className='p-2 rounded-xl border border-gray-300'>
          {
            pasteId ? "Update My Paste" : "Create My Paste"
          }
        </button>
      </div>
      <div className='mt-4'>
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className='border border-gray-600 rounded-xl min-w-[500px] p-4 '
          rows={20}
        >

        </textarea>
      </div>
    </div>
  )
}

export default Home