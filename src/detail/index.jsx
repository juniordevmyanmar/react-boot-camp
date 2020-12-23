import { useParams } from "react-router";

const Detail =function(){
    let { lat,lng } = useParams();
    return <>{lat}{lng}</>
}

export default Detail