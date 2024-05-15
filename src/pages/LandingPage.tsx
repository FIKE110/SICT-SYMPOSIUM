import Header from '../component/Header'
import Footer from '../component/Footer'
import ConfrenceImage from '../assets/confrence1.jpg'
import TimeIcon from '../assets/icons8-time-80.png'
import CoinIcon from '../assets/icons8-coin-80.png'
import ChatIcon from '../assets/icons8-chat-50.png'
import SpeakerImage from '../component/SpeakerImage'
import Speaker2Image from '../assets/WhatsApp Image 2024-05-15 at 14.48.36.jpeg'
import RegisterButton from '../component/RegisterButton'
import RegisterBanner from '../component/RegisterBanner'
import ArrowIcon2 from '../assets/icons8-right-arrow-50.png'
import IconCard from '../component/IconCard'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
    <Header />
    <section className='flex flex-col justify-center items-center gap-[30px] mt-[55px]'>
        <div>
            <IconCard />
        </div>
        <h2 className='text-4xl w-[600px]'>The Future of Foods With AI ,Robotics , And Vertical Farming </h2>
        <article className='text-lg'>
            Join us at the 3rd Symposium of SICT as we delve into the exciting realm
            of food sustainabilty.
        </article>
        
        <div>
            <Link to='/register'>
                <button className='flex w-max p-3 gap-2 bg-[#2F5858] text-[#B4E7B0]'>Register for free
            <img className='w-7' src={ArrowIcon2} /></button>
            </Link>
        </div>
        <img className='w-[80%]  rounded-md' src={ConfrenceImage}/>
    </section>
    <section>
        <h2 className='text-3xl pt-[100px] pb-16'>What SICT Synmosium Offers</h2>
        <div className='flex p-[25px] gap-x-[100px]'>
            <div className='flex-1 flex flex-col justify-center items-center'>
                <img src={ChatIcon}/>
                <p className='text-lg p-4'>Network and Connect</p>
                <p className='text-sm p-x-3'>Our Synposium provides ample opportunities for networking , allowing you to forge
                    valuable connections and exchange ideas
                </p>
            </div>
            <div className='flex-1 flex flex-col justify-center items-center'>
            <img src={CoinIcon}/>
                <p className='text-lg p-4'>Gain Knowledge</p>
                <p className='text-sm p-x-3' >Gain unrestricted access to invaluable insights,knowlegde , an expertise at the SICT 3rd
                    Symposium -all completely free of charge
                </p>
            </div>
            <div className='flex-1 flex flex-col justify-center items-center'>
                <img src={TimeIcon}/>
                <p className='text-lg p-4'>Maximizing your time</p>
                <p className='text-sm p-x-3'>With a carefully cruated agenda and a focus on efficientcy , we ensure that you get the most out
                    of your tme with us
                </p>
            </div>
        </div>
    </section>
    <section id='#about'>
        <h2 className='text-3xl pt-[70px] pb-[50px]'>Meet Our Guest Speakers</h2>
        <div className='flex'>
            <SpeakerImage />
            <SpeakerImage />
            <SpeakerImage />
        </div>
    </section>
    <section  className='flex pt-[100px]'>
        <article className='w-[50%] p-[40px] pt-[100px]'>
            <h2 className='text-2xl text-left px-6'>The Future of Food:AI, Robotics , and Vertical Farming</h2>
            <p className='px-6 py-8 text-sm text-left'>The SICT 3rd Synposium invites youto embark on a journey into the future of subtanance . From the 
                integration of AI to the advent of robotics in agriculture  we dive deep into the technological 
                frontiers reshaping how we cultivate and consume food
            </p>
            <div className='w-max px-6'>
               <RegisterButton /> 
            </div>
        </article>
        <div className='p-12 w-[600px] rounded-md'>
            <img src={Speaker2Image}/>
        </div>
    </section>
    <section className='flex pt-[100px]'>
       <div className='p-12 w-[600px] rounded-md'>
            <img src={Speaker2Image}/>
        </div>
        <article className='w-[50%] p-[40px] pt-[100px]'>
            <h2 className='text-2xl text-left px-6'>Let's Explore the cutting edge innovation and trends</h2>
            <p className='px-6 py-8 text-sm text-left'>
                You 're invited to join us at the SICT 3rd Symposium , where we will dive into the lasest food
                Technology and innovation. held at the prestigiuos hall of excellence , Futo , on May 20 2024. This 
                event guarantees an enriching experience . Expect vibrant discussions , hands-on workshops , and valuable
                networking 
            </p>
            <RegisterButton />
        </article>
    </section>
    <RegisterBanner />
    <Footer />
    </>
  )
}

export default LandingPage