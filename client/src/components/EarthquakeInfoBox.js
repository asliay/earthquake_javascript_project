
const EarthquakeInfoBox = () => {
    

    return(
        // ADDED className:
        <div className = "quake-info"> 
        <p className="header2">What is an earthquake?</p>
        <p>An earthquake is the shaking of the Earth's surface, usually due to movement of the planet's huge tectonic plates. When these plates move and grind against each other along fault lines they sometimes get stuck. Pressure builds up and once released, seismic waves are sent through the Earth.The point at which the energy is released is called the focus (or hypocenter). The position on the Earth's surface directly above the focus is the epicentre. Seismic waves spread out from the focus, being felt most strongly at the epicentre. Most damage caused by a severe earthquake will happen close to this point.</p>
        
        <p className="header2">How are earthquakes detected?</p>
        <p>A seismometer is a scientific instrument that responds to motions in the ground caused by earthquakes, volcanic eruptions and explosions. They are usually combined with recording equipment and a timing device to form a seismograph. The output of a seismograph - traditionally recorded on paper, now recorded digitally - is a seismogram. The data from these devices is used to locate and study earthquakes and other seismic events.</p>
  
        <p className="header2">How are earthquakes measured?</p>
        <p>The severity of an earthquake can be measured in several ways, but the two most common scales used by seismologists are magnitude and intensity:<br/>
        <br/>
        The most famous measure of magnitude is the Richter Scale, developed in 1935.<br/>
        The Richter scale works like a seismogram, measuring the overall strength of an earthquake, which may or may not cause perceptible shaking.<br/> 
        A magnitude 5 earthquake releases as much energy as the Hiroshima atomic bomb - the equivalen of 15 kilotons of TNT.<br/>
        The magnitude of an earthquake is related to the length of the fault on which it occurs. The largest earthquake (by magnitude) every recorded was a magnitude 9.5 on May 22nd 1960 in Chile. While a magnitude 10 earthquake is theoretically possible, no fault long enough to generate one is known to exist, and would need to extend around most of the planet.<br/>
        <br/>
        Several intensity scales exist and are used in different parts of the world. They categorise the intensity of ground shaking at a given location based on the observed effects, such as the degree to which people are harmed, and the severity of damage to  structures or natural features. One example is the Modified Mercalli intesity scale (MMI), developed from Giuseppe Mercalli's original scale of 1902. </p>
        <p className="header2">How often do they happen?</p>
        <p>The U.S. Geological Survey estimates that several million earthquakes occur in the world each year, a huge proportion of which are below 1 magnitude. Many are undetected because they occur in remote  areas or have such a low magnitude that they aren't felt. Estimations suggest around 150 earthquakes of magnitude 6 and higher occur each year, though  magnitude 7 and above are much rarer still.<br/>
        </p>
            </div>
    )
}

export default EarthquakeInfoBox;