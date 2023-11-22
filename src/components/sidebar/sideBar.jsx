import React from 'react'
import {Container} from 'react-bootstrap'
import styles from './sidebar.module.css'
import { FcNext } from "react-icons/fc";
import { BiLogOutCircle,BiSolidDashboard  } from "react-icons/bi";
import { PiPottedPlantFill } from "react-icons/pi";
import { FaPuzzlePiece } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdSupportAgent } from "react-icons/md";
import { PiWechatLogoFill } from "react-icons/pi";


const SideBar = () => {

  return (
    <div className={styles.sidebar_container}>

     <Container className={`${styles.profile_container} p-2 d-flex flex-column align-items-center`}>
       <div className={`m-1  ${styles.user_profile}`}>
       </div>
        <div className={styles.text_container}>
            <h6 className={`text-center ${styles.username}`}>Ram Mohan <FcNext/></h6>
            <p className={styles.userEmail}>rammohan2@gmail.com</p>
        </div>
     </Container>

     <div className={`${styles.li_container}`}>
        <div>
        <li><h6><BiSolidDashboard  style={{color:'rgb(22, 145, 194)',marginLeft:'5px',marginRight:'8px',fontSize:'21px'}}/>Dashboard</h6></li>
        <li><h6><PiPottedPlantFill style={{color:'rgb(22, 145, 194)',marginLeft:'5px',marginRight:'8px',fontSize:'21px'}}/>Perks</h6></li>
        <li><h6><FaPuzzlePiece style={{color:'rgb(22, 145, 194)',marginLeft:'5px',marginRight:'8px',fontSize:'21px'}}/>Addons</h6></li>
        <li><h6><PiWechatLogoFill style={{color:'rgb(22, 145, 194)',marginLeft:'5px',marginRight:'8px',fontSize:'21px'}}/>FAQ</h6></li>
        <li><h6><MdSupportAgent style={{color:'rgb(22, 145, 194)',marginLeft:'5px',marginRight:'8px',fontSize:'21px'}}/>Support</h6></li>
        </div>
        <h6 className={styles.logout}>logout <BiLogOutCircle style={{ transform: 'rotate(90deg)'}}/></h6>
     </div>
    </div>
  )
}

export default SideBar
