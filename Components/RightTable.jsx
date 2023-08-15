

const RightTable = ({postData}) => {

   const locationList = postData.slice().map((spot) => spot.location).filter((location, index, self) => self.indexOf(location)===index)

   const RowMaker = () => {
        
   return locationList.sort().map((location, index) => (
    <tr key={index}>
      <td>{location}</td>
      <td>{index}</td>
    </tr>
   ))
    }

    return (

         <div className="card">
            <h3 className="display-6">Posts by Location</h3>
            <table className="table table-hover sm" >
                <thead>
                    <tr>
                        <th scope="col">Locations</th>
                        <th scope="col">Posts</th>
                    </tr>
                </thead>
                <tbody>
                 <th scope="row"></th>
                    <RowMaker/>
                </tbody>
            </table>
            </div>
        


    )




}




export default RightTable;