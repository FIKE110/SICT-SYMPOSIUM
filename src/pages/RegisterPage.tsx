import Header from '../component/Header'
import Footer from '../component/Footer'
import RegisterBanner from '../component/RegisterBanner'
import IconCard from '../component/IconCard'

const RegisterPage = () => {
  return (
    <>
    <Header />
    <section className='flex justify-between pt-[20px] mb-20 content-center'>
        <div className='w-[400px] p-8 text-left'>
            <h1 className='text-3xl py-6'>Register and Secure Your Spot Today !</h1>
            <p className='mb-[10px]'>Dont miss the chance to be part of shaping the future of foog,reserve your spot now and embark on the  journey of discovery
                ,colloboration and inspiration.
            </p>
            <IconCard />
        </div>
        <div className='pt-[30px]'>
            <form className='bg-white p-8'>
                <div>
                    <div className='flex gap-6 pb-5'>
                        <input className='px-4 py-2 border-2 rounded-md outline-0' type='text' placeholder='Name'/>
                        <input className='px-4 py-2 border-2 outline-0 rounded-md' type='text' placeholder='Department'/>
                    </div>
                    <div className='flex gap-6 pb-5'>
                        <input className='px-4 py-2 border-2 outline-0 rounded-md' type='email' placeholder='Email'/>
                        <input className='px-4 py-2 border-2 outline-0 rounded-md' type='tel' placeholder='Phone'/>
                    </div>
                </div>
                <textarea 
                placeholder='How did you hear about us (optional)'
                className='border-2 resize-none rounded-md w-[100%] h-[160px] outline-0 p-5 mb-5'></textarea>
                <input type='submit' className='w-[100%] bg-[#2F4858] p-4 text-[#CAFDC6]' value='Register Now'/>
                <div className='bg-[#f8f8f3] mt-6 rounded-md'>
                    <p className='text-sm p-4'>You should get a ticket in your mail within 24 hours</p>
                </div>
            </form>
        </div>
    </section>
    <RegisterBanner />
    <Footer />
    </>
  )
}

export default RegisterPage