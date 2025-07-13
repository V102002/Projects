import React from 'react'
import { navLink } from '../../constants'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CSSPlugin from 'gsap/CSSPlugin'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger,CSSPlugin);
const Navbar = () => {
    useGSAP(()=>{
        const navTween=gsap.timeline({
            scrollTrigger:{
                trigger:'nav',
                start:'bottom top' //When the bottom of the nav hits the top of viewport

            }
        });

        navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
        backgroundColor: '#00000050',
        css: { 'backdrop-filter': 'blur(10px)' },
        duration: 1,
        ease: 'power1.inOut'
        });
    })
  return (
    <nav>
        <div>
            <a href="#home" className='flex items-center gap-2'>
                <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="logo" />
                <p>Velvet Pour</p>
            </a>
            <ul>
                {navLink.map((link)=>(
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
