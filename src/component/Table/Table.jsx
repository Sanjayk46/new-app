import React from "react";
import "./Table.css"
function Table({data =[]}){
return(
    <div className="row px-2">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col" className="selector">
                                    <input className="form-check-input" type="checkbox" value="" id=""/>
                                </th>
                                <th scope="col">Invoive ID</th>
                                <th scope="col">Date</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Payable Amount</th>
                                <th scope="col">Paid Amount</th>
                                <th scope="col">Due</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((d,i)=>(
                            <tr>
                                <th scope="row" className="selector">
                                    <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    value="" 
                                    id=""/>
                                </th>
                                <td>{d.invoiceId}</td>
                                <td>{d.date}</td>
                                <td>{d.customerName}</td>
                                <td>{d.payableAmount}</td>
                                <td>{d.paidAmount}</td>
                                <td>{d.due}</td>
                            </tr>
                               ))}
                        </tbody>
                    </table>
                </div>
)
}

export default Table;
