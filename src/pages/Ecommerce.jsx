import React from "react"
import {BsCurrencyDollar} from "react-icons/bs"
import {GoPrimitiveDot} from "react-icons/go"
import {Stacked,Pie,SparkLine,Button} from "../components"
import {earningData,SparkLineAreaData,ecomPieChartData} from "../data/dummy.js"
import {useStateContext} from "../context/ContextProvider.js"
const Ecommerce=()=>{
  const {currentColor}=useStateContext()
  return(
  <div className="mt-12">
  <div className="flex flex-wrap lg:flex-nowrap justify-center">
  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full p-8 lg:w-80 pt-9 m-3 
  bg-hero-pattern bg-no-repeat bg-cover bg-center ">
  <div className="flex items-center justify-between">
  <div>
  <p className="text-gray-400 font-bold">Earnings</p>
  <p className="text-2xl">$65789</p>
  
  </div>
  </div>
  <div className="mt-6">
  <Button 
  color="white"
  bgColor={currentColor}
  text="Download"
  borderRadius="10px"
  size="md" />
  </div>
  </div>        
  <div className="flex m-3 justify-center flex-wrap gap-1 items-center">
  {earningData.map((i)=>(
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 pt-9 p-4 rounded-xl">
    <button type="button" style={{
      color:i.iconColor,
      backgroundColor:i.iconBg,
      
      
    }} className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl " >
    {i.icon}
    </button>
    
    <p className="mt-3">
    <span className="text-lg font-semibold ">
    {i.amount}
    
    
    </span>
    <span>
    {i.percentage}
    </span>
    </p>
    <span className="text-sm text-gray-400mt-1 ">
    {i.title}
    </span>
    </div>
  ))}
  </div>
  </div>
  <div className="flex flex-wrap justify-center gap-10 ">
  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780 ">
  
  <div className="flex justify-between">
  <p className="font-semibold text-xl">View Reveneiu</p>
  <div className="flex items-center gap-4">
  <p className="flex items-center gap-2
text-gray-600 hover:drop-shadow-xl">
  <span><GoPrimitiveDot /></span>
  <span> Expense  </span>
  </p>
    <p className="flex items-center gap-2
text-green-600 hover:drop-shadow-xl">
  <span><GoPrimitiveDot /></span>
  <span> Budget </span>
  </p>
  </div>
  </div>
  <div className="mt-10 flex gap-10 flex-wrap justify-center">
  <div className="border-r-2 border-color m-4 pr-10">
  <div>
  <p>
  <span className="text-3xl font-semibold">$98656</span>
  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">23 percent</span>
  </p>      
  <p className="text-gray-400 mt-1">Budget</p>
  </div>
  <div className="mt-8">
  <p>
  <span className="text-3xl font-semibold">$98656</span>
  </p>
  <p className="text-gray-400 mt-1">Expense</p>
  </div>
  <div className="mt-5">
  
  <SparkLine 
 
  id="line-sparkline"
  type="Line"
  height="80px"
  width="250px"
  data={SparkLineAreaData}
  color={currentColor} />
  
  </div>
  
  <div className="mt-10">
  <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
  
  </div>
    
  </div>
  <div>
              <Stacked width="320px" height="360px" color={currentColor}/>    
            </div>     
  </div>
  </div>
  </div>
  </div>
    )   
}
export default Ecommerce