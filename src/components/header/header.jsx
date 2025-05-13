import { LINKS } from "../../static/index.js";

import SiteLogo from "../../assets/images/MohidSite-logo.svg";
import SearchIcon from "../../assets/images/nav-search.svg";
import UserIcon from "../../assets/images/nav-user.svg";
import CartIcon from "../../assets/images/nav-cart.svg";
import MenuIcon from "../../assets/images/nav-menu.svg";

const Header = () => {
    return (
        <header className='site_header absolute top-0 left-0 w-full'>
            <div className="container">
                <nav className='header_nav h-[60px] lg:h-[70px] flex items-center justify-between'>
                    <div className='header_nav_logo flex items-center gap-[1px]'>
                        <img className='w-[27px]' src={SiteLogo} alt="Site Logo" />
                        <span className='font-Poppins500 text-[16px] leading-[100%] text-white'>Mohid</span>
                    </div>
                    <ul className='header_nav_list hidden md:flex items-center gap-[27px]'>
                        {
                            LINKS?.map(product => {
                                return <li className='header_nav_item' key={product.id}><a href={product.path}><span className='text'>{product.title}</span></a></li>;
                            })
                        }
                    </ul>
                    <div className='header_nav_actions flex items-center gap-[22px]'>
                        <div className='header_nav_action hidden sm:flex items-center gap-[16px]'>
                            <img src={SearchIcon} alt="Search Icon" />
                            <img src={UserIcon} alt="User Icon" />
                            <img src={CartIcon} alt="Cart Icon" />
                        </div>
                        <div className='header_nav_menu md:hidden'>
                            <img src={MenuIcon} alt="Menu Icon" />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;