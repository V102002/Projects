import { useRef, useState } from "react"
import Button from './Button';
const Hero = () => {
  // Keep track of what video is playing
  const [CurrentIndex,setCurrentIndex] = useState(1);
  // Make Sure the user has Clicked anything
  const[hasClicked,setHasClicked]= useState(false);
  // Loading on Clicked
  const [isLoading, setisLoading] = useState(true);
  // Number of Videos loaded
  const [loadedVideo, setLoadedVideo]=useState(0);

  const totalVideos=3;
  // Want to target a DOM element
  const nextVideoRef= useRef(null);

  const handleVideoLoad=()=>{
    setLoadedVideo((prev) => prev+1);
  }

  const UpcomingVideoIndex= (CurrentIndex%totalVideos)+1;

  const handleMinVideoCLick = () =>{
    // On click what should the function do
    setHasClicked(true);
    setCurrentIndex(UpcomingVideoIndex);
  }

  const getVideoSrc=(index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div onClick={handleMinVideoCLick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
              <video 
                ref={nextVideoRef}
                src={getVideoSrc(UpcomingVideoIndex)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(CurrentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />

          <video 
            src={getVideoSrc(CurrentIndex=== totalVideos-1? 1: CurrentIndex)}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>a</b>ming
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">redefi<b>n</b>e</h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">Enter the MetaGame Layer <br/>Unleash The Play Economy</p>

            <Button/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
