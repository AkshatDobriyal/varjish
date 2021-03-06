import {React, useState, useEffect} from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import {getToken} from '../../services/localStorageServices'
import {useApp} from "../../Context/AppContext"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

function TraineeInfo() {

    const [users, setUsers] = useState(null)
    const {loggedInData}=useApp()

  useEffect(() => {
      console.log(getToken());
    axios
    .get('https://amankothari.pythonanywhere.com/mytrainees/', {headers : {"Authorization": `Token ${getToken()}`}})
    .then((res) => {
      console.log('get threads 🚀', res)
      setUsers(res.data)
      
    })
    .catch((error) => {
      console.error(error.response)
    })
  }, [])

console.log(users)

  // const history = useHistory()
  const [open, setOpen] = useState(false)
  const [id,setId] = useState("")
  const [trainerId,setTrainerId] = useState("")
  const handleOpen = (id, trainerId) => {
  setOpen(true)
  setId(id)  
  setTrainerId(trainerId)
  }
  const handleClose = () => setOpen(false)
  // const handleFillForm = () => {
  //   let url = '/trainer/info'
  //   history.push(url)
  // }

  const [diet,setDiet] = useState(null)
  const [Work,setWork] = useState(null)

  const uploadDiet = (e) =>{
    setDiet(e.target.files[0])
    
  }

  const uploadWork = (e) =>{
    setWork(e.target.files[0])
  }
  // console.log(diet)
  // console.log(Work)

  const handleButton = (e) => {
    console.log(id)
    e.preventDefault();

    var bodyFormData = new FormData();
    bodyFormData.append('trainee', id)
    bodyFormData.append('trainer', trainerId)
    bodyFormData.append('diet_plan', diet); 
    bodyFormData.append('workout_plan', Work);
    
    for (var key of bodyFormData.entries()) {
      console.log(key[0] + ', ' + key[1]);
  }
    axios.post("http://amankothari.pythonanywhere.com/dietandworkout/",
      bodyFormData,
      {headers: { "Content-Type": "multipart/form-data", "Authorization": `Token ${getToken()}` }},
    )
      .then(function (response) {
        //handle success
        console.log(response);
        alert('uploaded')
        setOpen(false)

        setDiet(null)
        setWork(null)
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });

  }

    return (

        <div>
            { users ? (<div id='user_Data'>
                <div className="container flex flex-col mx-auto w-full items-center justify-center">
                    <div className="px-4 py-5 sm:px-6 w-full border dark:bg-gray-800 bg-white shadow mb-2 rounded-md">
                        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                            Trainees
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
                            Details and informations about Trainees.
                        </p>
                    </div>
                    <ul className="flex flex-col">
                        {users.map((u, key) => {
                            return (
                                <div>
                                    <li className="border-gray-400 flex flex-row mb-2 " id='list_1'
                                        onClick={() => handleOpen(u.trainee, u.trainer)}>
                                        <div
                                            className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                                            <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                                <a href={u.profile} className="block relative">
                                                    <img alt="profile" src={u.profile}
                                                         className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                                </a>
                                            </div>
                                            <div className="flex-1 pl-1 md:mr-16">
                                                <div className="font-medium dark:text-white">
                                                    {u.firstname} {u.lastname}
                                                </div>
                                                <div className="text-gray-600 dark:text-gray-200 text-sm">
                                                    {u.email}
                                                </div>
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-200 text-xs">
                                                {u.contact_number}
                                            </div>
                                            <button className="w-24 text-right flex justify-end">
                                                <svg width="12" fill="currentColor" height="12"
                                                     className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
                                                     viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                    </li>

                                    <div>
                                        <Modal
                                            aria-labelledby="transition-modal-title"
                                            aria-describedby="transition-modal-description"
                                            open={open}
                                            onClose={handleClose}
                                            closeAfterTransition
                                            BackdropComponent={Backdrop}
                                            BackdropProps={{
                                                timeout: 500,
                                            }}
                                        >
                                            <Fade in={open}>
                                                <Box className="card" sx={style}>
                                                    <a href={u.profile} className="block relative">
                                                        <img alt="profile" src={u.profile}
                                                             className="mx-auto object-cover rounded-full h-20 w-20 "/>
                                                    </a>
                                                    <Typography
                                                        display="flex"
                                                        justifyContent="center"
                                                        alignItems="center"

                                                        className="card-header"
                                                        id="transition-modal-title"
                                                        variant="h6"
                                                        component="h2"
                                                        mx={{align: "center"}}
                                                    >
                                                        {u.name}
                                                    </Typography>
                                                    <Typography
                                                        display="flex"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                        className="card-body"
                                                        id="transition-modal-description"
                                                        sx={{mt: 2, mb: 2}}
                                                    >
                                                        {u.contact}
                                                    </Typography>
                                                    <Typography
                                                        display="flex"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                        className="card-body"
                                                        id="transition-modal-description"
                                                        sx={{mt: 2, mb: 2}}
                                                    >
                                                        {u.email}
                                                    </Typography>


                                                    <Box
                                                        display="flex"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                        className="card-body"
                                                        id="transition-modal-description"
                                                        sx={{mt: 2, mb: 2}}
                                                    >


                                                        <Button variant="contained"
                                                                id='diet_button'
                                                                component="label"
                                                                style={{justifyContent: 'center', marginRight: 5}}
                                                        >
                                                            Diet-Plan
                                                            <input
                                                                type="file"
                                                                name="diet"
                                                                onChange={(e) => uploadDiet(e)}
                                                                hidden
                                                            /></Button>
                                                        <Button variant="contained"
                                                                component="label"
                                                                style={{justifyContent: 'center'}}

                                                        >
                                                            Workout-Plan
                                                            <input
                                                                type="file"
                                                                name="Work"
                                                                onChange={(e) => uploadWork(e)}
                                                                hidden
                                                            /></Button>
                                                    </Box>
                                                    <Box
                                                        display="flex"
                                                        justifyContent="center"
                                                        alignItems="center"
                                                        className="card-body"
                                                        id="transition-modal-description"
                                                        sx={{mt: 2, mb: 2}}
                                                    >
                                                        <Button variant="outlined" onClick={(e) => handleButton(e)}
                                                                sx={{mt: 2}}>Upload</Button>
                                                    </Box>
                                                </Box>

                                            </Fade>
                                        </Modal>
                                    </div>
                                </div>
                            )
                        })}

                    </ul>
                </div></div>) : (<div>

                <div className=" flex justify-center items-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-800 mt-20"></div>
            </div>
                </div>)}

        </div>



    )
}

export default TraineeInfo
