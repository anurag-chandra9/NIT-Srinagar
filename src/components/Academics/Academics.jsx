import React from 'react'
import { Link, NavLink } from "react-router-dom";

export default function  Academics() {
    return (<>  
        <div class="h-auto w-100 flex flex-wrap flex-col items-center text-centre p-10">
        <div class="w-full h-auto flex flex-wrap flex-col items-center ">
            <p class="text-indigo-800 font-bold text-2xl md:text-4xl text-center">" Pure Hardwork, No Shortcuts!"</p>
            <div class="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
        </div>
        <div class="w-full flex flex-wrap justify-evenly">
            
                <NavLink
                                to="/Notes1"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    <div class="w-46 flex flex-col items-center mb-12">
                <img class="w-44 h-44" src="https://thumbs.dreamstime.com/z/metallurgy-foundry-iron-molten-metal-pouring-gear-logo-design-heavy-industry-engineering-industrial-vector-illustration-242039240.jpg"
                 alt=""/>
                <p class="text-3xl font-bold text-black"> Metallurgy department</p>
                </div>
                                </NavLink>
            
            
                <NavLink
                                to="/Notes1"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    <div class="w-46 flex flex-col items-center mb-12">
                <img class="w-44 h-44" src="https://th.bing.com/th/id/OIP.1ZozYEDBe8kpdJSM3bLIFQHaHa?rs=1&pid=ImgDetMain"
                 alt=""/>
                <p class="text-3xl font-bold text-black mx-6">Civil department</p>
                </div>
                                </NavLink>
           
                <NavLink
                                to="/Notes1"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                     <div class="w-46 flex flex-col items-center mb-12">
                <img class="w-44 h-44" src="https://static.vecteezy.com/system/resources/thumbnails/012/627/960/small/mechanical-enginering-perfect-logo-for-automotive-company-vector.jpg"
                 alt=""/>
                <p class="text-3xl font-bold text-black">Mechanical department</p>
                </div>
                                </NavLink>

        </div>
        </div>
        <div class="h-auto w-100 flex flex-wrap flex-col items-center text-centre p-10">
        <div class="w-full h-auto flex flex-wrap flex-col items-center ">
            <div class="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
        </div>
        <div class="w-full flex flex-wrap justify-evenly">
               
                <NavLink
                                to="/Notes1"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
            <div class="w-46 flex flex-col items-center mb-12">

                <img class="w-44 h-44" src="https://learnengineering.in/wp-content/uploads/2018/09/ECE-Logo.png"
                 alt=""/>
                <p class="text-center text-3xl font-bold text-black">Electronics and Communication </p>
                </div>
                                
                                </NavLink>
           
           
                <NavLink
                                to="/Notes1"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                     <div class="w-46 flex flex-col items-center mb-12">
                <img class="w-44 h-44" src="https://static.vecteezy.com/system/resources/previews/036/138/012/original/electrical-engineering-logo-design-creative-modern-concept-with-construction-and-safety-cap-template-vector.jpg"
                 alt=""/>
                <p class="text-center text-3xl font-bold text-black mx-6">Electrical department</p>
                </div>
                                </NavLink>
            
           
                <NavLink
                                to="/Notes1"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                > <div class="w-46 flex flex-col items-center mb-12">
                                <img class="w-44 h-44" src="https://th.bing.com/th/id/OIP.4-x9aR8_AmCRnnOVDQAPhwHaFP?rs=1&pid=ImgDetMain"
                                 alt=""/>
                                <p class=" text-center text-3xl font-bold text-black">Chemical department</p>
                                </div>
                                    
                                </NavLink>
        </div>
        </div>
        <div class="h-auto w-100 flex flex-wrap flex-col items-center text-centre p-10">
        <div class="w-full h-auto flex flex-wrap flex-col items-center ">
            <div class="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
        </div>
        <div class="w-full flex flex-wrap justify-evenly">
           
                <NavLink
                                to="/Notes1"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                     <div class="w-46 flex flex-col items-center mb-12">
                <img class="w-44 h-44" src="https://i.pinimg.com/originals/f0/53/e9/f053e95f8365f5c0005b26fba6af7881.jpg"
                 alt=""/>
                <p class=" text-center text-3xl font-bold text-black"> Computer Science department</p>
                </div>
                                </NavLink>
            
           
                <NavLink
                                to="/Notes1"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                 <div class="w-46 flex flex-col items-center mb-12">
                <img class="w-44 h-44" src="https://static.vecteezy.com/system/resources/previews/021/733/829/original/it-letter-monogram-tech-information-logo-design-vector.jpg"
                 alt=""/>
                <p class=" text-center text-3xl font-bold text-black mx-6">IT department</p>
                </div>
                                </NavLink>
            
        </div>
        </div>
        </>
  
   
      
    );
}
