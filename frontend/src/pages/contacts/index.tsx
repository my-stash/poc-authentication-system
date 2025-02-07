import Header from "../../components/Header";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const ContactsPage: React.FC = () => {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate("/");
    };


    return (
        <>
            <Header />
            <div className="flex flex-col justify-center items-center min-h-screen bg-custom-bg bg-cover bg-center h-screen">
                <section className=" p-6 rounded  bg-  text-center ">
                    <div className="text-teal-50">
                        <h1 className="text-5xl  mb-8 ">
                            Contatos:
                        </h1>
                        <div className=" text-2xl mb-6">
                            <a href="https://github.com/GabrielD1996" target="_blank"  ><p className="  mb-6" >GitHub </p></a>
                            <a href="https://www.linkedin.com/in/gabriel-domingues-faria/" target="_blank"  ><p className="  mb-6" >Linkedin</p></a>
                            <p className="  mb-6" > Você tambem pode entrar em contato comigo atraves do email:</p>
                            <p> gabrieldn1996@gmail.com </p>
                        </div>
                    </div>
                    <div>
                        <Button onClick={handleRedirect} label="Voltar ao inicio" />

                    </div>


                </section>

            </div>
        </>
    )
}

export default ContactsPage