import React from 'react'
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit';
import logo from '../../assets/images/img77.jpg'
import { IoIosArrowDown } from "react-icons/io";
import styles from './navbar.module.css'


const Navbar = () => {


  return (
    <>
    <MDBNavbar  className={`${styles.main_container} p-0 shadow-none`}>
      <div className={styles.navContainer}>
        <div className={styles.logo} href='#'>
          <img src= {logo} height='100' alt='' loading='lazy'/>
        </div>

        <div className={styles.rightSide_nav}>
        <div>
          <p>xyz Enterprises Pvt Ltd</p>
        </div>
        <div>
          <IoIosArrowDown/>
        </div>
        </div>

      </div>
    </MDBNavbar>
  </>  
  )
}

export default Navbar