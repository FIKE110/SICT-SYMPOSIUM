
import ProfileImage from '../assets/profile.webp'


const SpeakerImage = () => {
  return (
    <div className='mt-[20px] p-5' >
        <div className='w-120 h-120'>
            <img className="w-[350px] h-auto" style={{borderRadius:14}} src={ProfileImage}/>
            <div className="relative bottom-[65px] text-white text-left pl-7">
              <p>Clara Montes</p>
              <p>Founder & Ceo</p>
            </div>
        </div>
    </div>
  )
}

export default SpeakerImage