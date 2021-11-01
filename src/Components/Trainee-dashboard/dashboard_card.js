import React, { useState, useEffect }  from "react";
import {useHistory} from "react-router-dom";
import axios  from "axios";


const DashboardCard = () => {

    let historyRef = useHistory()
    
    const [trainerData, setTrainerData] = useState([]);
    useEffect(() => {
        axios
            .get(`https://amankothari.pythonanywhere.com/myworkoutplan`,
                {
                    headers: {
                        Authorization: `Token b3d54ce7b96efb16e406f9521095f470ececa760`
                    }
                }
            )
            .then((res) => {
                if (res) {
                    setTrainerData(res.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })

        

    }, []);
    console.log(trainerData);
    
    return (
        
        
        // <!-- component -->
// <!-- Pricing section -->
<section class="w-full pt-16 pb-20 bg-gray-50">
    
    <div class="px-10 mx-auto text-center max-w-7xl">
        <h2 class="text-5xl font-bold text-blue-600">
            Trainer-Name :<span class="text-gray-800"> {trainerData.Trainer_name}</span>
        </h2>
        <p class="mt-3 text-lg text-gray-500">Gym Name:<span class="text-gray-800"> {trainerData.Gym}</span></p>
        <div class="grid gap-5 mt-12 lg:grid-cols-2 md:grid-cols-2">

            {/* <!-- Start First Plan --> */}
            <div class="relative flex flex-col justify-between p-8 lg:p-6 xl:p-8 rounded-2xl" >

                <div class="absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 bg-green-50 rounded-2xl"></div>
                <div class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-2xl"></div>
                <div class="relative flex pb-5 space-x-5 border-b border-gray-200 lg:space-x-3 xl:space-x-5">
                    {/* <svg class="w-16 h-16 text-green-400 rounded-2xl" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><rect x="0" y="0" width="150" height="150" rx="15"></rect></defs><g fill="none" fill-rule="evenodd"><mask fill="#fff"><use xlink:href="#plan1"></use></mask><use fill="currentColor" xlink:href="#plan1"></use><circle fill-opacity=".3" fill="#FFF" mask="url(#plan1)" cx="125" cy="25" r="50"></circle><path fill-opacity=".3" fill="#FFF" mask="url(#plan1)" d="M-33 83H67v100H-33z"></path></g></svg> */}
                    <div class="relative flex flex-col items-start">
                        <h3 class="text-xl font-bold">  Diet Chart</h3>
                        
                    </div>
                </div>

                

                <a href={trainerData.diet_plan} class="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group">
                    <span class="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-green-500"></span>
                    <span class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-xl"></span>
                    <span class="relative">Download Chart</span>
                    <svg class="w-5 h-5 ml-2 transition-all duration-200 ease-out transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>

            </div>
            {/* <!-- End First Plan --> */}

            {/* <!-- Start Middle Plan --> */}
            <div class="relative p-8 lg:p-6 xl:p-8 rounded-2xl">

                <div class="absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 bg-blue-50 rounded-2xl"></div>
                <div class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-2xl"></div>
                <div class="relative flex pb-5 space-x-5 border-b border-gray-200 lg:space-x-3 xl:space-x-5">
                    {/* <svg class="w-16 h-16 text-indigo-400 rounded-2xl" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><rect x="0" y="0" width="150" height="150" rx="15"></rect></defs><g fill="none" fill-rule="evenodd"><mask fill="#fff"><use xlink:href="#plan1"></use></mask><use fill="currentColor" xlink:href="#plan1"></use><circle fill-opacity=".3" fill="#FFF" mask="url(#plan1)" cx="125" cy="25" r="50"></circle><path fill-opacity=".3" fill="#FFF" mask="url(#plan1)" d="M-33 83H67v100H-33z"></path></g></svg> */}
                    <div class="relative flex flex-col items-start">
                        <h3 class="text-xl font-bold">Workout Plan</h3>
                        
                    </div>
                </div>

                <a href={trainerData.workout_plan} class="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group">
                    <span class="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-blue-600"></span>
                    <span class="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-xl"></span>
                    <span class="relative">Download Plan</span>
                    <svg class="w-5 h-5 ml-2 transition-all duration-200 ease-out transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>

            </div>
            {/* <!-- End Middle Plan --> */}

        </div>
    </div>
</section>
    )
}

export default DashboardCard;
