
import './App.css'
import Sidebar from './components/Sidebar'
import Sidebardata from './components/Sidebardata'
import HomeIcon from '@mui/icons-material/Home';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TaskIcon from '@mui/icons-material/Task';
import FlagIcon from '@mui/icons-material/Flag';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
function App() {


  return (
    <>
   <div className='flex' >

< Sidebar >
<Sidebardata icon={<HomeIcon size={20} />} text="Home" alert />
        <Sidebardata icon={< Grid3x3Icon size={20} />} text="Dashboard" active />
        <Sidebardata icon={<AnalyticsIcon size={20} />} text="Analytics" />
        <Sidebardata icon={<SupportAgentIcon size={20} />} text="Customers" alert />
        <Sidebardata icon={< AccountTreeIcon size={20} />} text="Projects" />
        <Sidebardata icon={<DocumentScannerIcon size={20} />} text="Documents" />
        <Sidebardata icon={<CalendarMonthIcon size={20} />} text="Calendar" />
        <Sidebardata icon={<TaskIcon size={20} />} text="Tasks" alert />
        <Sidebardata icon={<FlagIcon  size={20} />} text="Reporting" />
        <Sidebardata icon={<MessageIcon size={20} />} text="Messages" alert />
        <Sidebardata icon={<NotificationsNoneIcon  size={20} />} text="Notifications" />
</Sidebar>

   </div>
    </>
  )
}

export default App
