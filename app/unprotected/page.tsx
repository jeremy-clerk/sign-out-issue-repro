import {UserButton} from "@clerk/nextjs";


export default async function UnprotectedPage(){
    return (
        <div className={"flex items-center justify-center flex-col h-1/2"}>
            <p>Unprotected Route</p>
            <div className={"h-10"}><UserButton /></div>
        </div>
    )
}