import React from "react"
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';


const Customers=()=>{
  const editing = { allowDeleting: true, allowEditing: true };
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  return(
   <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title=" Sheikh Ahmed k Customers" />
      <GridComponent
        dataSource={customersData}
        enableHover={false}
        allowPaging
       pageSettings={{ pageCount: 5 }}
        selectionsettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting>

        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading*/ }
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
    )     
}
export default Customers