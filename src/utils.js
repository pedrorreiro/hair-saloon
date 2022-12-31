import ModalComponent from './components/Modal/ModalComponent'

const colors = {
    primary: '#02212A',
    secondary: '#00141A',
    hover: '#01181F',
    white: '#FFFFFF',
    yellow: '#ffcc30',
}

const menuOptions = {
    "Home": {
        show: true,
        route: "/",
        icon: require('./assets/img/icons/home.png'),
    },
    "Finanças": {
        show: true,
        route: "/finances",
        icon: require('./assets/img/icons/finances.png'),
    },
    "Agendamentos": {
        show: true,
        route: "/agendamentos",
        icon: require('./assets/img/icons/agendamentos.png'),
    },
    "Funcionários": {
        show: true,
        route: "/employees",
        icon: require('./assets/img/icons/funcionarios.png'),
    },
    "Serviços": {
        show: true,
        route: "/services",
        icon: require('./assets/img/icons/servicos.png'),
    },
    "Sair": {
        show: false,
        route: null,
        icon: require('./assets/img/icons/logout.png')
    }
}

const serviceTableColumns = [
    {
        title: 'Serviço',
        dataIndex: 'service',
        key: 'service',
    },
    {
        title: 'Preço',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Comissão/Funcionário',
        dataIndex: 'commission',
        key: 'commission',
    },
    {
        title: 'Duração Estimada',
        dataIndex: 'duration',
        key: 'duration',
    },
    {
        title: 'Editar',
        dataIndex: 'edit',
        key: 'edit',
    },
    {
        title: 'Excluir',
        dataIndex: 'delete',
        key: 'delete',
    },
    {
        title: 'Funcionários',
        dataIndex: 'employees',
        key: 'employees',
    }
]

const employeesTableColumns = [
    {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: "Ganhos Mensais",
        dataIndex: 'monthlyEarnings',
        key: 'monthlyEarnings',
    },
    {
        title: 'Editar',
        dataIndex: 'edit',
        key: 'edit',
    },
    {
        title: 'Excluir',
        dataIndex: 'delete',
        key: 'delete',
    }
]

const serviceTableMockData = [
    {
        key: '1',
        service: 'Corte',
        price: 'R$ 30,00',
        commission: '40%',
        duration: '30 minutos',
        edit: <img src={require('./assets/img/icons/edit.png')} alt="edit" />,
        delete: <img src={require('./assets/img/icons/trash.png')} alt="delete" />,
        employees: <img src={require('./assets/img/icons/employees.png')} alt="list" />,
    },
    {
        key: '2',
        service: 'Barba',
        price: 'R$ 20,00',
        commission: '40%',
        duration: '20 minutos',
        edit: <img src={require('./assets/img/icons/edit.png')} alt="edit" />,
        delete: <img src={require('./assets/img/icons/trash.png')} alt="delete" />,
        employees: <img src={require('./assets/img/icons/employees.png')} alt="list" />,
    }
]

const employeesTableMockData = [
    {
        key: '1',
        name: 'João',
        monthlyEarnings: 'R$ 1.000,00',
        // edit: <img src={require('./assets/img/icons/edit.png')} alt="edit" />,
        edit: <ModalComponent type={"edit"} data={{ name: 'João' }} />,
        delete: <img src={require('./assets/img/icons/trash.png')} alt="delete" />,
    },
    {
        key: '2',
        name: 'Maria',
        monthlyEarnings: 'R$ 1.000,00',
        // edit: <img src={require('./assets/img/icons/edit.png')} alt="edit" />,
        edit: <ModalComponent type={"edit"} data={{ name: 'Maria' }} />,
        delete: <img src={require('./assets/img/icons/trash.png')} />,
    }
]

const firebaseErrors = [
    {
        code: "auth/invalid-email",
        message: "O e-mail digitado é inválido."
    },
    {
        code: "auth/user-disabled",
        message: "O usuário foi desabilitado."
    },
    {
        code: "auth/user-not-found",
        message: "O usuário não foi encontrado."
    },
    {
        code: "auth/wrong-password",
        message: "A senha digitada é inválida."
    },
    {
        code: "auth/email-already-in-use",
        message: "O e-mail digitado já está em uso."
    },
    {
        code: "auth/weak-password",
        message: "A senha digitada é muito fraca."
    },
    {
        code: "auth/operation-not-allowed",
        message: "Operação não permitida."
    }
]

const getError = (code) => {
    let error = firebaseErrors.find(error => error.code === code);
    return error ? error.message : "Erro desconhecido";
}

export {
    getError,
    colors,
    menuOptions,
    serviceTableColumns,
    serviceTableMockData,
    employeesTableColumns,
    employeesTableMockData,
}

