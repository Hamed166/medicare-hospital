import React from 'react';



const Doctors = () => {
    return (
        <div className="">
            <div className="container mx-auto px-20 mt-24 mb-8">
                <h2 className="text-center text-4xl text-blue-400 p-10 font-thin uppercase"><span className="text-gray-600">Specialist * </span>Doctors</h2>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
                    <div className=" bg-blue-100 ">
                        <img className="w-full h-auto mb-2" src="https://nischinto-html.netlify.app/nischinto/assets/img/member1.jpg" alt=""/>
                        <div>
                            <div class="text-cyan-600 font-thin text-xl">
                                    Dr. Zain Mohammad
                                </div>
                                <div class="text-gray-500">
                                    Medicine
                                </div>
                            </div>
                    </div>
                    <div className=" bg-blue-100 ">
                        <img className="w-full h-auto mb-2" src="https://nischinto-html.netlify.app/nischinto/assets/img/member2.jpg" alt=""/>
                        <div>
                            <div class="text-cyan-600 font-thin text-xl">
                                    Dr. Fahima Hussain
                                </div>
                                <div class="text-gray-500">
                                    Cardiology
                                </div>
                            </div>
                    </div>
                    <div className=" bg-blue-100 ">
                        <img className="w-full h-auto mb-2" src="https://nischinto-html.netlify.app/nischinto/assets/img/member4.jpg" alt=""/>
                        <div>
                            <div class="text-cyan-600 font-thin text-xl">
                                    Dr. Sarah Ali
                                </div>
                                <div class="text-gray-500">
                                    Othopedics
                                </div>
                            </div>
                    </div>
                    <div className=" bg-blue-100 ">
                        <img className="w-full h-auto mb-2" src="https://nischinto-html.netlify.app/nischinto/assets/img/member3.jpg" alt=""/>
                        <div>
                            <h2 className="font-thin text-xl mb-2">Dr. Salah Mohammad</h2>
                            <p className="text-gray-600 mb-2">Physiotherapy</p>
                        </div>
                    
                    </div>
                
                </div>
            
            </div>
           
        </div>
    );
};

export default Doctors;