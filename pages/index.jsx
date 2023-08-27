import React, { useRef, useEffect, useContext } from 'react'
import { Footer, PageHead } from '../components'
import gsap from 'gsap'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { getLocale } from '../localization'
import NavMobile from '../components/base/_navMobile';
import ImgReveal from '../components/all/_imgReveal';
import { GlobalContext } from '../context/globalcontext';

export default function Home() {

  const stateManagement = useContext(GlobalContext)
  const locale = getLocale()

  useEffect(() => {
    AOS.init();
    console.log(stateManagement)
  }, []);

  return (
    <>
      <PageHead title={locale.home.metaTitle} description={locale.home.metaDescription} />

      <NavMobile />

      <ImgReveal />

      <main className=''>
        <p>Main</p>
      </main>

      <Footer />
    </>
  )
}
