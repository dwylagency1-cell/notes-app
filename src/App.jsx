import { useState } from "react"

function App() {
  function submithandler(e) {
    e.preventDefault()
    console.log('form submitted..')
    console.log(titel)
    console.log(description)
    setTitle('')
    setDescription('')
  }
  const [titel, setTitle] = useState('')

  const [description, setDescription] = useState('')

  function Title(e) {
    setTitle(e.target.value)
  }

  function Description(e) {
    setDescription(e.target.value)

  }
  return <div>
    <div>
      <form onSubmit={submithandler} className="flex flex-col items-center justify-center gap-y-[10px]  mt-[30px]">
        <input className="border-solid border-[2px] text-[white] w-[600px] pt-[10px] pl-[10px] pb-[10px] text-[20px] rounded-[10px]"  type="text" placeholder="Title" value={titel} onChange={Title}></input>
        <textarea className="border-solid border-[2px] text-[white] w-[600px] h-[200px] pl-[10px] pt-[10px] rounded-[10px]" placeholder="Description" value={description} onChange={Description}></textarea>
        <button className="w-[600px] text-[#000000] bg-white pt-[10px] pb-[10px] rounded-[10px] active:scale-97">Add note</button>
      </form>
      <h1 className="text-white m-[20px] text-[30px] font-bold">Recent Notes</h1>
      <div className=" w-[1/2] m-[20px] grid grid-cols-[300px_300px_300px_300px] gap-x-[50px]">
      <div className="bg-white h-[300px]"></div>
      <div className="bg-white h-[300px]"></div>
      <div className="bg-white h-[300px]"></div>
      <div className="bg-white h-[300px]"></div>
    

      </div>
    </div>
  </div>
}

export default App
