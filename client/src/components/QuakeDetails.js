
const QuakeDetails = ({selectedQuake}) => {
  
if (!selectedQuake) return null

  return (
    <>
    <p className='header3'>{selectedQuake.title}</p><br/>

    <p>Location:{selectedQuake.location}</p><br/>
    <p>Magnitude: {selectedQuake.mag}</p><br/>
    <p>Date: {new Date(selectedQuake.time).toLocaleDateString()}</p>
    <p>Casualties: {selectedQuake.casualties}</p>
    <p>Damage Cost: {selectedQuake.damageCost}</p>
    <p>{selectedQuake.desc.paragraph1}</p>
    <p>{selectedQuake.desc.paragraph2}</p>
    </>
  )
}

export default QuakeDetails;