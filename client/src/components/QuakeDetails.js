
const QuakeDetails = ({selectedQuake}) => {
  
if (!selectedQuake) return null

  return (
    <>
    {selectedQuake.title}
    </>
  )
}

export default QuakeDetails;