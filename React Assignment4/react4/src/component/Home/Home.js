import {useState, useEffect} from "react";
import {useParams, Link} from 'react-router-dom';


const url = 'https://jsonplaceholder.typicode.com/posts/'
const imgUrl = 'https://picsum.photos/200?random='

export default function Details () {

    let params = useParams();
    // console.log(params.id)

    const [data, setData] = useState([]);

    const getData = () => {
        fetch(`${url}/${params.id}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setData(data)
        })
    }

    useEffect(() => {
        getData();
    },[])


     
    return(
        <>
        <div >
            
                <div>
                        <img src={`${imgUrl}${data.id}`} alt="Loading..."/>
                </div>
                <div >
                        <p className="img-id-details">User Id : {data.id}</p>
                        <p className="img-title-details">Title : {data.title}</p>
                        <p className="img-body-details">Body : {data.body}</p>
                        <Link to='/home'><button className="btn-details">Go Back To Home Page</button></Link>
                </div>
           
        </div>
        </>
    )
}