import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
type Props = {
  isTopOfPage : boolean;
  selectedPage : SelectedPage;
  setSelectedPage : (value : SelectedPage) => void;
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const [isMenuToggled , setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-blue-500 drop-shadow text-white"
  return (
    <nav>
      <div className={` ${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-32`} >
            {/* Left Side */}
              <p className={`${flexBetween} md:visible invisible gap-2 text-2xl font-semibold`}>CREATIVE <p>EDGE</p></p>
              {/* Right Side */}
           {isAboveMediumScreens ?  <div className={`${flexBetween} w-full`} >
                {/* Inner left */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link page= "Home" selectedPage={selectedPage} setSelectedPage = {setSelectedPage} /> 
                  <Link page="Benefits" selectedPage={selectedPage} setSelectedPage = {setSelectedPage} />
                  <Link page="We Teach" selectedPage={selectedPage} setSelectedPage = {setSelectedPage} />
                  <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage = {setSelectedPage} />
                </div>
                {/* Inner right */}
                <div className={`${flexBetween}`} >
                  <ActionButton setSelectedPage = {setSelectedPage} >Become a Member</ActionButton>
                </div>
              </div> : <button className="rounded-full bg-blue-500 p-2" onClick={()=>setIsMenuToggled(!isMenuToggled)} >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button> }   
          
          </div>
        </div>
      </div>
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-blue-500 drop-shadow-xl" >
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12" >
            <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl text-white font-semibold ">
                  <Link page= "HOME" selectedPage={selectedPage} setSelectedPage = {setSelectedPage} /> 
                  <Link page="BENEFITS" selectedPage={selectedPage} setSelectedPage = {setSelectedPage} />
                  <Link page="WE TEACH" selectedPage={selectedPage} setSelectedPage = {setSelectedPage} />
                  <Link page="CONTACT US" selectedPage={selectedPage} setSelectedPage = {setSelectedPage} />
                </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar