import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    const getErrorMessage = () => {
        switch (error.status) {
            case 404:
                return "Página não encontrada.";
            case 500:
                return "Erro interno do servidor.";
            default:
                return "Erro desconhecido.";
        }
    }

    return (
        <div>
            <h1>Ops, ocorreu um erro inesperado.</h1>
            <p>{getErrorMessage()}</p>
        </div>
    );
}