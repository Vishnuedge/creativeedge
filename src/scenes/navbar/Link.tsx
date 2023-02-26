import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page : string;
    selectedPage : SelectedPage;
    setSelectedPage : (value : SelectedPage) => void;
}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink onClick = { ()=> setSelectedPage(lowerCasePage) } className={`${ selectedPage === lowerCasePage  ? "text-third-100" : ""}
    trasition duration-500 hover:text-third-100 text-[16px] md:text-lg
    `} href={`#${lowerCasePage}`} > 
        {page}
    </AnchorLink>
    )
}
export default Link