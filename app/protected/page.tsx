import {UserButton} from "@clerk/nextjs";


export default async function ProtectedPage(){
    return (
        <div className={"flex items-center justify-center flex-col h-1/2"}>
            <p>Protected Route</p>
            <div className={"h-10"}><UserButton /></div>
        </div>
    )
}