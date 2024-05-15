import RegisterButton from "./RegisterButton"

const RegisterBanner = () => {
  return (
    <div className='w-[100%] h-[170px] bg-[#2F4858] rounded-lg flex'>
        <div className='flex justify-center flex-col flex-grow-1'>
            <p className='text-white p-8 w-[75%] text-left' >
                Join Us and Seize the Opportunities that await at the forefront of innovation
                </p>
        </div>
        <div className="flex ml-[250px] justify-center items-center">
           <RegisterButton />
        </div>
           
    </div>
  )
}

export default RegisterBanner