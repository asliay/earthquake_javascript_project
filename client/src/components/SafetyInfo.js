
const SafetyInfo = ({quakeInfo}) => {
  const quakeInfoArray = quakeInfo.map(info => info.safetyInfo)
  return (
    <>
    <p>HEY QUAKERS</p>
    {quakeInfoArray}
    </>
  )
}

export default SafetyInfo;