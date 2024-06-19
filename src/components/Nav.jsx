

import { SlBasket } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";

const Nav = () => {
    return (
      <div className=" ">
         <p className="bg-black text-white text-center">Sign up and get 20% off to your first order. Sign Up Now</p>

        <div className="flex justify-center">

            <h2  className="text-3xl font-bold my-4 ">SHOP.CO</h2>    
            <ul className="flex gap-10 my-6 ml-10 mr-10">
                <li>Shop</li>
                <li>On Sale</li>
                <li>New Arrivals</li>
                <li>Brands</li>
            </ul>
                
                    <form>   
                        <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative w-48">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="search" className=" font-[''] block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for products..." required />
                        </div>
                    </form>


                <div className="flex my-2 gap-3 my-5 ">

                <SlBasket />
                <FaRegUserCircle />
                </div>

                
        </div>

        <div>
               
        </div>    



        

      </div>
    )
  }
  
  export default Nav