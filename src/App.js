import React, { useEffect, useState } from 'react';
import SideBar from './component/Sidebar/Sidebar';

import './App.css';
import Table from './component/Table/Table';
import InputComponent from './component/elements/input';
const tableData=[
  {
    invoiceId:"#AHGA68",
  date:"23/09/2022",
  customerName:"Jacob Marcus",
  payableAmount:"$100",
  paidAmount:"$50",
  due:"$500"
},
{
    invoiceId:"#AHGA69",
  date:"24/09/2022",
  customerName:"Sanjay K",
  payableAmount:"$100",
  paidAmount:"$60",
  due:"$40"
},
{
  invoiceId:"#AHGA70",
date:"24/09/2022",
customerName:"Chris",
payableAmount:"$100",
paidAmount:"$30",
due:"$70"
},
{
  invoiceId:"#AHGA71",
date:"25/09/2022",
customerName:"Nolan",
payableAmount:"$100",
paidAmount:"$20",
due:"$80"
}
]
function App() {
  const[data, setData]=useState([]);

  useEffect(()=>{
    fetch("http://jsonplaceholder.typicode.com/todos")
    .then((response)=> response.json())
    .then((json)=> setData(json));
  })
 return (
    <div className="App">
        <div class="row">
          <div class="col-2">
            <SideBar />
          </div>
          <div class="col-10 p-5">
            <div class="row">
            <div class="col-7">
                 <form>
                 <InputComponent
                  icon="<box-icon name='search'></box-icon>"
                  label=""
                  id="search"
                  placeholder="Search"
                  type="text"
                  />
                  </form>
             </div>
             <div class="col-5 position">
             <box-icon name='bell'></box-icon>
             </div>
             
            </div>
            <br />
          
          <h5>Sales information</h5>
          <br />
          <div class="row mb-5">
            <div class="col-3">
              <InputComponent 
              label="Customer"
              id="customer"
              placeholder="Enter Customer Name"
              type="text"
              />
            </div>
            <div class="col-3">
              <InputComponent 
              label="Invoice Id"
              id="Invoice"
              placeholder="Enter Invoice Id"
              type="text"
              />
            </div>
            <div class="col-3">
              <InputComponent 
              label="Start Date"
              id="Starting Date"
              placeholder="Enter Start Date"
              type="date"
              />
            </div>
            <div class="col-3">
              <InputComponent 
              label="End Date"
              id="Ending Date"
              placeholder="Enter End Date"
              type="date"
              />
            </div>
          </div>
          
      <div class="row px-2">
            <Table data = {tableData} />
          </div>
          </div>
          
        </div>
        
      
      </div>
      
  
  );
}

export default App;


