
const QuakeDetails = ({selectedQuake}) => {
  
if (!selectedQuake) return null
// conditional rendering for in case certain values aren't present for some quakes in the seeds file


const conditionalFactsRender = (key) => {
  if (key){
    return key
  }else{
    return "Unknown"
  }
}
const conditionalTextRender = (key) => {
  if (key){
    return key
  }
}


  return (
    <>
    <p className='header3'>{selectedQuake.title}</p>

    <p>Location:{selectedQuake.location}</p>
    <p>Magnitude: {selectedQuake.mag}</p>
    <p>Date: {new Date(selectedQuake.time).toLocaleDateString()}</p>
    <p>Casualties: {conditionalFactsRender(selectedQuake.casualties)}</p>
    <p>Damage Cost: {conditionalFactsRender(selectedQuake.damageCost)}</p>
    <p>{conditionalTextRender(selectedQuake.desc.paragraph1)}</p>
    <p>{conditionalTextRender(selectedQuake.desc.paragraph2)}</p>
    </>
  )
}

export default QuakeDetails;