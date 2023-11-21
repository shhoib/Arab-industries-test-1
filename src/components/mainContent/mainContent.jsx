import React from 'react'
import styles from './mainContent.module.css'
import {Container} from 'react-bootstrap'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText,MDBBtn } from 'mdb-react-ui-kit';
import { LuUser2 } from "react-icons/lu";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { TbTriangleFilled } from "react-icons/tb";



const MainContent = () => {


  return (
    <div className={styles.mainContent_container}>
        <div className={`${styles.left_container}`}>
            <Container className={styles.banner}>
                <Container className={styles.heading}>
                    <h4 style={{fontWeight:'600'}}>Choose a plan that's just right for you !</h4>
                </Container>

                <Container className={`d-flex justify-content-end ${styles.button_container}`}>
                    <div className={styles.border_only}>
                        <div className={styles.monthly}><h6>Monthly</h6></div>
                        <div className={`d-flex justify-content-center ${styles.anually}`}>
                            <h6 className='d-flex align-items-center'>Annually</h6>
                            <span style={{fontSize:'12px',color:'green'}}>-10%</span>
                        </div>
                    </div>
                </Container>
                </Container>

                <Container className={styles.card_container}>
                    <MDBCard className={`shadow ${styles.each_card}`}  style={{ width: '19rem'}}>
                      <MDBCardBody>
                       <MDBCardTitle className={styles.card_heading} style={{margin:'0'}}>Basic</MDBCardTitle>
                       <MDBCardText style={{margin:'0'}}>
                        <p className={styles.strikethrough_text}>$ 89.99/mo</p>
                        <h3 style={{fontSize:'22px'}}>$ 9.99/mo</h3>
                        <MDBBtn style={{color:'black', backgroundColor:'yellow'}}> Get Started <HiOutlineArrowLongRight style={{fontSize:'23px'}}/> </MDBBtn>
                        <hr />
                        <p>what you'll get :</p>
                        <p><LuUser2/> Upto 25 Users</p>
                        <p><IoCloudUploadOutline/> Upto 25 Storage</p>
                        <p><MdOutlineMailOutline/> Email Support</p>
                        <h6 className={`text-center ${styles.explore}`}>EXPLORE FEATURES <TbTriangleFilled style={{ transform: 'rotate(90deg)',fontSize:'10px'}}/></h6>
                       </MDBCardText>
                       </MDBCardBody>
                     </MDBCard>

                    <MDBCard className={`shadow ${styles.each_card}`}  style={{ width: '19rem'}}>
                      <MDBCardBody>
                       <MDBCardTitle className={styles.card_heading}>Basic</MDBCardTitle>
                       <MDBCardText>
                        <p className={styles.strikethrough_text}>$ 89.99/mo</p>
                        <h3>$ 9.99/mo</h3>
                        <MDBBtn className='mx-2' color='secondary'> Secondary </MDBBtn>
                        <hr />
                        <p>what you'll get:</p>
                        <p><LuUser2/> Upto 25 Users</p>
                        <p><IoCloudUploadOutline/> Upto 25 Storage</p>
                        <p><MdOutlineMailOutline/> Email Support</p>
                        <h6 className={`text-center ${styles.explore}`}>EXPLORE FEATURES</h6>
                       </MDBCardText>
                       </MDBCardBody>
                     </MDBCard>

                    <MDBCard className={`shadow ${styles.each_card}`}  style={{ width: '19rem'}}>
                      <MDBCardBody>
                       <MDBCardTitle className={styles.card_heading}>Basic</MDBCardTitle>
                       <MDBCardText>
                        <p className={styles.strikethrough_text}>$ 89.99/mo</p>
                        <h3>$ 9.99/mo</h3>
                        <MDBBtn className='mx-2' color='secondary'> Secondary </MDBBtn>
                        <hr />
                        <p>what you'll get:</p>
                        <p><LuUser2/> Upto 25 Users</p>
                        <p><IoCloudUploadOutline/> Upto 25 Storage</p>
                        <p><MdOutlineMailOutline/> Email Support</p>
                        <h6 className={`text-center ${styles.explore}`}>EXPLORE FEATURES</h6>
                       </MDBCardText>
                       </MDBCardBody>
                     </MDBCard>

                </Container>

        </div>
    </div>
  )
  }

export default MainContent