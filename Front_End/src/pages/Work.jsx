import { useLoaderData, useParams } from "react-router-dom";
import { NotFound } from "./NotFound";

export function Work(){

    const workList = useLoaderData()
    const {id} = useParams()
    const work = workList.find((item) => item.id === id)

    if(!work){
        return <NotFound/>
    }

    return(
        <p>Work number + {id}</p>
    )
}