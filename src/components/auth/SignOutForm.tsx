"use client"
import { useEffect, useState } from "react";
import Input from "../ui/Input";
import LogoX from "../ui/LogoX";
import Button from "../ui/Button";

export default function SignOutForm(){
   const [nome, setNome] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [mes, setMes] = useState("");
  const [dia, setDia] = useState("");
  const [ano, setAno] = useState([]);
  useEffect(() => {
    const anoActual = new Date().getFullYear();
    const anosDisponiveis = [];
    for (let i = anoActual; i >= 1900; i--) {
      anosDisponiveis.push(i);
    }
    setAno(anosDisponiveis);
  }, []);
    return (
        <form action="" className="flex space-y-5 *:w-full rounded-2xl bg-black lg:p-8 p-5 flex-col w-full justify-center items-center">
            <LogoX position={2} size={38} />
            <h3 className="mt-3 text-2xl font-medium text-center text-gray-200">
          Criar Sua Conta
        </h3>
        <Input placeholder={"Nome"} value={nome} onChange={t => setNome(t) }></Input>
        <Input placeholder={"Email"} value={email} onChange={e => setEmail(e) }></Input>
        <Input placeholder={"Senha"} value={password} onChange={s => setPassword(s) }></Input>
        <h2 className="text-white text-lg font-bold">Data de Nascimento</h2>
            <p className="text-gray-500">
              Isso não será exibido publicamente. Confirme sua própria idade,
              mesmo se esta conta for de uma empresa, de um anima de estimação
              ou outro.
            </p>
        <div className="flex space-x-3">
            <select
              className="block w-full px-4 py-4 mt-2 text-gray-400 placeholder-gray-500 border rounded-lg bg-black border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              name=""
              id=""
              value={mes}
              onChange={(e) => setMes(e.target.value)}
            >
              {[
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Desembro",
              ].map((mes, index) => (
                <option key={index + 1} value={index + 1}>
                  {mes}
                </option>
              ))}
            </select>
            <select
              className="block w-full px-4 py-4 mt-2 text-gray-400 placeholder-gray-500 border rounded-lg bg-black border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              name=""
              id=""
              value={dia}
              onChange={(e) => setDia(e.target.value)}
            >
              {Array.from({ length: 31 }, (_, i) => i + 1).map((dia) => (
                <option key={dia} value={dia}>
                  {dia}
                </option>
              ))}
            </select>
            <select
              className="block w-full px-4 py-4 mt-2 text-gray-400 placeholder-gray-500 border rounded-lg bg-black border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              name=""
              id=""
            >
              <option value="">Ano</option>
              {ano.map((ano) => (
                <option key={ano} value={ano}>
                  {ano}
                </option>
              ))}
            </select>
          </div>
          <Button size={1} >Avançar</Button>
        </form>
    )
}