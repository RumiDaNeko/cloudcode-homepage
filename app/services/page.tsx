'use client'
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
import BlurText from '@/components/BlurText';
import FlowingMenu from '@/components/FlowingMenu';
import Galaxy from '@/components/Galaxy'
import MaskCursorEffect from '@/components/mask-cursor-effect';
const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
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
  { text: 'Bot hosting', image: 'https://media.cloudcode.site/OIP%20(1).jpg' },
  { text: 'Minecraft', image: 'https://media.harumi.io.vn/wp2586787.jpg' },
  { text: 'Databases', image: 'https://media.harumi.io.vn/OIP%20(1).webp' },
  { text: 'Voice Servers', image: 'https://media.cloudcode.site/SR_23.02.013_WorldRadioDay_feature.webp' }
];

// Removed SLA-specific data (supportMatrix, creditMatrix)

export default function TOSPage() {
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
      <div id="menu" style={{ position: "fixed", top: 0, right: 0, width: "100%", height: '100vh', background: "transparent", zIndex: 9999, pointerEvents: "none" }}>
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
      <section id="hero1" style={{ width: '100%', height: "100vh", background: "#111" }}>
        <div style={{ width: '100%', height: "100%", position: 'absolute', backdropFilter: "blur(5px)", WebkitBackdropFilter: "blur(5px)" }}>
          <Galaxy 
    mouseRepulsion={true}
    mouseInteraction={true}
    density={1.5}
    glowIntensity={0.5}
    saturation={0}
    hueShift={240}
    transparent={true}
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
        <div style={{ width: '100%', height: "100%", position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
          <SpotlightCard
            spotlightColor="#ec8686"
            className="bg-transparent border-transparent"
          >
            <div className="text-2xl" style={{ width: "100%", height: "100%", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <SplitText
                text="Services"
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
                onLetterAnimationComplete={() => { console.log("Hey there!") }} />
              <DecryptedText
                text="The services that we offer"
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
      <section id="hero2" style={{ width: '100%', minHeight: "105vh", height: "auto", background: "#111", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
       <div className="h-full w-full flex flex-col gap-5 items-center justify-center overflow-y-auto relative p-10">
  <MaskCursorEffect
    hiddenComponent={
      <div className="max-w-4xl text-7xl font-bold">
        Because we are building this page, in the mean time check out the billing page
      </div>
    }
  >
    <div className="max-w-4xl text-7xl font-bold">
     Nothing here
    </div>
  </MaskCursorEffect>
</div>
      </section>
      <section id="footer" style={{ width: '100%', height: isSmall ? toosmall ? "125vh" : "75vh" : "35vh", background: "#1a1919ff", display: "flex", flexDirection: isSmall ? "column" : "row", justifyContent: "center", alignItems: 'center' }}>
        <div style={{ width: '100%', height: "35vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
          <img className={isSmall ? "mt-10 rounded-[200px]" : "mt-10 mr-25 rounded-[200px]"} style={{ width: "50px", height: "50px" }} src="https://media.harumi.io.vn/cloudcode-bg.png"></img>
          <BlurText text="Cloudcode" delay={150} animateBy="words" direction="top" className="text-3xl mt-2 text-white" />
          <BlurText text="© 2025 Cloudcode" delay={150} animateBy="words" direction="top" className="text-1xl mt-1 mr-2 text-gray-400" />
        </div>
        <div style={{ width: '75vw', height: "35vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}></div>
        <div className={isSmall ? toosmall ? "mt-10" : "mt-5 mb-10" : "ml-10 "} style={{ width: '15vw', height: "35vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
          <BlurText text="Links" delay={150} animateBy="words" direction="top" className={isSmall ? "text-3xl mt-2 text-white" : "text-xl mt-2 text-gray-200"} />
          <BlurText text="Discord" delay={150} animateBy="words" direction="top" linkref="https://discord.gg/U7aFkZWk74" className={isSmall ? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"} />
          <BlurText text="Github" delay={150} animateBy="words" direction="top" linkref="https://github.com/enterprises/cloudcode/organizations" className={isSmall ? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"} />
          <BlurText text="Facebook" delay={150} animateBy="words" direction="top" linkref="https://www.facebook.com/profile.php?id=61563331380757" className={isSmall ? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"} />
        </div>
        <div className={isSmall ? toosmall ? "mt-10" : "mt-5 mb-10" : "ml-10 "} style={{ width: '15vw', height: "35vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
          <BlurText text="Company" delay={150} animateBy="words" direction="top" className={isSmall ? "text-3xl mt-2 text-white" : "text-xl mt-2 text-gray-200"} />
          <BlurText text="Contact" delay={150} animateBy="words" direction="top" linkref="https://discord.gg/U7aFkZWk74" className={isSmall ? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"} />
          <BlurText text="Billing" delay={150} animateBy="words" direction="top" linkref="https://billing.cloudcode.site" className={isSmall ? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"} />
          <BlurText text="Panel" delay={150} animateBy="words" direction="top" linkref="https://panel.cloudcode.site" className={isSmall ? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"} />
        </div>
        <div className={isSmall ? toosmall ? "mt-10 mb-10" : "mt-5 mb-10" : "ml-10 mr-50"} style={{ width: '15vw', height: "35vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
          <BlurText text="Legal" delay={150} animateBy="words" direction="top" linkref="#" className={isSmall ? "text-3xl mt-2 text-white" : "text-xl mt-2 text-white"} />
          <BlurText text="Privacy" delay={150} animateBy="words" direction="top" linkref="/privacy" className={isSmall ? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"} />
          <BlurText text="TOS" delay={150} animateBy="words" direction="top" linkref="/tos" className={isSmall ? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"} />
          <BlurText text="SLA" delay={150} animateBy="words" direction="top" linkref="/sla" className={isSmall ? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"} />
        </div>

      </section>
    </div>
  );
}