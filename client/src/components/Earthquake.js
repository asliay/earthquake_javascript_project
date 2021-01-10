
const Earthquake = ({quake})=>{
    return (
        <>
        <h3>{quake.properties.title}</h3>
        <p>{quake.properties.mag}</p>
        </>

    )

}

export default Earthquake;