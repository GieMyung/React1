import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import Projects from '../components/Projects'
import {BrowserRouter as Router} from 'react-router-dom'
import HeroSection from '../components/Hero'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/Content/Data'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <Content {...homeObjOne}/>
      <Content {...homeObjTwo}/>
      <Projects />
      <Content {...homeObjThree}/>
    </>
  );
};
export default Home