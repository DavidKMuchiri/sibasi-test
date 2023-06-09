import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () =>{
    const [isClicked, setIsClicked] = useState(true);

    return(
        <div className='menuContainer'>
            <div className='menu'>
                <h1>Sibasi</h1>
                <div className={isClicked ? 'menuLinks': "menuLinks visibleNav"}>
                    <p><Link className='link' to='/homepage'>Home page</Link></p>
                    <p><Link className='link' to='/cardpage'>Card page</Link></p>
                </div>
                <div className='mobileIcons' onClick={() => {setIsClicked(!isClicked)}}>
                    {isClicked ? <svg fill="#ffffff" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" stroke="#ffffff" strokeWidth="0.00024000000000000003">

                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

                    <g id="SVGRepo_iconCarrier">

                    <path d="M20,11H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,11,20,11z M4,8h16c0.6,0,1-0.4,1-1s-0.4-1-1-1H4C3.4,6,3,6.4,3,7S3.4,8,4,8z M20,16H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,16,20,16z"/>

                    </g>

                    </svg> : <svg fill="#ffffff" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">

                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

                    <g id="SVGRepo_iconCarrier"> <title>Hide</title> <path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"/> </g>

                    </svg>}
                </div>
            </div>
        </div>
    )
}

export default Menu;