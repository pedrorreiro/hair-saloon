import { Button, Form, Input, Select } from "antd";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import api from "../../../api";
import { AuthContext } from "../../../App";
import { SaloonContext } from "../../../Contexts/SaloonContext";

export default function EditarFuncionario({ setOpen, functionary, update }) {

    const [saloonId, setSaloonId] = useContext(SaloonContext);
    const [errors] = useContext(AuthContext);
    const [funcServices, setFuncServices] = useState([]);
    const [allServices, setAllServices] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);

    const handleChange = (value) => {
        console.log(`selected ${value}`);
        setSelectedServices(value);
    };

    const onFinish = async (values) => {
        console.log(values);

        const funcionary = {
            id: functionary.key,
            name: values.name,
            userId: functionary.user.key || 0,
            saloonId: saloonId,
            servicesId: selectedServices,
        }

        console.log(funcionary)

        await api.addFunctionary(funcionary);

        update();

        setOpen(false);

        errors.success("Funcionário atualizado com sucesso");
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);

        errors.error("Erro ao atualizar funcionário");
    }

    useEffect(() => {
        api.getServicesByFuncionary(functionary.key).then(data => {
            const services = data.map(d => {
                return {
                    label: d.name,
                    value: d.key,
                }

            })
            console.log(services);
            setFuncServices(services);
            setSelectedServices(services.map(s => s.value));
        })

        api.getServicesBySaloon(saloonId).then(data => {
            const services = data.map(d => {
                return {
                    label: d.name,
                    value: d.key,
                }

            })

            setAllServices(services);
        })
    }, []);

    return (
        <Style>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Nome"
                    name="name"
                    rules={[{ required: true, message: 'Por favor, insira o nome do funcionário!' }]}
                    initialValue={functionary.name}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Serviços"
                >
                    <Select

                        mode="multiple"
                        style={{
                            width: '100%',
                        }}
                        placeholder="Selecione os serviços"
                        onChange={handleChange}
                        value={selectedServices}
                        options={allServices}

                    />
                </Form.Item>


                <Button type="primary" htmlType="submit">
                    Enviar
                </Button>
            </Form>
        </Style>
    )
}

const Style = styled.div`
`