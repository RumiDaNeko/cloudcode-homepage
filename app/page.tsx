"use client"
import Image from "next/image";
import StaggeredMenu from '@/components/StaggeredMenu'
import Beams from '@/components/Beams';
import SpotlightCard from '@/components/SpotlightCard';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SplitText from "@/components/SplitText";
import DecryptedText from '@/components/DecryptedText';
import GradualBlur from '@/components/GradualBlur';
import CurvedLoop from '@/components/CurvedLoop';
import TextType from '@/components/TextType';
import BlurText  from '@/components/BlurText';
import FlowingMenu  from '@/components/FlowingMenu';
import Shuffle from '@/components/Shuffle'

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'Service', ariaLabel: 'Access the Billing Page', link: '/services' },
  { label: 'Billing', ariaLabel: 'Access the Billing Page', link: 'https://billing.cloudcode.site' },
  { label: 'Panel', ariaLabel: 'Access the panel', link: 'https://panel.cloudcode.site' },
];

const socialItems = [
  { label: 'Discord', link: 'https://discord.gg/U7aFkZWk74' },
  { label: 'Free Hosting', link: 'https://void.cloudcode.site' },
  { label: 'Privacy', link: '/privacy' },
  { label: 'TOS', link: '/tos' },
  { label: 'SLA', link: '/sla' },
];

const demoItems = [
  {  text: 'Bot hosting', image: 'https://media.cloudcode.site/OIP%20(1).jpg' },
  {  text: 'Minecraft', image: 'https://media.harumi.io.vn/wp2586787.jpg' },
  {  text: 'Databases', image: 'https://media.harumi.io.vn/OIP%20(1).webp' },
  {  text: 'Voice Servers', image: 'https://media.cloudcode.site/SR_23.02.013_WorldRadioDay_feature.webp' }
];

export default function Home() {
  const routers = useRouter()
  const [mwidth, setWidth] = useState(1024); // default safe value

useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
  }, []);
  const isSmall = mwidth < 900;
  const toosmall = mwidth < 450
  return (
    <div className="scrollbar-hide">
       <div
    id="blur"
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 9998,
      pointerEvents: 'none',
      backdropFilter: 'none', // initial blur
      WebkitBackdropFilter: 'none',
      transition: 'backdrop-filter 0.5s ease, -webkit-backdrop-filter 0.5s ease'
    }}
  ></div>
      <div id="menu" style={{ position: "fixed", top: 0, right: 0, width: "100%", height: '100dvh', background: "transparent", zIndex: 9999, pointerEvents: "none" }}>
  <StaggeredMenu
    className={"neko"}
    position="right"
    items={menuItems}
    socialItems={socialItems}
    displaySocials={true}
    displayItemNumbering={true}
    menuButtonColor="#fff"
    openMenuButtonColor="#000"
    changeMenuColorOnOpen={true}
    colors={['#eb9494ff', '#ec8686']}
    logoUrl="https://media.harumi.io.vn/cloudcodelogo.png"
    accentColor="#ec8686"
        onMenuOpen={() => {
      document.getElementById("menu").style.pointerEvents = "auto"
      document.getElementById("blur").style.backdropFilter = "blur(5px)";
      document.getElementById("blur").style.WebkitBackdropFilter = "blur(5px)";
    }}
    onMenuClose={() => {
      document.getElementById("menu").style.pointerEvents = "none"
      document.getElementById("blur").style.backdropFilter = "none";  
      document.getElementById("blur").style.WebkitBackdropFilter = "none";
    }}
  />
</div>
  <section id="hero1" style={{ width: '100%', height: "100dvh", background: "#111"}}>
<div style={{  width: '100%', height: "100%", position: 'absolute', backdropFilter: "blur(5px)", WebkitBackdropFilter: "blur(5px)" }}>
  <Beams
    beamWidth={3}
    beamHeight={30}
    beamNumber={20}
    lightColor="#ec8686"
    speed={2}
    noiseIntensity={1.75}
    scale={0.2}
    rotation={30}
  />
  <GradualBlur
    target="parent"
    position="bottom"
    height="6rem"
    strength={2}
    divCount={10}
    curve="bezier"
    exponential={true}
    opacity={1}
  />
</div>
<div style={{ width: '100%', height: "100%",position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: "center"}}>
 

  
<SpotlightCard 
spotlightColor="#ec8686"
  className="bg-transparent border-transparent"
>
  <div className="text-2xl" style={{width: "100%", height: "100%", color:"white", display:"flex",flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
   <SplitText
  text="Cloudcode"
  className="text-5xl font-semibold text-center"
  delay={100}
  duration={2}
  ease="elastic.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={() => {console.log("Hey there!")}}/>
  <DecryptedText
text="A premium hosting service that cover all your needs"
speed={60}
maxIterations={1}
characters="ABCD1234!?"
className="revealed text-center"
parentClassName="mt-5 all-letters"
encryptedClassName="encrypted text-center"
animateOn="view"
sequential={true}
/>
  </div>
</SpotlightCard>
</div>
</section>
  <section id="hero2" style={{ position: "relative", width: '100%', height: isSmall ? toosmall ? "105dvh" : "105dvh" : "105dvh", background: "#000"}}>
<GradualBlur
    target="parent"
    position="top"
    height="6rem"
    strength={2}
    divCount={10}
    curve="bezier"
    exponential={true}
    opacity={1}
    animated="scroll"
  />

  <CurvedLoop 
  marqueeText="About ✦ Us ✦ About ✦ Us ✦ About ✦ Us ✦ About ✦ Us ✦ About ✦ Us ✦ About ✦ Us ✦ About ✦ Us ✦ About ✦ Us ✦ "
  speed={1
  }
  curveAmount={-50
  }
  direction="right"
  interactive={true}
  className={ isSmall ? toosmall ? " overflow-y-visible text-15xl" : " overflow-y-visible text-10xl" : " text-5xl"}
  />

  <div style={{ width: '100%',  height: "65dvh", position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: "center"}}>
<SpotlightCard 
spotlightColor="#000"
  className="bg-transparent border-transparent w-4/5"
>
  <div className="text-2xl" style={{width: "100%",height: "100%", color:"white", display:"flex",flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
  <TextType 
  text={[`CloudCode believes every idea deserves space to grow.
Born from one developer’s dream, we aim to make hosting simple, fair, and accessible.
We’re here so creators and small teams can build with confidence — without the stress of high costs or complex setups.`, `CloudCode began as a solo project built with care.
Our mission is to offer reliable hosting that’s easy to understand and easy to afford.
We want to give developers and businesses a smooth, supportive place to create — no barriers attached.`, `Big ideas don’t need big budgets.
CloudCode was created to help anyone build freely, with tools that feel simple, honest, and welcoming.
Whether you’re starting small or scaling up, we’re here to make hosting empowering, not overwhelming.`]}
  typingSpeed={10}
  deletingSpeed={10}
  pauseDuration={10000}
  showCursor={true}
  cursorCharacter="|"
  className={ isSmall ? toosmall ? "  text-xl" : "  text-3xl" : "  text-3xl"}
/>
  </div>
</SpotlightCard>
</div>
</section>
<section id="hero3" style={{ position: "relative", width: '100%', height: isSmall ? toosmall ? "105dvh" : "105dvh" : "105dvh", background: "#000", display: "flex", flexDirection: "column", justifyContent:"center", alignItems:'center'}}>
<Shuffle
  text="What we specialize in"
  shuffleDirection="right"
  duration={0.35}
  animationMode="evenodd"
  shuffleTimes={1}
  ease="power3.out"
  stagger={0.03}
  threshold={0.1}
  triggerOnce={true}
  triggerOnHover={true}
  respectReducedMotion={true}
  className={isSmall == true  ? "text-xl mb-10 text-center text-white" :"text-5xl text-center text-white"}
/>


<div className="mt-10" style={{ width: '100%', height: "75%", position: 'relative' }}>
  <FlowingMenu items={demoItems} />
</div>
</section>
<section id="hero4" style={{ position: "relative", width: '100%', minHeight: isSmall == true  ? "185dvh" : "105dvh", height: "auto", background: "#000", display: "flex", flexDirection: "column", justifyContent:"center", alignItems:'center'}}>

  <SplitText
  text="What our user say"
  className= {isSmall == true  ? "text-3xl font-semibold text-center text-white" :"text-8xl mb-10 font-semibold text-center text-white"}
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={() =>{console.log("hi")}}
/>
  <div className={isSmall == true  ? " " : "mt-10"} style={{ height: "65%", width: "75%", display: "flex", flexDirection: isSmall == true  ? toosmall ? "column" : "column" : "row", gap:50, justifyContent:"space-evenly", alignItems:'center'}}>
  <div className="cardbox" style={{background: '#000', height: isSmall == true  ? "1550px" : "40dvh", width: "100%", display: "flex", flexDirection: isSmall == true  ? toosmall ? "column" : "column" : "row", gap:50, justifyContent:"space-evenly", alignItems:'center'}}>

<SpotlightCard className="card-content w-[350px]" spotlightColor="#ec8686">
    
  <div  className="card-content" style={{height: "auto", width: "auto", color: "#fff", display: "flex", flexDirection:"column",alignItems: "center", justifyContent: "space-evenly"}}>
    
    <div style={{display:"flex", flexDirection:"column",alignItems: "center"}}>
<TextType 
  text={[`“Minecraft server at cloudcode bring a really good gaming experience for me, even with 2gb ram and 1 core, mine minecraft server still run fine with 5 players with geyser and floodgate”`]}
  typingSpeed={10}
  deletingSpeed={10}
  pauseDuration={10000}
  showCursor={true}
  cursorCharacter="|"
  loop={false}
  />
     <img className="mt-10 rounded-[200px]" style={{width:"75px", height:"75px"}} src="https://media.cloudcode.site/7d57a5b58a5acfcbf9241e236794e5af.webp"></img>
      <BlurText text="Cụt (penguin.txt)" delay={150} animateBy="words" direction="top" className="text-2xl mb-1"/>
      <BlurText text="User" delay={150} animateBy="words" direction="bottom" className="text-m mb-1 text-gray-400"/>
    </div>
    
  </div>
  
</SpotlightCard>
  <SpotlightCard className="card-content w-[350px]" spotlightColor="#ec8686">
    
  <div  className="card-content" style={{height: "auto", width: "auto", color: "#fff", display: "flex", flexDirection:"column",alignItems: "center", justifyContent: "space-evenly"}}>
    
    <div style={{display:"flex", flexDirection:"column",alignItems: "center"}}>
<TextType 
  text={[`“As a partner of Cloudcode, I always appreciate all aspects of service quality. For me, choosing Cloudcode is the right decision. The server operates stably, the price is extremely reasonable, the support team is dedicated and thoughtful. we are comitted to continue using Cloudcode's service for a long time.”`]}
  typingSpeed={10}
  deletingSpeed={10}
  pauseDuration={10000}
  showCursor={true}
  cursorCharacter="|"
  loop={false}
  />
     <img className="mt-10 rounded-[200px]" style={{width:"75px", height:"75px"}} src="https://media.cloudcode.site/d6afeb810a1b14dda32e3929e1b3b3a7.webp"></img>
      <BlurText text="Antony" delay={150} animateBy="words" direction="top" className="text-2xl mb-1"/>
      <BlurText text="
Co-Founder @ Lormas Studio" delay={150} animateBy="words" direction="bottom" className="text-m mb-1 text-gray-400"/>
    </div>
    
  </div>
</SpotlightCard>

<SpotlightCard className="card-content w-[350px]" spotlightColor="#ec8686">
    
  <div  className="card-content" style={{height: "auto", width: "auto", color: "#fff", display: "flex", flexDirection:"column",alignItems: "center", justifyContent: "space-evenly"}}>
    
    <div style={{display:"flex", flexDirection:"column",alignItems: "center"}}>
<TextType 
  text={[`“ I want to say that this is an excellent stable hosting service. It seems to me that only here you can write to the owner every day and get an answer :)”`]}
  typingSpeed={10}
  deletingSpeed={10}
  pauseDuration={10000}
  showCursor={true}
  cursorCharacter="|"
  loop={false}
  />
     <img className="mt-10 rounded-[200px]" style={{width:"75px", height:"75px"}} src="https://media.cloudcode.site/da380a354ddf53f777cb8daddafad9da.webp"></img>
      <BlurText text="Asta" delay={150} animateBy="words" direction="top" className="text-2xl mb-1"/>
      <BlurText text="User" delay={150} animateBy="words" direction="bottom" className="text-m mb-1 text-gray-400"/>
    </div>
    
  </div>
</SpotlightCard>
 
</div>
</div>
</section>
<section id="footer" style={{ width: '100%', height: isSmall? toosmall? "125dvh" : "75dvh" : "35dvh", background: "#1a1919ff", display: "flex", flexDirection: isSmall? "column" : "row", justifyContent:"center", alignItems:'center'}}>
  <div style={{ width: '100%', height: "35dvh", display: "flex", flexDirection: "column", justifyContent:"center", alignItems:'center'}}>
<img className={isSmall? "mt-10  rounded-[200px]" : "mt-10 mr-25 rounded-[200px]"} style={{width:"50px", height:"50px"}} src="https://media.harumi.io.vn/cloudcode-bg.png"></img>
<BlurText text="Cloudcode" delay={150} animateBy="words" direction="top" className="text-3xl mt-2 text-white"/>
<BlurText text="© 2025 Cloudcode" delay={150} animateBy="words" direction="top" className="text-1xl mt-1 mr-2 text-gray-400"/>
  </div>
 <div className={isSmall? toosmall? "mt-10" : "mt-5 mb-10" : "ml-10 "} style={{ width: '15vw', height: "35dvh", display: "flex", flexDirection: "column", justifyContent:"center", alignItems:'center'}}>
<BlurText text="Links" delay={150} animateBy="words" direction="top" className={isSmall? "text-3xl mt-2 text-white" : "text-xl mt-2 text-gray-200"}/>
<BlurText text="Discord" delay={150} animateBy="words" direction="top" linkref="https://discord.gg/U7aFkZWk74" className={isSmall? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"}/>
  <BlurText text="Github" delay={150} animateBy="words" direction="top" linkref="https://github.com/enterprises/cloudcode/organizations" className={isSmall? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"}/>
  <BlurText text="Facebook" delay={150} animateBy="words" direction="top" linkref="https://www.facebook.com/profile.php?id=61563331380757" className={isSmall? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"}/>
  </div>
  <div className={isSmall? toosmall? "mt-10" : "mt-5 mb-10"  : "ml-10 "} style={{ width: '15vw', height: "35dvh", display: "flex", flexDirection: "column", justifyContent:"center", alignItems:'center'}}>
<BlurText text="Company" delay={150} animateBy="words" direction="top" className={isSmall? "text-3xl mt-2 text-white" : "text-xl mt-2 text-gray-200"}/>
<BlurText text="Contact" delay={150} animateBy="words" direction="top" linkref="https://discord.gg/U7aFkZWk74" className={isSmall? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"}/>
<BlurText text="Billing" delay={150} animateBy="words" direction="top" linkref="https://billing.cloudcode.site" className={isSmall? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"}/>
<BlurText text="Panel" delay={150} animateBy="words" direction="top" linkref="https://panel.cloudcode.site" className={isSmall? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"}/>
  </div>
  <div className={isSmall? toosmall? "mt-10 mb-10" : "mt-5 mb-10"  : "ml-10 mr-50"} style={{ width: '15vw', height: "35dvh", display: "flex", flexDirection: "column", justifyContent:"center", alignItems:'center'}}>
<BlurText text="Legal" delay={150} animateBy="words" direction="top" linkref="#" className={isSmall? "text-3xl mt-2 text-white" : "text-xl mt-2 text-white"}/>
  <BlurText text="Privacy" delay={150} animateBy="words" direction="top" linkref="/privacy" className={isSmall? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"}/>
<BlurText text="TOS" delay={150} animateBy="words" direction="top" linkref="/tos" className={isSmall? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"}/>
<BlurText text="SLA" delay={150} animateBy="words" direction="top" linkref="/sla" className={isSmall? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"}/>
  </div>
  
</section>
    </div>
  );
}
