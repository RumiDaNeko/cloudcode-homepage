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
import ScrollVelocity  from '@/components/ScrollVelocity'

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
const supportMatrix = [
  {
    severity: 'Critical (P1)',
    description: 'Full service outage or major failure affecting all users',
    time: '1 hour',
    color: 'bg-red-600',
    text: 'text-white',
  },
  {
    severity: 'High (P2)',
    description: 'Partial outage or major performance degradation',
    time: '4 hours',
    color: 'bg-orange-500',
    text: 'text-white',
  },
  {
    severity: 'Medium (P3)',
    description: 'Non-critical issue affecting some users',
    time: '12 hours',
    color: 'bg-yellow-500',
    text: 'text-white',
  },
  {
    severity: 'Low (P4)',
    description: 'General inquiries, minor bugs, or feature requests',
    time: '24 hours',
    color: 'bg-green-600',
    text: 'text-white',
  },
];
const creditMatrix = [
  {
    severity: '99.9% or higher',
    time: 'No credit',
    text: 'text-white',
  },
   {
    severity: '99.0% – 99.89%',
    time: '5% credit',
    text: 'text-white',
  },
  {
    severity: '95.0% – 98.99%',
    time: '10% credit',
    text: 'text-white',
  },
  {
    severity: 'Below 95.0%',
    time: '15% credit',
    text: 'text-white',
  },
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
  <section id="hero1" style={{ width: '100%', height: "100vh", background: "#111"}}>
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
  text="Service Levels Agreements"
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
text="A wall of text contain our service level agreement"
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
<section id="hero2" style={{ width: '100%', minHeight: "100vh", height:"auto", background: "#111", display: "flex", flexDirection: "column", justifyContent:"center", alignItems:'center'}}>
<div style={{ width: '100%', height: "35vh", display: "flex", flexDirection: "column", justifyContent:"center", alignItems:'center', overflow: "hidden"}}>
<ScrollVelocity
  texts={['Service', 'Level', "Agreement"]} 
  velocity={100} 
  numCopies={175}
  className=" text-white ustom-scroll-text"
/>
</div>
<div style={{ width: '75%', minHeight: "35vh", height:"auto", display: "flex", flexDirection: "column", justifyContent:"center", alignItems:'center'}}>
<BlurText
  text="Effective Date: February 14, 2025"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => {console.log("HI")}}
  className="text-2xl  mb-8 text-white text-center"
/>
<BlurText
  text="Last Updated: February 14, 2025"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => {console.log("HI")}}
  className="text-xl  mb-8 text-gray-400 text-center"
/>
<BlurText
  text="1. Overview"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => {console.log("HI")}}
  className="text-xl  mb-8 text-gray-100 text-center"
/>
<BlurText
  text="This Service Level Agreement (SLA) outlines the service commitments CloudCode provides to its customers, including uptime guarantees, support response times, and responsibilities for both parties. This SLA applies to all CloudCode services unless otherwise specified in a separate agreement."
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => {console.log("HI")}}
  className="text-xl  mb-8 text-gray-400 text-center"
/>
<BlurText
  text="2. Service Commitment"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => {console.log("HI")}}
  className="text-xl  mb-8 text-gray-100 text-center"
/>
<BlurText
  text="CloudCode aims to provide a 99.9% uptime guarantee for its hosting and development solutions. This means services will be available for at least 99.9% of each calendar month, excluding scheduled maintenance and force majeure events.
"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => {console.log("HI")}}
  className="text-xl  mb-8 text-gray-400 text-center"
/>
<BlurText
  text="2.1 Uptime Calculation"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => {console.log("HI")}}
  className="text-xl  mb-8 text-gray-100 text-center"
/>
<BlurText
  text="Uptime is calculated as:

((Total minutes in a month - Downtime minutes) / Total minutes in a month) × 100%."
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => {console.log("HI")}}
  className="text-xl  mb-8 text-gray-400 text-center"
/>
<BlurText
  text="If uptime falls below 99.9% within a calendar month, customers may be eligible for service credits as described in Section 5."
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => {console.log("HI")}}
  className="text-xl  mb-8 text-gray-400 text-center"
/>
<BlurText
  text="3. Support & Response Times"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => {console.log("HI")}}
  className="text-xl  mb-8 text-gray-100 text-center"
/>
<BlurText
  text="CloudCode provides support through the ticketing system. Response targets are listed below:"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => {console.log("HI")}}
  className="text-xl  mb-8 text-gray-400 text-center"
/>
<div className="overflow-x-auto rounded-lg">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-700">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Severity Level
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Issue Description
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Response Time (Target)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {supportMatrix.map((item, index) => (
              <tr key={index} className="transition duration-150 ease-in-out hover:bg-gray-700/50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-3 py-1 text-sm font-semibold rounded-full ${item.color} ${item.text}`}
                  >
                    {item.severity}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-300">{item.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`text-sm font-medium ${item.text}`}>{item.time}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
<BlurText
  text="4. Maintenance & Downtime"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => {console.log("HI")}}
  className="text-xl  mb-8 text-gray-100 text-center"
/>
<BlurText
  text="CloudCode may perform scheduled maintenance to update or improve services."
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => {console.log("HI")}}
  className="text-xl  mb-3 text-gray-200 text-center"
/>
<BlurText
  text="Planned maintenance: Customers will be notified at least 48 hours in advance."
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => {console.log("HI")}}
  className="text-xl  ml-10  text-gray-400 text-center"
/>
<BlurText
  text="Emergency maintenance: Performed when urgent fixes are required; notifications are sent as soon as possible."
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => {console.log("HI")}}
  className="text-xl  ml-10  text-gray-400 text-center"
/>
<BlurText
  text="Downtime caused by scheduled maintenance is excluded from uptime calculations."
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => {console.log("HI")}}
  className="text-xl  mb-8 text-gray-400 text-center"
/>
<BlurText
  text="5. Service Credits"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => {console.log("HI")}}
  className="text-xl  mb-8 text-gray-100 text-center"
/>
<BlurText
  text="If CloudCode fails to meet the 99.9% uptime commitment, customers may request service credits according to the tiers below:"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => {console.log("HI")}}
  className="text-xl  mb-3 text-gray-400 text-center"
/>
<div className="overflow-x-auto rounded-lg">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-700">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Monthly Uptime	
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Service Credit
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {creditMatrix.map((item, index) => (
              <tr key={index} className="transition duration-150 ease-in-out hover:bg-gray-700/50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-3 py-1 text-sm font-semibold rounded-full ${item.text}`}
                  >
                    {item.severity}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`text-sm font-medium ${item.text}`}>{item.time}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
<BlurText
  text="Credit Request Process"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => {console.log("HI")}}
  className="text-xl mt-10 mb-3 text-gray-200 text-center"
/>
<BlurText
  text="Submit a credit request within 7 days of the downtime incident.
"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => {console.log("HI")}}
  className="text-xl  mb-3 text-gray-200 text-center"
/>
<BlurText
  text="Credits apply only to future invoices and are not refundable in cash.

"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => {console.log("HI")}}
  className="text-xl  mb-3 text-gray-200 text-center"
/>
<BlurText
  text="Service credits are the sole remedy for SLA violations.
"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={() => {console.log("HI")}}
  className="text-xl  mb-3 text-gray-200 text-center"
/>
{/* --- SECTION 6: EXCLUSIONS --- */}
      <BlurText
        text="6. Exclusions"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-xl mb-8 text-gray-100 text-center"
      />
      <BlurText
        text="This SLA does not apply to downtime or issues caused by:"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-xl mb-3 text-gray-200 text-center"
      />
      {/* Exclusion List */}
      <BlurText
        text="— Customer-caused problems (e.g., misconfiguration, third-party software)."
        delay={150}
        animateBy="words"
        direction="top"
        className="text-lg ml-10 text-gray-400 text-center italic"
      />
      <BlurText
        text="— Internet service provider outages or issues outside CloudCode’s infrastructure."
        delay={150}
        animateBy="words"
        direction="top"
        className="text-lg ml-10 text-gray-400 text-center italic"
      />
      <BlurText
        text="— Force majeure events (natural disasters, cyberattacks, government actions, etc.)."
        delay={150}
        animateBy="words"
        direction="top"
        className="text-lg ml-10 text-gray-400 text-center italic"
      />
      <BlurText
        text="— Free-tier or trial accounts (these do not qualify for uptime guarantees)."
        delay={150}
        animateBy="words"
        direction="top"
        className="text-lg mb-8 text-gray-400 text-center italic"
      />
      
      {/* --- SECTION 7: CUSTOMER RESPONSIBILITIES --- */}
      <BlurText
        text="7. Customer Responsibilities"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-xl mb-8 text-gray-100 text-center"
      />
      <BlurText
        text="Customers agree to:"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-xl mb-3 text-gray-200 text-center"
      />
      {/* Responsibility List */}
      <BlurText
        text="— Maintain accurate contact information."
        delay={150}
        animateBy="words"
        direction="top"
        className="text-lg ml-10 text-gray-400 text-center italic"
      />
      <BlurText
        text="— Report issues promptly and provide relevant logs or details when requested."
        delay={150}
        animateBy="words"
        direction="top"
        className="text-lg ml-10 text-gray-400 text-center italic"
      />
      <BlurText
        text="— Follow CloudCode’s Acceptable Use Policy (AUP)."
        delay={150}
        animateBy="words"
        direction="top"
        className="text-lg mb-8 text-gray-400 text-center italic"
      />

      {/* --- SECTION 8: CHANGES TO THE SLA --- */}
      <BlurText
        text="8. Changes to the SLA"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-xl mb-8 text-gray-100 text-center"
      />
      <BlurText
        text="CloudCode may modify this SLA with 30 days' notice. Continued use of services after changes indicates acceptance of the updated SLA."
        delay={150}
        animateBy="words"
        direction="top"
        className="text-xl mb-8 text-gray-400 text-center"
      />

      {/* --- SECTION 9: CONTACT & DISPUTE RESOLUTION --- */}
      <BlurText
        text="9. Contact & Dispute Resolution"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-xl mb-8 text-gray-100 text-center"
      />
      <BlurText
        text="For SLA-related inquiries or to submit a credit request, please open a support ticket through the standard support channels."
        delay={150}
        animateBy="words"
        direction="top"
        className="text-xl mb-3 text-gray-400 text-center"
      />
      <BlurText
        text="Disputes will be resolved through good-faith negotiations; if unresolved, they will follow CloudCode’s standard dispute resolution process."
        delay={150}
        animateBy="words"
        direction="top"
        className="text-xl mb-8 text-gray-400 text-center"
      />

      {/* --- ACCEPTANCE --- */}
      <BlurText
        text="Acceptance"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-2xl font-bold mb-8 mt-12 text-white text-center"
      />
      <BlurText
        text="By using CloudCode services, you acknowledge and agree to the terms outlined in this SLA"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-xl italic mb-8 text-gray-300 text-center"
      />
      
</div>
</section>
<section id="footer" style={{ width: '100%', height: isSmall ? toosmall ? "125vh" : "75vh" : "35vh", background: "#1a1919ff", display: "flex", flexDirection: isSmall? "column" : "row", justifyContent:"center", alignItems:'center'}}>
  <div style={{ width: '100%', height: "35vh", display: "flex", flexDirection: "column", justifyContent:"center", alignItems:'center'}}>
<img className={isSmall? "mt-10  rounded-[200px]" : "mt-10 mr-25 rounded-[200px]"} style={{width:"50px", height:"50px"}} src="https://media.harumi.io.vn/cloudcode-bg.png"></img>
<BlurText text="Cloudcode" delay={150} animateBy="words" direction="top" className="text-3xl mt-2 text-white"/>
<BlurText text="© 2025 Cloudcode" delay={150} animateBy="words" direction="top" className="text-1xl mt-1 mr-2 text-gray-400"/>
  </div>
  <div style={{ width: '75vw', height: "35vh", display: "flex", flexDirection: "column", justifyContent:"center", alignItems:'center'}}></div>
  <div className={isSmall? toosmall? "mt-10" : "mt-5 mb-10" : "ml-10 "} style={{ width: '15vw', height: "35vh", display: "flex", flexDirection: "column", justifyContent:"center", alignItems:'center'}}>
<BlurText text="Links" delay={150} animateBy="words" direction="top" className={isSmall? "text-3xl mt-2 text-white" : "text-xl mt-2 text-gray-200"}/>
<BlurText text="Discord" delay={150} animateBy="words" direction="top" linkref="https://discord.gg/U7aFkZWk74" className={isSmall? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"}/>
  <BlurText text="Github" delay={150} animateBy="words" direction="top" linkref="https://github.com/enterprises/cloudcode/organizations" className={isSmall? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"}/>
  <BlurText text="Facebook" delay={150} animateBy="words" direction="top" linkref="https://www.facebook.com/profile.php?id=61563331380757" className={isSmall? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"}/>
  </div>
  <div className={isSmall? toosmall? "mt-10" : "mt-5 mb-10"  : "ml-10 "} style={{ width: '15vw', height: "35vh", display: "flex", flexDirection: "column", justifyContent:"center", alignItems:'center'}}>
<BlurText text="Company" delay={150} animateBy="words" direction="top" className={isSmall? "text-3xl mt-2 text-white" : "text-xl mt-2 text-gray-200"}/>
<BlurText text="Contact" delay={150} animateBy="words" direction="top" linkref="https://discord.gg/U7aFkZWk74" className={isSmall? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"}/>
<BlurText text="Billing" delay={150} animateBy="words" direction="top" linkref="https://billing.cloudcode.site" className={isSmall? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"}/>
<BlurText text="Panel" delay={150} animateBy="words" direction="top" linkref="https://panel.cloudcode.site" className={isSmall? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"}/>
  </div>
  <div className={isSmall? toosmall? "mt-10 mb-10" : "mt-5 mb-10"  : "ml-10 mr-50"} style={{ width: '15vw', height: "35vh", display: "flex", flexDirection: "column", justifyContent:"center", alignItems:'center'}}>
<BlurText text="Legal" delay={150} animateBy="words" direction="top" linkref="#" className={isSmall? "text-3xl mt-2 text-white" : "text-xl mt-2 text-white"}/>
  <BlurText text="Privacy" delay={150} animateBy="words" direction="top" linkref="/privacy" className={isSmall? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"}/>
<BlurText text="TOS" delay={150} animateBy="words" direction="top" linkref="/tos" className={isSmall? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"}/>
<BlurText text="SLA" delay={150} animateBy="words" direction="top" linkref="/sla" className={isSmall? "text-3xl mt-2 text-gray-400" : "text-xl mt-2 text-gray-400"}/>
  </div>
  
</section>
    </div>
  );
}
