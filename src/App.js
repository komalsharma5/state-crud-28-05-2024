import React, { useState } from 'react'
import data from './Fake-data'

const App = () => {
  const [demoData,setDemoData] = useState(data)
  const [input ,setInput] = useState({})
  const [view,setView] = useState(0)

  const input_handler = (e) => {
    setInput({...input,[e.target.name] : e.target.value})
  }
  const submit_handler = () => {
    setDemoData([...demoData,input])
  }

  const delete_handler = (id) => {
    demoData.splice(id,1)
    setDemoData([...demoData])
  }
  const view_handler = (val,id) => {
    setInput(val)
    setView(id)
  }
  const update_handler = (val) => {
    demoData.splice(val,1,input)
    setDemoData([...demoData])
  }
  return (
    <>
    <div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      
      <div class="modal-header">
        <h4 class="modal-title">Book</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

     
      <div className='mx-auto d-block text-center  my-2'>
        <input type='text ' className='mx-2' placeholder='title' name='title' value={input.title} onChange={input_handler} ></input>
        <input type='text' className='mx-2 ' placeholder='price' name="price" value={input.price} onChange={input_handler}></input><br></br>
        <button className='btn btn-primary  mt-2' onClick={submit_handler}>submit</button>
        <button className='btn btn-success mx-2 mt-2 ' onClick={() =>update_handler(view)}>Update</button>
      </div>

     
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>


      {
        demoData?.map((val,id)=>{
            return(
              <div className='mx-auto d-block border border-1 text-center w-25 my-2 border-dark'>
                <h3>{val.id}</h3>
                <h3>{val.title}</h3>
                <h3>{val.price}</h3>
                <button className='btn btn-danger mb-2' onClick={()=>{delete_handler(id)}}>Delete</button>
                <button className='btn btn-warning mx-2 mb-2'data-bs-toggle="modal" data-bs-target="#myModal" onClick={()=>{view_handler(val,id)}}>View</button>
              </div>
            )
        })
      }
    </>
  )
}

export default App
