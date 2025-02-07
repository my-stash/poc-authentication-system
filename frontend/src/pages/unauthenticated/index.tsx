import Header from "../../components/Header";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const UnauthenticatedUser: React.FC = () => {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate("/");
    };


    return (
        <>
            <Header />
            <div className="flex flex-col justify-center items-center min-h-screen bg-custom-bg bg-cover bg-center h-screen">
                <div className=" p-6 rounded   text-center ">
                    <h1 className="text-5xl text-teal-50 mb-8 ">
                        Erro ao fazer login.
                    </h1>
                    <Button onClick={handleRedirect} label="Tentar novamente" />

                </div>
                
            </div>
        </>
    )
}

export default UnauthenticatedUser