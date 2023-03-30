import React from "react"
import {ordersData,contextMenuItems,ordersGrid} from "../data/dummy.js"
import {Header} from "../components"
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';     
const Orders=()=>{
  return(
   <div className="m-2 md:m-10 md:p-10 p-2 rounded-3xl bg-white">
    <Header category="page" title="  Sheikh Ahmed k order" />
   
   <GridComponent
id="gridcomp"
dataSource={ordersData}
allowPaging
allowSorting


>
   <ColumnsDirective>
  { ordersGrid.map((item,index)=>
  (
  <ColumnDirective key={index} {...item} />
  
  ))
  }
   
   </ColumnsDirective>
   <Inject services={[Resize,Sort,ContextMenu,Page,ExcelExport,Edit,PdfExport,Filter]} />
   </GridComponent>

   
   
    </div>   
  
    )
}
export default Orders