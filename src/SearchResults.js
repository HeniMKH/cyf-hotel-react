import moment from "moment";
import React,{useState} from "react";

const SearchResults = (props) => {
  const [customClass,setCustomClass]= useState("");
  const [selectedRow,setSelectedRow]= useState(null);

  function classHandler(rowId){
  setSelectedRow(rowId)
  setCustomClass(oldCustomClass=>(oldCustomClass ? "" : "table-primary")) 
   
  
  }
    return (
      <table className= "table table-bordered table-hover table-responsive">
        <thead className="thead-dark">
          <tr className="text-center">
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Sure Name</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in</th>
            <th scope="col">Check out</th>
            <th scope="col">total nights</th>
          </tr>
        </thead>
        <tbody>
            {props.results.map ((value)  => {
                let checkIn = moment(value.checkInDate, "YYYY-MM-DD")
                let checkOut = moment(value.checkOutDate , "YYYY-MM-DD")
                let rowClass = selectedRow === value.id ? customClass : "";

                return (
                    <tr key ={value.id}className={`text-center ${rowClass}` } onClick={()=> classHandler(value.id)}>
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                        <td>{value.firstName}</td>
                        <td>{value.surname}</td>
                        <td>{value.email}</td>
                        <td>{value.roomId}</td>
                        <td>{value.checkInDate}</td>
                        <td>{value.checkOutDate}</td>
                        <td>{moment(checkOut).diff(checkIn, "days")}</td>
                    </tr>
                   
                )
            })}
        
        
        </tbody>
      </table>
    );
  };
  export default SearchResults ;