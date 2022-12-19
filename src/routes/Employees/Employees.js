import { Table } from "antd";
import { employeesTableColumns, employeesTableMockData } from "../../utils";
import { StyleEmployees } from "./style";

export default function Employees() {
    return (
        <StyleEmployees>
            <h1>Funcionários</h1>

            <Table columns={employeesTableColumns} dataSource={employeesTableMockData} />
        </StyleEmployees>
    );
}