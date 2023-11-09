import React from "react";
import "./Sidebar.css";
export default function sideBar(){
    return(
        <div class="col">
        <div class="sidebar h-full py-5 d-flex flex-column justify-content-between">
                     <div class="row mb-5 branding-container">
                        <header class=" brand-name">Guvi Sales</header>
                    </div> *
                    <div class="row nav-links">
                        <ul>
                            <li class="nav-link active">
                                <i class='bx bxs-grid-alt '></i>
                                <p>Dashboard</p>
                            </li>
                            <li class="nav-link">
                            <box-icon name='test-tube'></box-icon>
                                <p>Labtest</p>
                            </li>
                            <li class="nav-link">
                            <box-icon name='calendar'></box-icon>
                                <p>Appointment</p>
                            </li>
                            <li class="nav-link">
                            <box-icon type='solid' name='shopping-bags'></box-icon>
                                <p>Medicine Order</p>
                            </li>
                            <li class="nav-link">
                            <box-icon name='wallet'></box-icon>
                                <p>Payment</p>
                            </li>
                            <li class="nav-link">
                            <box-icon name='cog' ></box-icon>
                                <p>Settings</p>
                            </li>
                        </ul>
                    </div>
                    <br/>
                    <div className="footer">
                        <li class="nav-link">
                        <div class="d-flex align-items-center justify-content-start">
                        <box-icon name='help-circle' ></box-icon>
                            <p class="help">Help</p>
                            
                        </div>
                        </li>
                    </div>
        </div>
        </div>
    )
}

