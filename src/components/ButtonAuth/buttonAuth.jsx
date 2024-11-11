import Link from "next/link";
import {authUserSession} from "../../libs/auth-libs";
import Image from "next/image";


export default async function ButtonAuth(){
    const user = await authUserSession();
    const labelButton = user ? "Sign Out" : "Sign In";
    const linkButton = user ? "/api/auth/signout" : "/api/auth/signin";

    return(
        <>
            <div className="flex items-center gap-2">
                <button className="btn-auth p-2 w-[100px]">
                    <Link href={linkButton} className="text-secondary w-full">{labelButton}</Link>
                </button>
                {user 
                ? 
                <Link href="/user/dashboard" className="btn-auth w-[38px] h-[38px]">
                    <Image src={user?.image} alt="..." width={38} height={38} className="rounded-full w-full object-cover"/> 
                </Link>
                : null
                }
            </div>
        </>
    )
}