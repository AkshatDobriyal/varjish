import {React, useState, Fragment}  from "react";
import {useHistory} from "react-router-dom";
import { Listbox, Transition } from '@headlessui/react'

function SignUp() {

    let historyRef = useHistory()

    


    const Role = [
        {
          id: 1,
          name: 'Trainer',
          avatar:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 2,
          name: 'Trainee',
          avatar:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        }
    ]

    const [selected, setSelected] = useState(Role[0])


    return (
        <div className='flex w-full bg-back h-screen mx-auto content-center justify-center absolute '>


        <div
            className="flex flex-col  content-center w-full my-12 justify-center max-w-md py-2 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
<div className='flex flex-row... justify-center pb-12 '>
            <div className=' flex w-1/4 transform rotate-290 ...'>
                <img src={'https://cdn-icons.flaticon.com/png/512/882/premium/882201.png?token=exp=1635590583~hmac=516eb6afc058b9222d00da9d021dfbe3'}/>
            </div>
    <span className='flex mt-7 '>
        <h1 className='text-5xl pl-2'>
            VARJISH
        </h1>
    </span>
</div>
                <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                 Register Your Account
            </div>
            <div className="mt-8">
                <form action="#" autoComplete="off">
                <div className="flex flex-col mb-2">
                        <div className="flex relative ">
                    <span
                        className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                            </path>
                        </svg>
                    </span>
                            <input type="text" id="sign-up-first"
                                   className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                   placeholder="First Name"/>
                        </div>
                    </div>
                    <div className="flex flex-col mb-2">
                        <div className="flex relative ">
                    <span
                        className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                            </path>
                        </svg>
                    </span>
                            <input type="text" id="sign-up-last"
                                   className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                   placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="flex flex-col mb-2">
                        <div className="flex relative ">
                    <span
                        className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                            </path>
                        </svg>
                    </span>
                            <input type="text" id="sign-up-email"
                                   className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                   placeholder="email"/>
                        </div>
                    </div>
                    <div className="flex flex-col mb-2">
                        <div className="flex relative ">
                        <span
                            className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                </path>
                            </svg>
                        </span>
                            <input type="password" id="sign-up-password"
                                   className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                   placeholder="password"/>
                        </div>
                        
                    </div>
                    <div className="flex flex-col mb-2">
                        <div className="flex relative ">
                    <span
                        className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                            </path>
                        </svg>
                    </span>
                            <input type="text" id="sign-up-contact"
                                   className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                   placeholder="Contact no."/>
                        </div>
                    </div>
                    <Listbox value={selected} onChange={setSelected}>
      <Listbox.Label className="block text-sm font-medium text-gray-700">Select Role:</Listbox.Label>
      <div className="mt-1 relative">
        <Listbox.Button className="relative w-full bg-white border border-gray-300  rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <span className="flex items-center">
            <img src={selected.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
            <span className="ml-3 block truncate">{selected.name}</span>
          </span>
          <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
         
          </span>
        </Listbox.Button>

        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {Role.map((person) => (
              <Listbox.Option
                key={person.id}
                value={person}
              >
                {({ selected, active }) => (
                  <>
                    <div className="flex items-center">
                      <img src={person.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                      <span >
                        {person.name}
                      </span>
                    </div>

                
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
                   
                    <div className="flex w-full mt-8">
                        <button type="submit"
                                className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Register
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex items-center justify-center mt-6">
            </div>
        </div>

        </div>
    )
}

export default SignUp;


