import { Modal } from 'antd';
import React from 'react';


export default function ModalComponent({ type, data }) {

    const [open, setOpen] = React.useState(false);

    const types = {
        "edit": {
            component: <img src={require('../../assets/img/icons/edit.png')} alt="edit" onClick={() => setOpen(true)} />,
            title: "Editar"
        },

    }

    return (
        <>
            {types[type].component}
            <Modal
                title={types[type].title}
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={1000}
            >
                <p>Editando funcionário de nome {data.name}</p>
            </Modal>
        </>
    );
}