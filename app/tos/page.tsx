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
import ScrollVelocity from '@/components/ScrollVelocity'

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
        <div style={{ width: '100%', height: "100%", position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
          <SpotlightCard
            spotlightColor="#ec8686"
            className="bg-transparent border-transparent"
          >
            <div className="text-2xl" style={{ width: "100%", height: "100%", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <SplitText
                text="Terms of Service"
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
                text="The rules and guidelines for using CloudCode services"
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
      <section id="hero2" style={{ width: '100%', minHeight: "100vh", height: "auto", background: "#111", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
        <div style={{ width: '100%', height: "35vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center',overflow: "hidden" }}>
          <ScrollVelocity
            texts={['Terms of', "Service"]}
            velocity={100}
            numCopies={175}
            className=" text-white custom-scroll-text"
          />
        </div>
        <div style={{ width: '75%', minHeight: "35vh", height: "auto", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>

          {/* --- TOS METADATA --- */}
          <BlurText
            text="Last updated: February 15, 2024"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl mb-3 text-gray-400 text-center"
          />
          <BlurText
            text="Effective since: September 1, 2024"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl mb-8 text-gray-400 text-center"
          />

          {/* --- TOS INTRODUCTION --- */}
          <BlurText
            text="These Terms of Service ('Terms') outline the rules and responsibilities for users of CloudCode Hosting and any website or service operated under the cloudcode.site domain. By accessing or using our services, you agree to comply with these Terms."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl mb-8 mt-8 text-gray-200 text-center italic"
          />

          {/* --- KEY INFORMATION --- */}
          <BlurText
            text="Key Information"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl ml-10 mb-5 mt-8 text-gray-100 text-center"
          />
          <BlurText
            text="• Effective: September 1, 2024"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-lg ml-10 text-gray-400 text-center"
          />
          <BlurText
            text="• Last Updated: February 15, 2024"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-lg ml-10 text-gray-400 text-center"
          />
          <BlurText
            text="• Applies to: Users of our Discord server or visitors of any CloudCode Hosting site."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-lg mb-8 text-gray-400 text-center"
          />

          {/* --- DEFINITIONS --- */}
          <BlurText
            text="Definitions"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl ml-10 mb-5 mt-8 text-gray-100 text-center"
          />
          <BlurText
            text="• Panel admins: Qualified and trusted staff chosen by our core team."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-lg ml-10 text-gray-400 text-center"
          />
          <BlurText
            text="• Panels / websites: Web panels for managing services, such as panel.cloudcodehosting.site and client.cloudcodehosting.site."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-lg ml-10 text-gray-400 text-center"
          />
          <BlurText
            text="• Staff: Members responsible for management, customer support, and technical support."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-lg ml-10 text-gray-400 text-center"
          />
          <BlurText
            text="• Account: Information tied to you (email, username, profile picture) within our Discord or registered panel."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-lg mb-8 text-gray-400 text-center"
          />

          {/* --- TERMS OF SERVICE (CORE RULES) --- */}
          <BlurText
            text="Terms of Service (Core Rules)"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl ml-10 mb-5 mt-8 text-gray-100 text-center"
          />
          <BlurText
            text="1. Free hosting services are for development purposes only. You use them at your own risk, and we do not accept complaints regarding performance."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-lg ml-10 text-gray-400 text-center"
          />
          <BlurText
            text="2. While we strive for 99.9% uptime, it is not guaranteed. For higher uptime, please consider our paid plans."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-lg ml-10 text-gray-400 text-center"
          />
          <BlurText
            text="3. You may not use our services for illegal or malicious activities (including DDoS/DoS attacks, malware hosting, or crypto mining). Lavalink hosting is strictly prohibited."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-lg ml-10 text-gray-400 text-center"
          />
          <BlurText
            text="4. Free panel servers may be inspected by panel admins. Hosting more than one service per server or violating any rule may result in suspension or removal."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-lg ml-10 text-gray-400 text-center"
          />
          <BlurText
            text="5. Panel admins reserve the right to suspend or delete servers showing suspicious behavior. You must log in regularly to keep your account active."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-lg ml-10 text-gray-400 text-center"
          />
          <BlurText
            text="6. We reserve the right to refuse service. Free users should not expect guaranteed support. Abusive or rude behavior towards staff or other members will result in action against your account. Law enforcement may be contacted when required."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-lg ml-10 text-gray-400 text-center"
          />
          <BlurText
            text="7. Please back up your files regularly. While we take precautions to protect data, file recovery is not guaranteed."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-lg ml-10 text-gray-400 text-center"
          />
          <BlurText
            text="8. Policies may change at any time without notice. Please review the Terms periodically for updates."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-lg ml-10 text-gray-400 text-center"
          />
          <BlurText
            text="9. Abuse or suspicious activity may trigger our automated monitoring system, which can result in immediate suspension or deletion of your server."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-lg mb-8 text-gray-400 text-center"
          />

          {/* --- REFUND POLICY --- */}
          <BlurText
            text="Refund Policy"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl ml-10 mb-5 mt-8 text-gray-100 text-center"
          />
          <BlurText
            text="• Refunds may be requested within 24 hours of purchase for monthly plans, and within 1 day for yearly plans."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-lg ml-10 text-gray-400 text-center"
          />
          <BlurText
            text="• Abusing the refund system may result in account suspension and financial penalties."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-lg mb-8 text-gray-400 text-center"
          />

          {/* --- CONTACT US --- */}
          <BlurText
            text="Contact Us"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl ml-10 mb-5 mt-8 text-gray-100 text-center"
          />
          <BlurText
            text="If you have any questions regarding these Terms of Service, please contact us via our Discord community:"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-lg ml-10 text-gray-400 text-center"
          />
          <BlurText
            text="https://discord.gg/U7aFkZWk74"
            delay={150}
            animateBy="words"
            direction="top"
            linkref="https://discord.gg/U7aFkZWk74"
            className="text-lg mb-8 text-red-400 text-center font-bold underline"
          />

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