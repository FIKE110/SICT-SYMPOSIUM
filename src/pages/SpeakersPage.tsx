
import SpeakerImage from '../component/SpeakerImage'
import RegisterBanner from '../component/RegisterBanner'
import Header from '../component/Header'
import Footer from '../component/Footer'

const SpeakersPage = () => {
  return (
    <>
    <Header />
    <div className='m-0 text-[#2F5858]'>
        <section className='p-4'>
            <div className='p-5 w-[100%] bg-red flex justify-between gap-[100px] h-fit'>
                <div className='w-[37%]'>
                    <h2 className='text-3xl text-start font-medium leading-10'>
                    Speakers are the ForeFront Of Food Technology</h2>
                </div>
                <div className='w-[48%] text-left'>
                    <p>
                    Our Esteemed Speakers are visionaries in their respective fields <br />each bringing a wealth of knowlegde ans expertise 
                    to the symposium stage 
                    </p></div>
            </div>
            <div className='grid grid-cols-3 '>
                <SpeakerImage />
                <SpeakerImage />
                <SpeakerImage />
            </div>
                <div>
                    <hr/>
                    <p style={
                        {position:'relative',
                        width:'200px',
                        left:'60px',
                        bottom:12,backgroundColor:'white'}}>Meet Our Special Guests</p>
                </div>
        </section>
        <section>
        <div className='grid grid-cols-3'>
                <SpeakerImage />
                <SpeakerImage />
            </div>
        </section>
        <section>
            <RegisterBanner />
            <Footer />
        </section>
    </div>
    </>
  )
}

export default SpeakersPage