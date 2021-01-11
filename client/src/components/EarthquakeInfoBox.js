import EarthquakeInfo from "./EarthquakeInfo"

const EarthquakeInfoBox = ({quakeInfo}) => {
    const quakeInfoArray = quakeInfo.map(info => {
        return (
            <EarthquakeInfo key={info._id} info={info} />
        )
    })

    return(
        <>
            <p>This is the info box, hooray!</p>
            {quakeInfoArray}
            <p>Stuff should be between here.</p>
        </>
    )
}

export default EarthquakeInfoBox;