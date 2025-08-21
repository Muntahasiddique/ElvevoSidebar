

function Sidebardata({icon , text , active , alert}) {
  return (
    <div>
      <li className={` relative flex items-center py-3 px-4 my-1
        font-medium rounded-md cursor-pointer
        transition-all duration-200 ease-in-out text-gray-600 hover:bg-gray-50 hover:text-gray-900`} >
        {icon}
        <span className="ml-3 transition-all duration-200" >
{text}
        </span>
        {alert && (<div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400`} >

           </div>)
          
        }
      </li>
    </div>
  )
}

export default Sidebardata
