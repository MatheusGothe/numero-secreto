import Image from "next/image";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LoginButton from "@/components/Login/LoginButton";
export default function Login() {


  return (
    <main className="flex h-screen items-center justify-center bg-white ">
      <div className="flex flex-col items-center gap-10" >
        <WhatsAppIcon
          className="bg-white"
          sx={{ fontSize: 80 }}
        />
        <LoginButton />
      </div>
    </main>
  );
}
