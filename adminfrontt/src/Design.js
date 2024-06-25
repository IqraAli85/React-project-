import React, { useState, useEffect } from 'react';
import './App.css'
import Footer from './Component/Footer'
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
function Design() {
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



      <div className="hidden lg:grid relative grid-cols-2">
            <div className="pt-24">
                <div className="relative w-full h-full">
                    <img src="https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80" className="absolute inset-0 w-full h-full object-cover -mt-6 z-10"/>
                </div>
            </div>
</div>

<div className="relative">
  <img src="https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80" class="absolute inset-0 w-full h-full object-cover -mt-6 z-10"/>  
   </div>
       

   <div className="mx-auto max-w-lg text-center py-24">
        <h2 className="text-5xl mb-6 font-bold uppercase italic">Our Services</h2>
        <p className="pppp" >Punjab Masstransit Authority (PMA) is a statutory body established by Government of the Punjab with the purpose of planning, construction, operation and maintenance of mass transit systems in the major cities of the province; for providing safe, efficient and comfortable urban transportation system. </p>
    </div>


    <div className="flex flex-wrap md:space-x-12 justify-center px-4 ">
        <div className="block w-full md:flex-1 max-w-xs mb-12">
            <img src="https://i.pinimg.com/564x/d3/1e/dd/d31edd52bd8fd73f619edb45248426d7.jpg" className="w-full h-96 object-cover"/>
            <div className="text-lg text-center p-4 ">
              <p>METRO BUS</p>
            </div>
        </div>
        <div className="block  md:flex-1 max-w-xs mb-12">
            <img src="https://i.pinimg.com/564x/63/e1/e6/63e1e6885eef1e7df8898b2c1048a77e.jpg" className="w-full h-96 object-cover"/>
            <div className="text-lg text-center p-4">FEEDER BUS </div>
        </div>
        <div className="block w-full md:flex-1 max-w-xs mb-12">
            <img src="https://i.pinimg.com/564x/8d/34/79/8d347975e79d4cdd8a1276feff54ae89.jpg" className="w-full h-96 object-cover"/>           
            <div className="text-lg text-center p-4">METRO TRAIN</div>
        </div>
    </div>

   

<div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 py-24">
        <div className="hidden lg:grid relative grid-cols-2">
            <div className="pt-24">
                <div className="relative w-full h-full">
<img src="https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80" className="absolute inset-0 w-full h-full object-cover -mt-6 z-10"/>  
 </div>
</div>


<div className="relative">


</div>
  </div>
</div>



<div className="gradient bg-black text-white text-center p-12">
  <Link to="/Login">
    <div className="text-2xl">
      <button className='butt'>Admin Space</button>
    </div>
  </Link>
        <div className="flex items-center justify-center my-12">
            <a href="#" className="mx-4">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
            </a>
            <a href="#" className="mx-4">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            </a>
            <a href="#" className="mx-4">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
            </a>
            <a href="#" className="mx-4">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                </svg>
            </a>
        </div>
    </div>
    <div className="container mx-auto text-center py-12 mt-12 border-t border-gray-200 text-xs uppercase">
    <Footer/>
      
    </div>
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.2/dist/alpine.min.js" defer="defer"></script>
    </div>
    





    
    
    

  






































    

  );
}

export default Design;
