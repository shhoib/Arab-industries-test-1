import React from 'react';
import styles from './mainContent.module.css';
import { Container } from 'react-bootstrap';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import { LuUser2 } from 'react-icons/lu';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { TbTriangleFilled } from 'react-icons/tb';
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { IoMdNotifications } from "react-icons/io";




const cardData = [
  {
    title: 'Basic',
    originalPrice: '$ 89.99/mo',
    discountedPrice: '$ 9.99/mo',
    buttonColor: 'rgb(255,231,169)',
    exploreColor: 'rgb(255,231,169)',
  },
  {
    title: 'Standard',
    originalPrice: '$ 189.99/mo',
    discountedPrice: '$ 99.99/mo',
    buttonColor: 'rgb(255,148,148)',
    exploreColor: 'rgb(255,148,148)',
  },
  {
    title: 'Premium',
    originalPrice: '$ 389.99/mo',
    discountedPrice: '$ 199.99/mo',
    buttonColor: 'rgb(231,162,255)',
    exploreColor: 'rgb(231,162,255)',
  },
];

const MainContent = () => {
  
  return (
    <div className={styles.mainContent_container}>
      <div className={`${styles.left_container}`}>
        <Container className={styles.banner}>
          <Container className={styles.heading}>
            <h4 style={{ fontWeight: '600' }}>Choose a plan that's just right for you !</h4>
          </Container>

          <Container className={` ${styles.button_container}`}>
            <div className={styles.border_only}>
              <div className={styles.monthly}>
                <h6>Monthly</h6>
              </div>
              <div className={`d-flex justify-content-center ${styles.anually}`}>
                <h6 className='d-flex align-items-center'>Annually</h6>
                <span style={{ fontSize: '12px', color: 'green' }}>-10%</span>
              </div>
            </div>
          </Container>
        </Container>

        <Container className={styles.card_container}>
          {cardData.map((card, index) => (
            <MDBCard key={index} className={`shadow ${styles.each_card}`} style={{ width: '19rem' }}>
              <MDBCardBody>
                <MDBCardTitle className={styles.card_heading} style={{ margin: '0' }}>
                  {card.title}
                </MDBCardTitle>
                <MDBCardText style={{ margin: '0' }}>
                  <p className={`my-1 ${styles.strikethrough_text}`}>{card.originalPrice}</p>
                  <h2 style={{ fontSize: '24px' }}>{card.discountedPrice}</h2>
                  <MDBBtn style={{ color: 'rgb(29, 29, 29)', backgroundColor: card.buttonColor }}>
                    Get Started <HiOutlineArrowLongRight style={{ fontSize: '23px' }} />
                  </MDBBtn>
                  <hr />
                  <p>what you'll get:</p>
                  <p><LuUser2 style={{ marginRight: '8px' }} /> Upto 25 Users</p>
                  <p><IoCloudUploadOutline style={{ marginRight: '8px' }} /> Upto 25 Storage</p>
                  <p><MdOutlineMailOutline style={{ marginRight: '8px' }} /> Email Support</p>
                  <h6 className={`text-center ${styles.explore}`}>
                    EXPLORE FEATURES <TbTriangleFilled style={{ transform: 'rotate(90deg)', fontSize: '10px', color: card.exploreColor }} />
                  </h6>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          ))}
        </Container>


        <Container className={styles.bottom_container}>
            <Container className={styles.bottomLeft_container}>
              <div className={styles.free_container}>
                <div className={styles.free_div}><p>Free Forever</p></div>
                <h4>Free Starter</h4>
                <p>The quickest and easiest way to try Protocols with basic functionalities</p>
                <MDBBtn style={{ color: 'rgb(29, 29, 29)', backgroundColor: 'rgb(198,255,142)',marginTop:'5px' }}>
                      Get Started <HiOutlineArrowLongRight style={{ fontSize: '23px' }} />
                </MDBBtn>
              </div>

              <div className={styles.rightOfBottonLeft}>
                <p>what you'll get:</p>
                <p><LuUser2 style={{ marginRight: '8px' }} /> Upto 8 Users</p>
                <p><IoCloudUploadOutline style={{ marginRight: '8px' }} /> Upto 25 Storage</p>
                <p><MdOutlineMailOutline style={{ marginRight: '8px' }} /> Email Support</p>
                <div className='d-flex'>
                  <p><LiaCheckDoubleSolid style={{ marginRight: '8px' }}/></p>
                  <p> Basic of Documents,Task Flow,Voting,Accounting,Banking,Notes,
                    Investor,Director and Team Management included</p>
                </div>
              </div>
            </Container>


          <Container className={styles.bottomRight_container}>
              <div className={styles.leftOfBottomRight}>
                <div className={styles.connect_text}><p>Lets's Connect</p></div>
                <h4>Enterprise Plan</h4>
                <p>Effortlessly customise and fine-tune services as your needs shift, ensuring the perfect tools for success</p>
                <MDBBtn style={{ color: 'rgb(29, 29, 29)', backgroundColor: 'rgb(138,185,255)',marginTop:'5px' }}>
                    Contact Us <HiOutlineArrowLongRight style={{ fontSize: '23px' }} />
                </MDBBtn>
              </div>

              <div className={styles.rightOfBottomRight}>
               <p>what you'll get:</p>
                <p><LuUser2 style={{ marginRight: '8px' }} /> More than 75 Users</p>
                <p><LiaCheckDoubleSolid style={{ marginRight: '8px' }}/> Customization of all other features</p>
              </div>

          </Container>
        </Container>
         <p className={styles.importantMSG}>*some unique features are provided as add-ons with individual plans for each features</p>
      </div>
      <div className={styles.leftover}>
  <div className={styles.notificationWrapper}>
    <div className={styles.notificationCount}>3</div>
    <div className={styles.bellIcon}>
      <h2><IoMdNotifications style={{ color: 'skyblue' }} /></h2>
    </div>
  </div>
</div>

    </div>
  );
};

export default MainContent;
