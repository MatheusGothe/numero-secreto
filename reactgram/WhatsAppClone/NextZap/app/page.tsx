import Image from "next/image";
import BackgroundImage from '../public//whatsapp-bg.png'
import ChatSizebar from "@/modules/ChatSizebar";
import { AllUsers } from "@/types";
import { auth } from "@/lib";

const getUsers = async() => {

    const staticData = await fetch('https://dummyjson.com/users',{
      cache: 'force-cache',
    })

    const dinamicData = await fetch('https://dummyjson.com/users',{
      cache: 'no-store',
    })

    const revalidatedData = await fetch('https://dummyjson.com/users',{
      next: {revalidate: 10}
    })

    const userData: AllUsers = await dinamicData.json()

    return userData

}

export default async function Home() {

  const fetchedUsers = await getUsers();

  console.log("currentuser",auth.currentUser)

  return (
    <main className="flex h-screen overflow-hidden" >
      <div className="bg-white-500 w-2/5 overflow-y-auto">
      <ChatSizebar data={fetchedUsers} /> 
      </div>
      <div
        className="w-full overflow-y-auto flex items-center justify-center
    bg-blue-50"
      >
      <Image
        src={BackgroundImage}
        alt="Next.js Logo"
        width={3000}
        height={3000}
      />
      </div>
    </main>
  );
}
