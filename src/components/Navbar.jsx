import React,{useEffect} from "react"
import {AiOutlineMenu}from "react-icons/ai"
import {BsChatLeft} from "react-icons/bs"
import {FiShoppingCart} from "react-icons/fi"
import {RiNotification3Line} from "react-icons/ri"
import {MdKeyboardArrowDown} from "react-icons/md"
import {TooltipComponent} from "@syncfusion/ej2-react-popups"
import {useStateContext} from "../context/ContextProvider.js"
const Navbutton=({title,customfunc,icon,color,dotcolor})=>(
  <TooltipComponent content={title} position="BottomCenter" >
  <button type="button" onClick={customfunc}style={{color}}
  
  
  className="relative text-xl hover:bg-lighy-gray p-3 rounded-full">
  <span style={{background:dotcolor}}
  className="absolute inline-flex h-2 w-2 rounded-full right-2 top-2" />
  {icon}
  
  </button>
  </TooltipComponent>
)
 const Navbar=()=>{

  const {activeMenu,setActive,handleClick,isClicked,setIsClicked,screenSize,setScreenSize,currentColor} =useStateContext()
  
  
  useEffect(()=>{
    const handleSize=()=>{
      setScreenSize(window.innerWidth)
    }
    window.addEventListener("resize",handleSize)
    handleSize()
    return ()=> window.removeEventListener(
      
      "resize",handleSize
      )
  },[setScreenSize])
  
  useEffect(()=>{
    if(screenSize<=900){
      setActive(false)
    }
    else{
      setActive(false)
    }
  },[screenSize,setActive])
  
  return(
    <div className="flex justify-between p-2 md:mx-6 relative">
    <Navbutton title="Menu" customfunc={()=>
   setActive((preActiveMenu)=>
   !preActiveMenu
   )
   
   
    }
    color={currentColor}
    icon={<AiOutlineMenu />}/>
    
    <div className="flex">
    <Navbutton title="Cart"
    customfunc={()=>handleClick("cart")}
    color={currentColor}
    icon={<BsChatLeft />} />
     <Navbutton title="Chat"
    customfunc={()=>handleClick("chat")}
    color={currentColor}
    icon={<BsChatLeft />} />
     <Navbutton title="Notifications"
    customfunc={()=>handleClick("notification")}
    color={currentColor}
    dotcolor="#039C07"
    icon={<RiNotification3Line />} />
    <TooltipComponent content="Profile" position="BottomCenter">
    <div className="flex gap-2 items-center p-1 cursor-pointer rounded-lg hover:bg-light-gray" onClick={()=>handleClick("userProfile")}>
    <p>
    <span className="text-14 text-gray-400">
   
   Hi </span>{"  "}
   <span className="text-gray-400 font-bold ml-1 text-14">Ahmed</span>
    </p>
    <MdKeyboardArrowDown className="text-gray-400 text-14" />
    </div>
    </TooltipComponent>
    </div>
    </div>
    
    )
}
export default Navbar