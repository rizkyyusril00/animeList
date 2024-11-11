import Image from "next/image";
import Header from "../../../components/Header/header";
import {authUserSession} from "../../../libs/auth-libs";


export default async function DashboardPage() {
    const user = await authUserSession();
    return (
        <>
            <div className="pt-[70px]">
                <div className="p-4 flex flex-col gap-4">
                    <Header title={`Dashboard`} visibility={false} />
                    <span className="text-acent">{`Welcome ${user?.name}`}</span>
                    <Image src={user?.image} alt="..." width={200} height={200} className="rounded-md"/>
                </div>
            </div>
        </>
    )
}