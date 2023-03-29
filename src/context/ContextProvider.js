import React,{createContext,useContext,useState} from "react"
const StateContext=createContext()
const initialState={
  chat:false,
  cart:false,
  userProfile:false,
  notification:false
}
export const ContextProvider=({children})=>{
  const [activeMenu,setActive]=useState(true)
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [isClicked,setIsClicked]=useState(initialState)
  const [screenSize,setScreenSize]=useState(undefined)
  const handleClick=(clicked)=>{
    setIsClicked({...initialState,[clicked]:true
 
    })
 
  }
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
    setThemeSettings(false)
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
      setThemeSettings(false)
  };
  return(
    <StateContext.Provider value={{
      
      
      activeMenu,
     setActive,
     isClicked,
     setIsClicked,
     handleClick,
     screenSize,
     setScreenSize,
setCurrentColor, setCurrentMode, currentColor, currentMode,themeSettings, setThemeSettings
    }}>
    {children}
    
    </StateContext.Provider>
    
    )
}
export const useStateContext=()=>
  useContext(StateContext)
