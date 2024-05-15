import Header from '../component/Header'
import Footer from '../component/Footer'
import RegisterBanner from '../component/RegisterBanner'
import TimeCard from '../component/TimeCard'
import IconCard from '../component/IconCard'



const events=[
  {name:'Registration and Welcome Reception',time:'9:00 AM - 9:30 AM'},
  {name:'Final Year And Postgraduate Student Workshop'},
  {name:'Welcome Address'},
  {name:'First Spreaker Session'},
  {name:'Lunch Break' ,time:'12:00 AM - 1:00 AM'},
  {name:'Second Speaker Session'},
  {name:'Side Attraction'},
  {name:'Third Speaker Session'},
  {name:'Question and Answer Session'},
  {name:'Quiz and Closing Ceremony',time:'4:30 AM - 5:00 AM'}
]

const SchedulePage = () => {
  return (
    <>
    <Header />
    <section className='m-[80px]'>
        <h1 className='text-5xl mb-[40px]'>Program Schedule</h1>
        <div className='flex justify-center content-center'> 
          <IconCard />
        </div>
    </section>
    <section>
      <ul className='p-8 mb-20 bg-white rounded-[30px]'>
       {
        events.map((item,index)=><li><TimeCard name={item.name} key={index} id={index+1} time={item.time}/></li>)
       }
      </ul>
    </section>
    <RegisterBanner />
    <Footer />
    </>
  )
}

export default SchedulePage