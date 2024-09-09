import Archived from '@/components/Archived'
import Chat from '@/components/Chat'
import Search from '@/components/Search'
import SidebarHeader from '@/components/Sidebar'
import { AllUsers, AllUsersType } from '@/types'
import React from 'react'

type Props = {
  data: AllUsers
}

const ChatSizebar : React.FC<Props> = ({ data }) => {
  const {users} = data

  return (
    <div className="w-full h-full">
      <SidebarHeader />
      <Search />
      <Archived />
      {/* Chats */}
      {!!users &&
        users.map((user: AllUsersType) =>
          user.image ? <Chat key={user.id} data={user} /> : null
        )}

      <p className="text-center text-sm p2">
        Your personal messages are end-to-end-encrypted
      </p>
    </div>
  );
}

export default ChatSizebar