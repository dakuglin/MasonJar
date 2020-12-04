import React from 'react'

import "../index.css"


const ShakerAnim = (props) => {
  const [wobble, setWobble] = React.useState(0)
  function handleClick(){
    setWobble(1);
    props.chooseTheme();
  
  }
  return (
    <>
    <center>
    <svg height="300px" className="shake" alt="jar" onClick={() => handleClick() }onAnimationEnd={() => setWobble(0)} wobble={wobble} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.08 373.45"><defs></defs><path d="M195.84,279.3c-2.94-3.78-5.37-7.39-1.48-11.7a2.89,2.89,0,0,0,.51-1.89c-.28-6.58-.31-13.19-1-19.73-1-8.91,1.44-12.49,10.09-14.73,29.23-7.56,59.14-7.18,88.92-7.24s59.67,1.08,89.09,6.89a52.17,52.17,0,0,1,5.87,1.2c4.69,1.53,7.75,4.37,7.49,9.82a138.81,138.81,0,0,0-.31,15c.27,4.37,1.74,8.67,2,13,.17,3.06-.82,6.19-1.29,9.28h-1.61c1,1.49,2.61,2.88,2.88,4.49.34,2,.3,4.76-.85,6.08-6.24,7.12-6.3,13.51-.46,21.22a168.66,168.66,0,0,1,14,20.92c2,3.72,2.46,8.64,2.57,13.05,1.28,50.68.52,101.33-2.62,151.94-.74,12-2,23.91-2.57,35.88-.56,12.72-6.77,22.89-14.19,32.36-15.06,19.2-34.24,31.26-59.36,31.94-9.83.26-19.67.48-29.5.31-17-.29-34.12.31-50.94-1.63-30.59-3.55-54.06-18.53-66.8-47.58C184,543,182.18,537,182.14,531.37c-.33-59.82-.2-119.65-.35-179.48,0-11,5.24-20.08,9.78-29.48,2.45-5.08,5.08-10.1,7.21-15.32s1.7-9.83-2.53-14.23C190.88,287.27,191.07,285.5,195.84,279.3Zm192,18.38c-2.67.29-4.63.41-6.57.73-9,1.49-18,3.92-27.1,4.4-47.62,2.5-95.27,4.11-142.73-2.58-4.09-.57-6.1.87-7.69,4.37-2.87,6.34-6.07,12.53-9.1,18.8-4.31,9-9.82,17.41-9.8,28,.12,59.66.05,119.32.33,179a41.88,41.88,0,0,0,3.45,16c11.47,26.39,32.21,42.39,60.26,45.38,26.75,2.84,53.91,1.92,80.9,2.34,25.53.41,45.4-10.84,60.69-30.77,7.83-10.19,13.33-21.18,13.77-34.58.62-18.81,2.77-37.58,3.21-56.38,1-41.65,1.21-83.3,1.92-124.95.2-12.17-5-21.89-12.82-30.51C391.79,311.58,387.51,306.2,387.87,297.68ZM208.18,285.61c20.39,6.27,41.61,6.68,62.58,9.21L206,292.09l-.28,1.79c7.7,1.6,15.33,3.95,23.11,4.68a696.79,696.79,0,0,0,127.23.08c9.89-.88,19.63-3.55,29.45-5.4l-.26-1.51-73.19,4.13-.11-1.68c20.45-.9,41-1.05,60.67-8.15C317.78,291,263,290.2,208.18,285.61ZM302.24,280,205,272.9C226.07,280.49,291.92,285.29,302.24,280Zm.59-8-.11,1.31a16.32,16.32,0,0,0,3,.85A313,313,0,0,0,370,273.7c1.4-.16,2.73-1,4.09-1.55l-.36-2.28C350.06,269.85,326.44,270.94,302.83,272Zm-6-6-81.58-4.3-.06,1.34C242.32,267.59,269.41,272.4,296.87,266Zm23.76-3.79.15,2.26c21.29,2.47,42.45,3.28,63-5.06l-.09-1.34ZM267.48,247.7l-.24-2.42H233.81a24.8,24.8,0,0,0,9.31,1.91c3,.11,7.37-1.42,8.71,0,3.21,3.45,5.6-2,8.6.28C262,248.65,265.08,247.7,267.48,247.7Zm70.92-2.37v1.93c4.34,0,8.68.07,13,0,4.1-.08,8.18-.33,12.27-.51l-.06-1.4Z" transform="translate(-181.79 -224.01)" /><path className="cls-1" d="M208.18,285.61C263,290.2,317.78,291,372.63,286c-19.66,7.1-40.22,7.25-60.67,8.15l.11,1.68,73.19-4.13.26,1.51c-9.82,1.85-19.56,4.52-29.45,5.4a696.79,696.79,0,0,1-127.23-.08c-7.78-.73-15.41-3.08-23.11-4.68l.28-1.79,64.75,2.73C249.79,292.29,228.57,291.88,208.18,285.61Z" transform="translate(-181.79 -224.01)" /><path className="cls-1" d="M302.24,280c-10.32,5.3-76.17.5-97.29-7.09Z" transform="translate(-181.79 -224.01)" /><path className="cls-1" d="M302.83,272c23.61-1,47.23-2.12,70.87-2.1l.36,2.28c-1.36.53-2.69,1.39-4.09,1.55a313,313,0,0,1-64.26.43,16.32,16.32,0,0,1-3-.85Z" transform="translate(-181.79 -224.01)" /><path className="cls-1" d="M296.87,266c-27.46,6.44-54.55,1.63-81.64-3l.06-1.34Z" transform="translate(-181.79 -224.01)" /><path className="cls-1" d="M320.63,262.17l63-4.14.09,1.34c-20.53,8.34-41.69,7.53-63,5.06Z" transform="translate(-181.79 -224.01)" /><path className="cls-1" d="M267.48,247.7c-2.4,0-5.53,1-7.05-.21-3-2.3-5.39,3.17-8.6-.28-1.34-1.44-5.72.09-8.71,0a24.8,24.8,0,0,1-9.31-1.91h33.43Z" transform="translate(-181.79 -224.01)" /><path className="cls-1" d="M338.4,245.33h25.21l.06,1.4c-4.09.18-8.17.43-12.27.51-4.33.09-8.67,0-13,0Z" transform="translate(-181.79 -224.01)" /><path d="M214.68,385.93c6.72,0,13.33.19,19.93-.12a8.13,8.13,0,0,0,5.33-2.56c29.53-35.86,88.6-35.83,118.22.06a8.24,8.24,0,0,0,5.34,2.51c5.63.32,11.28.11,17.68.11v56c-5.45,0-11.54-.19-17.6.12a8.25,8.25,0,0,0-5.44,2.46c-16.5,20-38.23,27.61-63.35,26.52-22.14-1-41-9.23-55.19-26.89-1-1.28-3.34-2-5.09-2.11-6.47-.25-13-.1-19.83-.1Z" transform="translate(-181.79 -224.01)" /><text id="jar-text" x="60" y="200" fill="red">{props.theme}</text><path d="M353.05,557.52c-1.74.11-3.49.27-5.24.3-24.33.37-48.68.19-73,1.29-13.58.62-27.08,3.21-40.57,5.25-3.16.47-6.11,2.31-9.16,3.53l-.26,1.81c3.41,1.13,6.74,2.87,10.23,3.29,17.69,2.13,35.43,3.9,53.15,5.83a17.52,17.52,0,0,1,7.21,2.09c-2.35.12-4.71.44-7.05.33-20.67-1-41.16-3.22-61.29-8.22a7.78,7.78,0,0,1-3.24-1.15c-1.4-1.25-3.47-2.92-3.4-4.33s2.16-3.55,3.75-4c8.29-2.34,16.6-4.79,25.07-6.21C282,551.84,315,553.08,348,555.05a44.87,44.87,0,0,1,5.24.91Z" transform="translate(-181.79 -224.01)" /> </svg>
    </center>
    </>
  )
}
export default ShakerAnim

