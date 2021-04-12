import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NavLink = () => {
    const router = useRouter();

    function getNavClass(pageName) {
        let navClass = 'inline-block px-4 py-1 mr-1.5 rounded-lg';
        if (router.pathname === pageName) {
            navClass = `${navClass} text-white bg-blue-500`;
        } else {
            navClass = `${navClass} text-blue-500 bg-white`;
        }
        return navClass;
    }


    return (
        <div>
            <Link href='/'>
                <a className={getNavClass('/')}>Widgets</a>
            </Link>
            <Link href='/about'>
                <a className={getNavClass('/about')}>About</a>
            </Link>
        </div>

    )
};

export default NavLink;
