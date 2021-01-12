const History = ({quakeInfo}) => {
    const quakeInfoArray = quakeInfo.map(info => info.funFacts)
    return (
        <>
        {quakeInfoArray}
        </>
    )
}

export default History;