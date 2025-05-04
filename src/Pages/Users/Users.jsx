import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Edit,
  Page,
  Selection,
  Search,
  Filter,
  Sort,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { usersData, usersGrid } from "../../Data/dummy";
import { Header } from "../../Components";

const Users = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 pt-20 bg-white rounded-3xl">
      <Header category="Page" title="Users" />
      <GridComponent
        dataSource={usersData}
        allowPaging
        allowSorting
        toolbar={["Search", "Delete"]}
        editSettings={{
          allowEditing: true,
          allowAdding: true,
          allowDeleting: true,
        }}
        width="auto"
      >
        <ColumnsDirective>
          {usersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Search, Page, Toolbar, Selection, Edit, Sort, Filter]}
        />
      </GridComponent>
    </div>
  );
};

export default Users;
