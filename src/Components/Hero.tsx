import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import steak1 from "../assets/steak1.webp";
import steak2 from "../assets/steak2.webp";
import steak3 from "../assets/steak3.webp";
import interior from "../assets/interior.webp";

import "../styles/hero.css";


const slides = [
  {
    image: steak1,
    title: "EMBER",
    subtitle: "Premium Steakhouse"
  },
  {
    image: steak2,
    title: "CRAFTED",
    subtitle: "Perfect Cuts. Perfect Fire."
  },
  {
    image: steak3,
    title: "FLAVOUR",
    subtitle: "Experience Every Bite"
  },
  {
    image: interior,
    title: "RESERVE",
    subtitle: "Your Table Awaits"
  }
];


export default function Hero(){

  const [active,setActive] = useState(0);


  useEffect(()=>{

    const handleScroll = () => {

      const scroll =
      window.scrollY /
      (document.body.scrollHeight - window.innerHeight);


      if(scroll < 0.25){
        setActive(0);
      }
      else if(scroll < 0.5){
        setActive(1);
      }
      else if(scroll < 0.75){
        setActive(2);
      }
      else{
        setActive(3);
      }

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () =>
    window.removeEventListener(
      "scroll",
      handleScroll
    );


  },[]);


return (

<section className="hero">

<div className="hero-sticky">


<motion.img
key={slides[active].image}
src={slides[active].image}
className="hero-image"

initial={{
opacity:0,
scale:1.1
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:1
}}
/>


<div className="hero-overlay"/>


<nav className="navbar">

<div>
EMBER
</div>

<div className="links">
Menu
About
Reserve
</div>

</nav>


<div className="hero-content">

<motion.h1
key={slides[active].title}

initial={{
opacity:0,
y:50
}}

animate={{
opacity:1,
y:0
}}

>
{slides[active].title}
</motion.h1>


<motion.p
key={slides[active].subtitle}

initial={{
opacity:0
}}

animate={{
opacity:1
}}

>
{slides[active].subtitle}
</motion.p>


<button>
Reserve Table
</button>


</div>


<div className="scroll">
Scroll ↓
</div>


</div>

</section>

)

  }
