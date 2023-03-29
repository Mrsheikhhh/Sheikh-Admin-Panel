import React from "react"
import {Header} from "../components"
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page,Toolbar } from '@syncfusion/ej2-react-grids';


import { employeesData, employeesGrid } from '../data/dummy';
const Employee=()=>{
  return(
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Sheikh Ahmed k Customers" />
      <GridComponent
        dataSource={employeesData}
        enableHover={false}
        allowPaging
        toolbar={["Search"]}
        width="auto"
        pageSettings={{ pageCount: 5 }}>
                <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading*/}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)} 
        </ColumnsDirective>
        <Inject services={[Page, Search,Toolbar]} />
      </GridComponent>
    </div>
    )
}
export default Employee    