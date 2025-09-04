import logo from '../assets/Target_Corporation_logo_vector.svg.avif'
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { createContext, useEffect, useState } from 'react';

export const sideBarecontext = createContext();

export default function Sidebar({ children }) {
  const [Expended, setExpended] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  

  useEffect(() => {
    function checkIfMobile() {
      setIsMobile(window.innerWidth < 768);
    }
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  function ToggleExpended() {
    setExpended(!Expended);
  }

  return (
    <div className={`fixed left-0 top-0 h-screen z-50 transition-all duration-300 ${Expended ? 'w-64' : 'w-16'}`}>
      <aside className="h-full">
        <nav className="h-full flex flex-col bg-white border-r border-gray-200 shadow-lg">
          {/* Header Section */}
          <div className="p-4 flex justify-between items-center border-b border-gray-100">
            <img 
              src={logo} 
              alt="Target Corporation Logo" 
              className={`object-contain transition-all duration-300 ${Expended ? "w-10" : "w-0 opacity-0"}`}
            />
            <button 
              onClick={ToggleExpended} 
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              {Expended ? 
                <FirstPageIcon className="text-gray-600" /> :
                <LastPageIcon className="text-gray-600" />
              }
            </button>
          </div>
          
          {/* Navigation Items */}
          <sideBarecontext.Provider value={{Expended}}>
            <ul className="flex-1 px-2 py-4 overflow-y-auto">
              {children}
            </ul>
          </sideBarecontext.Provider>
         
          {/* Footer Section - No sliding animation */}
          <div className="p-3 border-t border-gray-100 mt-auto">
            <div className="flex items-center justify-between">
              <div className={`text-xs text-gray-500 truncate transition-all duration-300 ${Expended ? "max-w-[80%] opacity-100" : "max-w-0 opacity-0"}`}>
                muntahamirza890@gmail.com
              </div>
              <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                <MoreVertIcon fontSize="small" className="text-gray-600" />
              </button>
            </div>
            <div className="text-xs text-gray-500 text-center mt-1">
              © 2025
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
}