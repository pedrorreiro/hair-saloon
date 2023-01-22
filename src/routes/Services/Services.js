import { mdiDelete, mdiPencil } from '@mdi/js';
import Icon from '@mdi/react';
import { Table } from "antd";
import React, { useContext, useEffect, useState } from "react";
import api from "../../api";
import ModalComponent from "../../components/Modal/ModalComponent";
import { SaloonContext } from "../../Contexts/SaloonContext";
import { serviceTableColumns } from "../../utils";
import { StyleServices } from "./style";

export default function Services() {

    const [saloonId, setSaloonId] = useContext(SaloonContext);
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        document.title = "Serviços";

        const getServices = async () => {
            const data = await api.getServicesBySaloon(saloonId);

            const tableData = data.map(d => {
                return {
                    key: d.key,
                    service: d.name,
                    price: "R$ " + d.price,
                    duration: d.duration + " minutos",
                    commission: parseFloat(d.comission * 100) + "%",
                    edit: <Icon path={mdiPencil} size={1} alt="edit" />,
                    delete: <Icon path={mdiDelete} size={1} alt="delete" />,
                    employees: <ModalComponent type={"listFunctionaries"} data={d.functionaries} />,
                }
            });

            setTableData(tableData);
        }

        if (saloonId) getServices();
    }, [saloonId]);

    return (
        <StyleServices>
            <h1>Serviços</h1>

            <Table columns={serviceTableColumns} dataSource={tableData} />
        </StyleServices>
    );
}