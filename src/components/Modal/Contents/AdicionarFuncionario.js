import { Button, Form, Input, Select } from 'antd';
import { useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import api from '../../../api';
import { AuthContext } from '../../../App';
import { SaloonContext } from '../../../Contexts/SaloonContext';

export default function Adicionar({ setOpen, update }) {

    const [saloonId, setSaloonId] = useContext(SaloonContext);
    const [errors] = useContext(AuthContext);
    const [services, setServices] = useState([]);
    const [servicesSelected, setServiceSelected] = useState([]);
    const [options, setOptions] = useState([]);

    const handleChange = (value) => {
        setServiceSelected(value);
    };

    useEffect(() => {

        const getServices = async () => {
            const data = await api.getServicesBySaloon(saloonId);

            setServices(data);

            const op = data.map(d => {
                return {
                    label: d.name,
                    value: d.key,
                }
            })

            setOptions(op);
        }

        if (saloonId) getServices();
    }, [saloonId]);


    const onFinish = async (values) => {

        const funcionary = {
            name: values.name,
            saloonId: saloonId,
            servicesId: servicesSelected,
        }

        try {
            await api.addFunctionary(funcionary);
            update();
            errors.success("Funcionário criado com sucesso!")
            setOpen(false);
        } catch (err) {
            errors.error("Erro ao criar funcionário!")
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }

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
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Serviços"
                    name="services"
                    initialvalues={[]}
                >
                    <Select

                        mode="multiple"
                        style={{
                            width: '100%',
                        }}
                        placeholder="Selecione os serviços"
                        onChange={handleChange}
                        options={options}
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
    width: 80%;

    form{
        text-align: right;
    }
`   