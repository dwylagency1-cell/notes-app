import { useState } from "react"
import { Trash2 } from "lucide-react"

function App() {
  function submithandler(e) {
    e.preventDefault()
    console.log('form submitted..')
    const copyTask = [...task]
    copyTask.push({titel, description})
    setTask(copyTask)
    console.log(copyTask)
    setTitle('')
    setDescription('')
  }
  const [task, setTask] = useState([])

  const [titel, setTitle] = useState('')

  const [description, setDescription] = useState('')

  function Title(e) {
    setTitle(e.target.value)
  }

  function Description(e) {
    setDescription(e.target.value)

  }
  function Delete(index) {
    console.log(index)
    const copyTask = [...task]
    copyTask.splice(index, 1)
    setTask(copyTask)
    

    
  }
  return <div>
    <div>
      <form onSubmit={submithandler} className="flex flex-col items-center justify-center gap-y-[10px]  mt-[30px]">
        <input className="border-solid border-[2px] text-[white] w-[600px] pt-[10px] pl-[10px] pb-[10px] text-[20px] rounded-[10px]"  type="text" placeholder="Title" value={titel} onChange={Title}></input>
        <textarea className="border-solid border-[2px] text-[white] w-[600px] h-[200px] pl-[10px] pt-[10px] rounded-[10px]" placeholder="Description" value={description} onChange={Description}></textarea>
        <button className="w-[600px] text-[#000000] bg-white pt-[10px] pb-[10px] rounded-[10px] active:scale-97">Add note</button>
      </form>
      <h1 className="text-white m-[20px] text-[30px] font-bold">Recent Notes</h1>
      <div className=" w-[1/2] m-[20px] grid grid-cols-[300px_300px_300px_300px] gap-x-[50px] gap-y-[20px]">
      {task.map(function(elem, index) {
        return <div className="bg-white h-[300px] rounded-[20px] p-[30px] leading-relaxed relative">
          <Trash2 onClick={function() {
            Delete(index)
          }} className="absolute top-5 right-5 text-[red] cursor-pointer" />
          <h3 className="text-[30px] font-bold font-sans leading-[30px]">{elem.titel}</h3>
          <h3 className="font-sans text-[gray-400] mt-[20px]">{elem.description}</h3>
        </div>
      })}
      
    

      </div>
    </div>
  </div>
}

export default App
