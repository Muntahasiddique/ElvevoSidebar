import logo from '../assets/Target_Corporation_logo_vector.svg.avif'
import FirstPageIcon from '@mui/icons-material/FirstPage';
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function Sidebar({ children }) {
  return (
    <div className="fixed left-0 top-0 h-screen z-50">
      <aside className="h-full">
        <nav className="h-full flex flex-col bg-white border-r border-gray-200 shadow-lg">
          {/* Header Section */}
          <div className="p-6 pb-4 flex justify-between items-center border-b border-gray-100">
            <img 
              src={logo} 
              alt="Target Corporation Logo" 
              className="w-32 h-8 object-contain transition-all duration-300 hover:scale-105"
            />
            <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                             transform hover:scale-110 active:scale-95">
              <FirstPageIcon className="text-gray-600 hover:text-gray-800 transition-colors" />
            </button>
          </div>
          
          {/* Navigation Items */}
          <ul className="flex-1 px-3 py-4 overflow-y-auto">
            {children}
          </ul>
          
          {/* Optional Footer Section */}
          <div className="p-4 pt-2 border-t border-gray-100 mt-auto">
            <div className="text-xs text-gray-500 text-center">
              © 2025 Sidebar
            </div>
            <div className='flex' >
              <div className='text-xs text-black-900 text-center' >
              muntahamirza@gmail.com
            </div>
        <MoreVertIcon size={20} />
            </div>
            
          </div>
        </nav>
      </aside>
    </div>
  )
}