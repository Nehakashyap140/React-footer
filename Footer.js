import React from 'react';
import "./Footer.css";
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MessageIcon from '@mui/icons-material/Message';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import AddLocationIcon from '@mui/icons-material/AddLocation';
export default function Footer()
{
    return(
            <>
                <div className ="footer">
                    <div className="container1">
                        <div className="logo">
                            <img src="https://www.rebliss.in/webpic/rblogo.jpg" width="200px" height ="100px"/>
                            <div className="official">
                            <div className="icon">
                            <EmailIcon />
                            <span>OfficialID</span>
                            </div>
                            <p>(For official Enquiries)</p>
                            </div>
                            <div className="follow">
                                <h1>Follow Us</h1>
                                <span className="icon1">
                                 <span className="call">
                                <AddIcCallIcon/>
                                </span>
                                <span className="message">
                                <MessageIcon/>
                                </span>
                                <span className="wt">
                                <WhatsAppIcon/>
                                </span>
                                <span className="instra">
                                <InstagramIcon/>
                                </span>
                                <span className="fb">
                                <FacebookIcon />
                                </span>
                                </span>
                            </div>
                           <div className="quick">
                               <h1>Quick Link</h1>
                               <div className="list">
                                 <a href="#">Home</a>
                                 <a href="#">About US</a>
                                 <a href="#">Blog</a>
                                 <a href="#">Contact</a>
                                 <a href="#">Get.App</a>
                                 <a href="#">Login</a>
                               </div>
                           </div>
                        </div>
                     </div>
                     <div className="container2">
                         <div className="address">
                            <AddLocationIcon/>
                            <span>Address:-</span>
                            <p>Kutumbh Care Distribution Network Pvt Ltd,</p>
                            <p>B 154,B Block Sector 63, Noida,</p>
                             <p> Uttar Pradesh 201301</p>
                             <h1>Contact No.</h1>
                         </div>
                         <div className="empolyee">
                                <button>Empolyee Login</button>

                         </div>

                     </div>
                </div>
            </>
    )
};