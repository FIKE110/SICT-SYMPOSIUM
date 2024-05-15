import FutoMap from '../assets/Google-earth-satellite-imagery-showing-the-study-area-and-sampling-sites-locations-for.jpg'
import Header from '../component/Header'
import RegisterBanner from '../component/RegisterBanner'
import Footer from '../component/Footer'
import SupportCard from '../component/SupportCard'

const ContactPage = () => {
  return (
    <>
    <Header />
    <section className='flex justify-between py-20 px-4'>
        <h2 className='text-3xl text-bold text-left p-4'>We're Here To Answer<br /> Your Questions</h2>
        <article className='text-md w-[420px] mr-[30px] py-4 text-left'>
            Want to learn more about our event or how to bet involeed?
            We're here to help! feel Free to reach out out to us using our contact information provided below.
        </article>
    </section>
    <section className='flex justify-between'>
        <div>
        <SupportCard />
        <hr />
        <SupportCard />  
        </div>
       <div className='p-4'>
        <img src={FutoMap} className='w-[500px]'/>
        <div>
            <p>Event details</p>
        </div>
       </div>
    </section>
    <RegisterBanner />
    <Footer />
    </>
  )
}

export default ContactPage