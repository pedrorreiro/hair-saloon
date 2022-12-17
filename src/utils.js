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
        route: "/funcionarios",
        icon: require('./assets/img/icons/funcionarios.png'),
    },
    "Serviços": {
        show: true,
        route: "/servicos",
        icon: require('./assets/img/icons/servicos.png'),
    },
    "Sair": {
        show: false,
        route: null,
        icon: require('./assets/img/icons/logout.png')
    }
}

export {
    colors,
    menuOptions
}

