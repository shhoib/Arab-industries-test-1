import React from 'react'
import styles from './mainContent.module.css'
import {Container} from 'react-bootstrap'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

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

                <Container>
                    <MDBCard>
                      <MDBCardBody>
                       <MDBCardTitle>Basic</MDBCardTitle>
                       <MDBCardText>
                       </MDBCardText>
                       </MDBCardBody>
                     </MDBCard>
                </Container>

        </div>
    </div>
  )
  }

export default MainContent