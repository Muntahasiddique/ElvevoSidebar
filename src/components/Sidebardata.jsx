import { useContext } from "react"
import { sideBarecontext } from "./Sidebar"

function Sidebardata({ icon, text, active, alert }) {
  const { Expended } = useContext(sideBarecontext)

  return (
    
    <li className={`group relative flex items-center py-3 px-3 my-1 mx-1
      font-medium rounded-md cursor-pointer transition-colors duration-200
      ${active 
        ? "bg-blue-100 text-blue-800" 
        : "text-gray-600 hover:bg-gray-100"
      }`} 
    >
      <div className="flex items-center justify-center w-5 h-5">
        {icon}
      </div>
      
      {Expended && (
        <span className="ml-3 overflow-hidden">
          {text}
        </span>
      )}
      
      {alert && (
        <div className={`absolute right-2 w-2 h-2 rounded-full bg-red-500`}></div>
      )}
      
      {/* Tooltip that appears outside the sidebar */}
      {!Expended && (
        <div className="fixed left-16 ml-2 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-md
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                      transition-all duration-200 whitespace-nowrap z-50 shadow-lg">
          {text}
          {/* Tooltip arrow */}
          <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 
                          border-t-2 border-b-2 border-l-0 border-r-2 border-r-gray-900 border-transparent">
          </div>
        </div>
      )}
    </li>
  )
}

export default Sidebardata