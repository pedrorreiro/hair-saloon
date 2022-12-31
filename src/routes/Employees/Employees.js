import { Table } from "antd";
import { useEffect, useState } from "react";
import api from "../../api";
import ModalComponent from "../../components/Modal/ModalComponent";
import { employeesTableColumns } from "../../utils";
import { StyleEmployees } from "./style";

export default function Employees() {

    const [functionaries, setFunctionaries] = useState([]);
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        document.title = "Funcionários";

        const getFunctionaries = async () => {
            let saloonId = parseInt(sessionStorage.getItem("saloon_id"));
            const functionaries = await api.getFunctionaries(saloonId);
            console.log(functionaries);
            setFunctionaries(functionaries);

            const tableData = functionaries.map(f => {
                return {
                    key: f.key,
                    name: f.user.name,
                    monthlyEarnings: "R$ 0,00",
                    edit: <ModalComponent type={"edit"} data={{ name: f.user.name }} />,
                    delete: <img src={require('../../assets/img/icons/trash.png')} alt="delete" />,
                }
            })

            setDataSource(tableData);
        }

        getFunctionaries();

    }, [])

    return (
        <StyleEmployees>
            <h1>Funcionários</h1>

            <Table columns={employeesTableColumns} dataSource={dataSource} />
        </StyleEmployees>
    );
}