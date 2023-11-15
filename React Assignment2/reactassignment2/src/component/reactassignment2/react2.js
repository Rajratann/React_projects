import{useEffect,useState} from "react";
import axios from 'axios';


function Userlist(){
    

    const [users,setUsers]=useState([]);
    const getData=async()=>{
        try {
            const resp = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
            console.log(resp.data);
            setUsers(resp.data);
        } catch (error) {
            console.log(error);
            
        }
    }


    useEffect(()=>{
        getData(); //function call when component loads for the very first time
    },[]);

    return (<div>
        <h1 className="thead"> API Data List</h1>
        <table className="tdata">
            <thead>
                <tr>
                    <th>Id</th><th>Syambol</th><th>Name</th><th>Current Price</th><th>Mrkt Cap</th><th>Mrkt Cap Rank</th> <th>Fully Diluted Valuation</th>
                    <th>Total Volume</th> <th>High 24h</th> <th>Low 24h</th> <th>price_change_24h</th><th>price_change_%_24h</th> <th>Mrkt_cap_change_24h</th>
                    <th>mrkt_cap_change_%_24h</th> <th>Circulating_supply</th> <th>total_supply</th> <th>max_supply</th> <th>ath</th> <th>ath_change_%</th>
                    <th>ath_date</th> <th>atl</th> <th>atl_change_%</th> <th>atl_date</th> <th>last_updated</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item)=>{
                        return (<tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.symbol}</td>
                            <td>{item.name}</td>
                            {/* <td>{item.image}</td> */}
                            <td>{item.current_price}</td>
                            <td>{item.market_cap}</td>
                            <td>{item.market_cap_rank}</td>
                            <td>{item.fully_diluted_valuation}</td>
                            <td>{item.total_volume}</td>
                            <td>{item.high_24h}</td>
                            <td>{item.low_24h}</td>
                            <td>{item.price_change_24h}</td>
                            <td>{item.price_change_percentage_24h}</td>
                            <td>{item.market_cap_change_24h}</td>
                            <td>{item.market_cap_change_percentage_24h}</td>
                            <td>{item.circulating_supply}</td>
                            <td>{item.total_supply}</td>
                            <td>{item.max_supply}</td>
                            <td>{item.ath}</td>
                            <td>{item.ath_change_percentage}</td>
                            <td>{item.ath_date}</td>
                            <td>{item.atl}</td>
                            <td>{item.atl_change_percentage}</td>
                            <td>{item.atl_date}</td>
                            <td>{item.last_updated}</td>
                        
                       
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </div>)
    
}
export default Userlist;