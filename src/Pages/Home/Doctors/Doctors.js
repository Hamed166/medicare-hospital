import React from 'react';


const Doctors = () => {
    return (
        <div className="container mx-auto px-12 mt-24 mb-8">
            <h2 className="text-center text-4xl text-gray-600 p-10 font-thin uppercase"><span>Doctors</span></h2>
            <div className="grid grid-cols-2 gap-8">
            <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                    <img class="w-60  md:w-72  md:h-auto md:rounded-none rounded-full mx-auto" src="https://i.ibb.co/g68jTg4/dr-murad.jpg" alt="" width="384" height="512"/>
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote className="mt-8">
                    <div class="text-cyan-600 text-xl">
                            Dr. Mamun Rahman
                        </div>
                        <div class="text-gray-500">
                            M.B.B.S , MD of Cardiology
                        </div>
                    </blockquote>
                    <figcaption class="font-medium">
                        <p class="text-lg font-semibold">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy
                        </p>
                        <div class="text-gray-600 mt-16">
                            Phone: 01711223344
                        </div>
                        <div class="text-gray-400 mt-4">
                            Email: zain@gmail.com
                        </div>
                    </figcaption>
                    </div>
                </figure>
                <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                    <img class="w-64 h-32 md:w-72  md:h-auto md:rounded-none rounded-full mx-auto" src="https://i.ibb.co/Vq7TDKb/dr-zain.jpg" alt="" width="384" height="512"/>
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote className="mt-8">
                    <div class="text-cyan-600 text-xl">
                            Dr. Hasan Murad
                        </div>
                        <div class="text-gray-500">
                        M.B.B.S , MD of Medicine
                        </div>
                    </blockquote>
                    <figcaption class="font-medium">
                        <p class="text-lg font-semibold">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy
                        </p>
                        <div class="text-gray-600 mt-16">
                            Phone: 01711223344
                        </div>
                        <div class="text-gray-400 mt-4">
                            Email: zain@gmail.com
                        </div>
                    </figcaption>
                    </div>
                </figure>
                <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                    <img class="w-64 h-32 md:w-72  md:h-auto md:rounded-none rounded-full mx-auto" src="https://i.ibb.co/YhG94nK/towhid-2.jpg" alt="" width="384" height="512"/>
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote className="mt-8">
                    <div class="text-cyan-600 text-xl">
                            Dr. Towhidur Rahman
                        </div>
                        <div class="text-gray-500">
                        M.B.B.S , Neurology
                        </div>
                    </blockquote>
                    <figcaption class="font-medium">
                        <p class="text-lg font-semibold">
                        Specialty – Neuro MedicineDegree - MBBS, MD (Neuro-Medicine)Designation
                        </p>
                        <div class="text-gray-600 mt-16">
                            Phone: 01711223344
                        </div>
                        <div class="text-gray-400 mt-4">
                            Email: zain@gmail.com
                        </div>
                    </figcaption>
                    </div>
                </figure>
                <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                    <img class="w-64 h-32 md:w-72  md:h-auto md:rounded-none rounded-full mx-auto" src="https://i.ibb.co/28Z1SWh/dr-sarah.jpg" alt="" width="384" height="512"/>
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote className="mt-8">
                    <div class="text-cyan-600 text-xl">
                            Dr. Tamanna Rahman
                        </div>
                        <div class="text-gray-500">
                        M.B.B.S , MD of Physiotherapist
                        </div>
                    </blockquote>
                    <figcaption class="font-medium">
                        <p class="text-lg font-semibold">
                            Physiotherapy Specialist Chief Physiotherapist, Dhaka Medical College Hospital 
                        </p>
                        <div class="text-gray-600 mt-16">
                            Phone: 01711223344
                        </div>
                        <div class="text-gray-400 mt-4">
                            Email: zain@gmail.com
                        </div>
                    </figcaption>
                    </div>
                </figure>
                  
            </div>
        </div>
    );
};

export default Doctors;