import { useState } from 'react'

import burguerMenu from '../assets/images/icon-menu.svg'
import closeMenu from '../assets/images/icon-menu-close.svg'

export const NavBar = () => {

    const [menuClicked, setMenuClicked] = useState(true)
    const handleClick = () => {
        setMenuClicked(prevState => !prevState)
    }


    return (
        <>
            <ul className= {`${menuClicked ? 'hidden' : ''} absolute bg-white w-[260px] h-full top-0 right-0 p-[24px] sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center sm:p-0 sm:h-auto sm:relative`}>
                <li className= {`${menuClicked ? 'hidden' : ''} cursor-pointer flex place-content-end sm:hidden`}>
                    <img className='w-8 h-8 mb-[87px]' src={closeMenu} alt="Tachita" onClick={handleClick}/>
                </li>
                <li className='mb-8 sm:mb-0'>
                    <a href="#">Home</a>
                </li>
                <li className='mb-8 sm:mb-0'>
                    <a href="#">Popular</a>
                </li>
                <li className='mb-8 sm:mb-0'>
                    <a href="#">Trending</a>
                </li>
                <li className='mb-8 sm:mb-0'>
                    <a href="#">Categories</a>
                </li>
            </ul>
            <img className={`${menuClicked ? '' : 'hidden'}w-10 h-4 cursor-pointer sm:hidden`} src={burguerMenu} alt="Menu burguer" onClick={handleClick}/>
        </>
    )
}

