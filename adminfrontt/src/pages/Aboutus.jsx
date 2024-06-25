import React from 'react'
 import { useState,useEffect } from 'react'
import logo  from "../images/download.jpg"
import { Container,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../App.css'
function Aboutus() {
  const [current, setCurrent] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  
  const images = [
    'https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2020/10/Speedo-Bus-Routes-in-Lahore-Pakistan-Cover-13-10.jpg',
    'https://s1.dmcdn.net/v/JZnAC1Op_Pz0DeV7D/x1080'];

  const slideshow = {
    current: current,
    images: images,
    init() {
      setInterval(() => {
        setCurrent((prev) => (prev < images.length - 1 ? prev + 1 : 0));
      }, 4000);
    }
  };

  useEffect(() => {
    slideshow.init();
  }, []);

  return (
    


    <div className="design-container font-sans font-normal antialiased bg-white text-gray-900">
    <div className='layout-frame '>
   <div className="h-24 w-full absolute top-0 left-0 bg-black"></div>
   <div className="h-24 z-20 relative container mx-auto flex items-center justify-between px-6">
    
     <div x-data="{ mobileMenu : false }" class="text-black text-lg fixed bottom-0 left-0 lg:relative p-6 lg:p-0 w-full lg:w-auto max-w-lg">
     <div className={`flex ${mobileMenu ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-center justify-center lg:bg-transparent pt-6 pb-8 lg:p-0 -mb-6 lg:m-0 rounded-t-3xl shadow-2xl lg:shadow-none font-bold uppercase italic lg:normal-case lg:font-normal`}>


     <nav class="navbar   text-black p-4">
<div class="navbar-content flex  text ">

 <a href="/Design" class="mr-7 " >Home</a>

 <Link to ="/Aboutus" class="mr-7">About us
 </Link>
 <a href="/Profile " class="mr-7">Stops Form</a>


 <NavDropdown title="Routes" id="navbarScrollingDropdown">
 <NavDropdown.Item href="/Bus1">FR1 ( Batti Chowk to Morr Samanabad )   </NavDropdown.Item>
 <NavDropdown.Item href="/Bus2">FR2 ( Railway station to Rana town) </NavDropdown.Item>
 <NavDropdown.Item href="/Bus3">FR3 ( R.A bazar to Chungi amar sidhu )</NavDropdown.Item>
 <NavDropdown.Item href="/Bus4">FR4 ( Railway Station To Shahdara) </NavDropdown.Item>
 <NavDropdown.Item href="/Bus5">FR5 ( Shadbagh to Batti Chowk )</NavDropdown.Item>
 <NavDropdown.Item href="/Bus6">FR6 ( Babu Sabu to Raj Garh Chowk )</NavDropdown.Item>
 <NavDropdown.Item href="/Bus7">FR7 ( Bagrain to Chungi Amar Sidhu )</NavDropdown.Item>
 <NavDropdown.Item href="/Bus8">FR8 ( Doctor Hospital to Canal )</NavDropdown.Item>
 <NavDropdown.Item href="/Bus9">FR9 ( Railway Station to Chauburji) </NavDropdown.Item>
 <NavDropdown.Item href="/Bus10">FR10 ( Multan Chungi to Qartaba Chowk )</NavDropdown.Item>
  
</NavDropdown>


</div>
</nav>


         </div>
         <button click="mobileMenu = !mobileMenu" type="button" className="lg:hidden bg-black text-white rounded-3xl w-full py-4 text-center uppercase text-sm shadow-2xl lg:shadow-none focus:outline-none">
             <template x-if="!mobileMenu">
                 <div className="flex items-center justify-center">
                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path>
                     </svg>
                      Menu
                 </div>
             </template>
             <template x-if="mobileMenu">
                 <div className="flex items-center justify-center">
                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                     </svg>
                      Close
                 </div>
             </template>
         </button>
     </div>
   </div>

   <div x-data="{}" className="-mt-32 relative w-full bg-black pt-64 pb-24">
     <div className="relative z-10 text-white text-center mx-auto max-w-xl">
       <div className='tt'>
       <h1 className="text-3xl lg:text-7xl mb-4 font-bold uppercase italic text-color to-black ">LAHORE FEEDER BUS</h1>
       <a href="/about" className=" border-white text-lg px-8 py-3 hover:bg-white hover:text--900"></a>
       </div>
     </div>
     <img
       src={images[current]}
       className="w-full h-full absolute inset-0 object-cover opacity-75"
       alt="Slideshow"
     />
   </div>


   <div>
  <br /><br />
  <h2 className="para">Lahore Feeder Routes (Phase I)</h2>
  <Container href="" className="igg">
    <img className="lo" src={logo} alt="" />
  </Container>
  <div className="para">
    <p>
      <br /><br />

      

      <br /><br />

      PMA physical aspect of integration deals with convenient transfer of passengers from feeder buses to Metrobus Line and within feeder buses. The convenient transfer will allow the shortest walking distance from the bus stop to Metrobus Station and vice versa.The operational integration aspect of the planned system will ensure that headway (successive interval between buses) and operation hours match between feeder buses and Metrobus line.

      <br /><br />
      The physical aspect of integration deals with convenient transfer of passengers from feeder buses to Metrobus Line and within feeder buses. The convenient transfer will allow the shortest walking distance from the bus stop to Metrobus Station and vice versa.
      

      An integrated fare is the fare charged for an amount of travel between two points in a public transport system, irrespective of the number of modes / services and operators involved in making the journey. This means that a passenger traveling from point A to C via B using two different operators / routes is charged a single fare for the journey as distinct from the alternative of charging two fares A to B + B to C. Integration of fare has a social and financial objective; whose design utilizes Automated Fare Collection technologies for implementation of the plan.

      <br /><br />

      The Phase I of the project has 200 buses which includes 162 Standard Buses (12-meter) and 38 Mini Buses (8-meter).

      <br /><br />

      PMA has engaged an independent service provider, for provisioning of Automated Fare Collection and Bus Scheduling System (AFC-BSS) system which serves as a Management Information System (MIS). The AFC-BSS coupled with necessary hardware and software authenticate entry / exit of passengers into buses, and to monitor adherence to bus schedules. Each 12-meter long feeder bus has two on-board validators for authentication of entry / exit of passengers whereas each 8-meter long feeder bus is to have one on-board validator. Passengers shall use one stored value rechargeable Smart Cards for their journey in the Integrated Public Transport routes. These feeder buses have On-Board E-ticketing System and the passenger will tap cards on Validator for fare authentication / deduction. One person is positioned in the bus to facilitate / guide the passengers.

      <br /><br />

      The Driver Console / On-Board Unit installed on buses shall be used to track buses accurately and reliably. The PMA receives live passenger data, financial data, and Automatic Vehicle Location data in the Control Center.

      <br /><br />

      An efficient surveillance system is designed for the operation management of the public transport system. PMA has installed cameras along the road at intersections, and at critical points for better operational management of buses, and bringing cost and operation efficiency. The surveillance system will also help in the implementation of Service Level Agreement. The overall system is designed to be controlled and monitored from the Lahore Metrobus Command & Control Center. The buses have a wireless communication system to connect with Control Center in case of an emergency and broadcast information from Control Center to buses.

      <br /><br />

      The Feeder Routes started their operations on March 20, 2017.
    </p>
  </div>
</div>

</div>
</div>
   


  )
}

export default Aboutus
