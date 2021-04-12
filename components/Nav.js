import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Nav = () => {
    const router = useRouter();
    let page1;
    let page2;
    
    if (router.pathname === '/') {
        page1 = <Link  href="/"><a className="inline-block px-4 py-1 mr-1.5 rounded-lg text-white bg-blue-500">Widgets</a></Link>
        page2 = <Link  href="/about"><a className="inline-block px-4 py-1 mr-1.5 rounded-lg text-blue-500 bg-gray-100">About</a></Link>
    }
    else {
        page1 = <Link  href="/"><a className="inline-block px-4 py-1 mr-1.5 rounded-lg text-blue-500 bg-gray-100">Widgets</a></Link>
        page2 = <Link  href="/about"><a className="inline-block px-4 py-1 mr-1.5 rounded-lg text-white bg-blue-500">About</a></Link>
    }

    return (
        <div>
            <h1 className="text-4xl font-bold undefined">Daytech Dashboard</h1>
            <div className="my-5">
                {page1}
                {page2}
            </div>
        </div>
    )
};

export default Nav;