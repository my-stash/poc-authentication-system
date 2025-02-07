import React, { useState } from "react";
import axios from "axios";
import qs from 'qs';
import Button from "../../components/Button";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = qs.stringify({
      username: email,
      password: password,
    });
    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/jwt/login", data, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      
      const token = response.data.access_token;

      localStorage.setItem("access_token", token);




      const profileResponse = await axios.get("http://127.0.0.1:8000/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })


      navigate("/Autenticado", { state: profileResponse.data })

    } catch (error) {
      navigate("/NaoAutenticado")

    }
  };

  return (

    <div className="flex justify-left items-center min-h-screen bg-custom-bg bg-cover bg-center h-screen ">

      <Header />
      <form
        onSubmit={handleSubmit}
        className=" p-6 ml-10  w-96"
      >
        <h2 className="text-5xl font-bold mb-10 text-teal-50">Faça seu login:</h2>
        <div className="mb-4">

          <label className="block text-2xl text-teal-50">Email:</label>
          <div className=" bg-none focus-within:bg-gradient-to-tr from-teal-500 via-emerald-600 via-46% to-teal-200 p-[1px]  rounded-lg ">
            <input
              type="email"
              className="w-full shadow-2xl shadow-teal-400 text-teal-50 h-10 p-2 rounded-lg outline-none appearance-none bg-zinc-800"

              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

        </div>
        <div className="mb-10">
          <label className="block text-2xl text-teal-50">Senha:</label>
          <div className=" bg-none focus-within:bg-gradient-to-tr from-teal-500 via-emerald-600 via-46% to-teal-200 p-[1px] rounded-lg  ">
            <input
              type="password"
              className="w-full shadow-2xl shadow-teal-400 text-teal-50 h-10 p-2 rounded-lg outline-none appearance-none bg-zinc-800  "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <Button label=" Entrar" />

      </form>
    </div>

  );
};

export default LoginPage;
