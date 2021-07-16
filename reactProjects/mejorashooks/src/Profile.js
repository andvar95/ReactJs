export default function Profile({data}){

    return(
        <div className="container">
            <div>
                <img alt ="avatar" src={data.image}></img>
            </div>
            
            <div className="center bd-bottom">
               <div>Name: {data.name}</div>
                </div>

            <div className="center bd-bottom">
                <div>Status: {data.status}</div>

            </div>

            <div className="center bd-bottom">
               <div>Gender: {data.gender}</div> 

            </div>

            <div className="center bd-bottom">
                <div>Specie: {data.species}</div>

            </div>


        </div>
    )

}
