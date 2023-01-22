import { mdiDelete } from '@mdi/js';
import Icon from '@mdi/react';
import { Table } from "antd";
import { useContext, useEffect, useState } from "react";
import api from "../../api";
import ModalComponent from "../../components/Modal/ModalComponent";
import { SaloonContext } from "../../Contexts/SaloonContext";
import { employeesTableColumns } from "../../utils";
import { StyleEmployees } from "./style";

export default function Employees() {

    const [functionaries, setFunctionaries] = useState([]);
    const [dataSource, setDataSource] = useState([]);

    const [saloonId, setSaloonId] = useContext(SaloonContext);

    const getFunctionaries = async () => {
        const functionaries = await api.getFunctionaries(saloonId);
        setFunctionaries(functionaries);

        const tableData = functionaries.map(f => {
            return {
                key: f.key,
                name: f.name,
                monthlyEarnings: "R$ 0,00",
                edit: <ModalComponent type={"editFuncionary"} data={f} update={getFunctionaries} />,
                delete: <Icon path={mdiDelete} size={1} alt="delete" />,
            }
        })

        setDataSource(tableData);
    }

    useEffect(() => {
        document.title = "Funcionários";

        if (saloonId) getFunctionaries();

    }, [saloonId])

    return (
        <StyleEmployees>
            <h1>Funcionários</h1>

            <div>
                <ModalComponent type={"addFunctionary"} update={getFunctionaries} />
                <Table columns={employeesTableColumns} dataSource={dataSource} />
            </div>

        </StyleEmployees>
    );
}