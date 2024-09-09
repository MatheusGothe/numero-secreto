import { AllUsersType } from '@/types'
import Image from 'next/image'
import React from 'react'

type Props = {
    data: AllUsersType
}

const Chat : React.FC<Props> = ({data}) => {
  return (
    <div
  className="flex items-center justify-between py-4 px-6 bg-white border-t
    border-gray-400 hover:bg-gray-200 opacity-80 overflow-hidden cursor-pointer"
>
  <div className="flex justify-start w-full items-center gap-4">
    <Image
      src={data?.image}
      alt="user"
      width={50}
      height={50}
      className="rounded-full"
    />
    <div className="flex flex-col justify-start w-full">
      <div className="flex items-center justify-between">
        <p>{data?.firstName}</p>
        <p className="text-gray-500 text-sm text-right">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
      </div>
      <p className="text-gray-500 truncate text-xs w-full">This is the message body</p>
    </div>
  </div>
</div>

  );
}

export default Chat