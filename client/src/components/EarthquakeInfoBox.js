
const EarthquakeInfoBox = ({quakeInfo}) => {
    const quakeInfoArray = quakeInfo.map(info => info.generalInfo)

    return(
        <>
            <p>This is the info box, hooray!</p>
            {quakeInfoArray}
            <p>Stuff should be between here.</p>
        </>
    )
}

export default EarthquakeInfoBox;