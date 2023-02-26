import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children : React.ReactNode;
    setSelectedPage : (value : SelectedPage )=> void
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink href="#contactus" onClick={()=> setSelectedPage(SelectedPage.ContactUs)} className="rounded-lg cursor-pointer bg-secondary-100 text-blue-500 px-10 py-2 hover:bg-blue-500 hover:text-blue-20 " >{children}</AnchorLink>
  )
}

export default ActionButton