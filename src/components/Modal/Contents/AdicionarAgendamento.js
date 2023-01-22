import { Button, DatePicker, Form, Input, Select, TimePicker } from 'antd';
import moment from 'moment';
import { useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import api from '../../../api';
import { AuthContext } from '../../../App';
import { SaloonContext } from '../../../Contexts/SaloonContext';

export default function AdicionarAgendamento({ setOpen, update }) {

    const [saloonId, setSaloonId] = useContext(SaloonContext);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [type, setType] = useState('time');
    const [errors] = useContext(AuthContext);
    const [clientName, setClientName] = useState(null);
    const [clientPhone, setClientPhone] = useState(null);
    const [agendamentos, setAgendamentos] = useState([]);
    const [services, setServices] = useState([]);
    const [funcionaries, setFuncionaries] = useState([]);
    const [serviceSelected, setServiceSelected] = useState(null);
    const [serviceData, setServiceData] = useState(null);
    const [options, setOptions] = useState([]);
    const { Option } = Select;

    const handleChange = async (value) => {
        setServiceSelected(value);
        const data = await getService(value);
        console.log(data);
        setServiceData(data);
    };

    const getService = async (id) => {
        const service = await api.getServiceById(id);
        return service;
    }

    useEffect(() => {

        const getAgendamentos = async () => {
            const data = await api.getAgendamentos(saloonId);

            setAgendamentos(data);

            // const op = data.map(d => {
            //     return {
            //         label: d.name,
            //         value: d.key,
            //     }
            // })

            // setOptions(op);
        }

        const getFuncionaries = async () => {
            const data = await api.getFunctionaries(saloonId);

            setFuncionaries(data);
        }

        const getServices = async () => {
            const data = await api.getServicesBySaloon(saloonId);

            setServices(data);
        }

        if (saloonId) getAgendamentos();
        getFuncionaries();
        getServices();
    }, [saloonId]);


    const onFinish = async (values) => {
        console.log(values);
        const agendamento = {
            saloonId: saloonId,
            functionaryId: values.functionary,
            clientName: values.clientName,
            clientPhone: values.clientPhone,
            serviceId: values.service,
            date: moment().set({
                'year': date.split('/')[2],
                'month': date.split('/')[1] - 1,
                'date': date.split('/')[0],
                'hour': time[0] + time[1],
                'minute': time.split(':')[1],
            }).toDate(),
        }
        console.log(agendamento);
        try {
            await api.addAgendamento(agendamento);
            update();
            errors.success("Horário agendado com sucesso!")
            setOpen(false);
        } catch (err) {
            errors.error("Erro ao agendar um horário!")
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
                    label="Nome do cliente"
                    name="clientName"
                    rules={[{ required: true, message: 'Por favor, insira o nome do cliente!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Telefone do cliente"
                    name="clientPhone"
                    rules={[{ required: true, message: 'Por favor, insira um telefone para contato!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Serviço"
                    name="service"
                    initialvalues={[]}
                >
                    <Select
                        style={{
                            width: '100%',
                        }}
                        placeholder="Selecione o serviço"
                        onChange={handleChange}
                        options={services.map(s => {
                            return {
                                label: s.name,
                                value: s.key,
                            }
                        })}
                    />
                </Form.Item>

                <Form.Item
                    label="Funcionário"
                    name="functionary"
                    initialvalues={{}}
                >
                    <Select
                        style={{
                            width: '100%',
                        }}
                        placeholder="Selecione o funcionário"
                        onChange={handleChange}
                        options={serviceData?.functionaries?.map(f => {
                            return {
                                label: f.name,
                                value: f.key,
                            }
                        })}
                    />
                </Form.Item>

                <DatePicker onChange={(value) => {
                    const date = moment(new Date(value)).format('DD/MM/YYYY');
                    setDate(date)
                }} />

                <TimePicker format={'HH:mm'} onChange={(value) => {
                    const time = moment(new Date(value)).format('HH:mm');
                    setTime(time)
                }} />



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