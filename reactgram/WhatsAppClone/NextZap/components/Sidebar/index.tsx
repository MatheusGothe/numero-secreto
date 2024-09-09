import React from 'react'

// Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import ChatOutlined from '@mui/icons-material/ChatOutlined';
import { IconButton } from '@mui/material';
import { auth } from '@/lib';


const SidebarHeader : React.FC = () => {

   const isLoggedIn = auth?.currentUser;


   console.log("login",auth.currentUser)
  return (
    <div className='flex justify-evenly items-center px-2 py-4 h-20
    border-r border-r-solid border-r-gray-200 border-b border-b-solid border-b-gray-200
    bg-white z-10'>
         <div className='pl-2'>
            <AccountCircleIcon className='roundend-full cursor-pointer hover:opacity-70 ' />
         </div>
         <IconButton>
            <GroupsOutlinedIcon />
         </IconButton>
         <IconButton>
            <DataUsageIcon />
         </IconButton>
         <IconButton>
            <ChatOutlined />
         </IconButton>
    </div>
  )
}

export default SidebarHeader 