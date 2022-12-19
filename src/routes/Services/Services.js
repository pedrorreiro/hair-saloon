import { Table } from "antd";
import React from "react";
import { serviceTableColumns, serviceTableMockData } from "../../utils";
import { StyleServices } from "./style";

export default function Services() {

    return (
        <StyleServices>
            <h1>Serviços</h1>

            <Table columns={serviceTableColumns} dataSource={serviceTableMockData} />
        </StyleServices>
    );
}