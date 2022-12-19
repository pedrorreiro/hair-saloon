import { Button, Form, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import api from '../api';
import { AuthContext } from '../App';

export function NewEmployee() {

    const [users, setUsers] = useState([]);
    const [saloons, setSaloons] = useState([]);
    const [userSelected, setUserSelected] = useState(null);
    const [saloonSelected, setSaloonSelected] = useState(null);

    const [errors] = React.useContext(AuthContext);

    const userChange = (value) => {
        setUserSelected(value);
    }

    const saloonChange = (value) => {
        setSaloonSelected(value);
    }

    const handleSubmit = async () => {
        const values = {
            userId: userSelected,
            saloonId: saloonSelected
        }

        if (Object.values(values).includes(null)) {
            errors.error('Preencha todos os campos');
        } else {
            const { data } = await api.newEmployee(values);
            data.error ? errors.error(data.msg) : errors.success(data.msg);

        }
    }

    useEffect(() => {
        document.title = "Home";

        async function getUsers() {
            const { data } = await api.getUsers();
            setUsers(data);
            console.log(data);
        }

        async function getSaloons() {
            const { data } = await api.getSaloons();
            setSaloons(data);
            console.log(data);
        }

        getUsers();
        getSaloons();

    }, [])

    return (
        <Style>
            <h1>Novo Funcionário</h1>

            <Form onFinish={handleSubmit}>

                <Form.Item label="Usuário">
                    <Select onChange={userChange}>
                        {
                            users.map((user) => {
                                return <Select.Option key={user._id} value={user._id}>{user.name}</Select.Option>
                            })
                        }
                    </Select>
                </Form.Item>

                <Form.Item label="Salão">
                    <Select onChange={saloonChange}>
                        {
                            saloons.map((saloon) => {
                                return <Select.Option key={saloon._id} value={saloon._id}>{saloon.name}</Select.Option>
                            })
                        }
                    </Select>
                </Form.Item>

                <Form.Item shouldUpdate>
                    {() => (
                        <Button htmlType="submit">Enviar</Button>
                    )}
                </Form.Item>


            </Form>
        </Style >
    );
}

const Style = styled.div`
    width: 100%;
`