import Manequin from "../assets/manequin.jpg"


const Section1 = () => {
    return (
    <div className="">
        <div className=" border-solid border-2 border-indigo-600 bg-[#F2F0F1] flex ">

            <div className="lg:w-9/12">
                <h2 className="mt-20 text-8xl">FIND CLOTHES</h2>
                <h2 className="ml-2 text-8xl">THAT MATCHES</h2>
                <h2 className="text-8xl">YOUR STYLE</h2>
                <p className=  "w-6/12 my-5 text-[#999999]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <input placeholder="Shop Now" className="my-5 text-center bg-black  text-white  py-4 px-4 rounded-full" type="text" />

            </div>

            <div className="border-indigo-600 relative">
                <img className="border-solid border-2 w-xl " src={Manequin} alt="" />

            </div>



        </div >

         
    </div>
    )
  }
  
  export default Section1