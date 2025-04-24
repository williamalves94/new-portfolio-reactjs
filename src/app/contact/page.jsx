"use client"

import Header from "@/components/header/header";
import Layout from "@/components/layout/Layout";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import axios from "axios";

export default function ContactPage() {
  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const res = await axios.post("/api/contact", formData);
      alert(res.data.message);
      e.target.reset();
    } catch (err) {
      alert("Erro ao enviar mensagem");
      console.error(err);
    }
  };

  return (
    <Layout>
      <div className="bg-zinc-800 h-full">
        <Header title="Entre em contato" />
        <div className="mt-14">
          <div className="flex justify-around flex-wrap gap-4">
            {/* Formulário */}
            <Card className="bg-zinc-700 border-0 w-[600px] h-[auto]">
              <CardHeader>
                <CardTitle>
                  <h1 className="text-2xl text-cyanBlue">Envie sua mensagem aqui</h1>
                </CardTitle>
                <CardDescription className="text-white">
                  Preencha os campos abaixo e entraremos em contato.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col gap-4" onSubmit={sendEmail}>
                  <div className="relative w-full">
                    <input
                      type="text"
                      id="nome"
                      name="name"
                      placeholder=" "
                      required
                      className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-2 pt-4 pb-1 text-white placeholder-transparent focus:border-cyanBlue focus:outline-none"
                    />
                    <label
                      htmlFor="nome"
                      className="absolute left-2 top-1 text-sm text-white transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-1 peer-focus:text-sm peer-focus:text-cyanBlue"
                    >
                      Nome
                    </label>
                  </div>

                  <div className="relative w-full">
                    <input
                      type="tel"
                      id="celular"
                      name="phone"
                      placeholder=" "
                      required
                      className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-2 pt-4 pb-1 text-white placeholder-transparent focus:border-cyanBlue focus:outline-none"
                    />
                    <label
                      htmlFor="celular"
                      className="absolute left-2 top-1 text-sm text-white transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-1 peer-focus:text-sm peer-focus:text-cyanBlue"
                    >
                      Celular
                    </label>
                  </div>

                  <div className="relative w-full">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder=" "
                      required
                      className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-2 pt-4 pb-1 text-white placeholder-transparent focus:border-cyanBlue focus:outline-none"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-2 top-1 text-sm text-white transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-1 peer-focus:text-sm peer-focus:text-cyanBlue"
                    >
                      E-mail
                    </label>
                  </div>

                  <div className="relative w-full">
                    <input
                      type="text"
                      id="assunto"
                      name="subject"
                      placeholder=" "
                      required
                      className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-2 pt-4 pb-1 text-white placeholder-transparent focus:border-cyanBlue focus:outline-none"
                    />
                    <label
                      htmlFor="assunto"
                      className="absolute left-2 top-1 text-sm text-white transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-1 peer-focus:text-sm peer-focus:text-cyanBlue"
                    >
                      Assunto
                    </label>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="mensagem" className="mb-1 text-sm font-bold text-gray-700 ">
                      Mensagem
                    </label>
                    <textarea
                      type="text"
                      name="message"
                      id="mensagem"
                      placeholder="Digite sua mensagem"
                      className="border border-cyanBlue p-2 rounded h-24 resize-none outline-none bg-transparent text-white placeholder-gray-400"
                      required
                    ></textarea>
                  </div>


                  <button
                    className="bg-zinc-700 w-full border border-cyanBlue font-bold mt-4 hover:bg-zinc-800 px-4 py-2 rounded hover:text-white text-white transition" >
                    Enviar
                  </button>
                </form>
              </CardContent>
            </Card>

            {/* Contatos */}
            <Card className="bg-zinc-700 border-0 w-full max-w-sm max-h-fit p-10 flex flex-col items-center">

              <CardContent className="p-0 w-full flex flex-col items-center text-center">
                <h2 className="text-2xl text-cyanBlue font-bold mb-4">Contatos</h2>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-center gap-2">
                    <FiMail className="text-cyanBlue" size={20} />
                    <span className="text-white text-lg">williamcostacardoso94@gmail.com</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiPhone className="text-cyanBlue" size={20} />
                    <span className="text-white text-lg">+55 (15) 99778-1428</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaLinkedin className="text-cyanBlue" size={20} />
                    <a
                      href="https://www.linkedin.com/in/william-alves-4b7683221/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline hover:text-cyanBlue text-lg"
                    >
                      William Alves
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FiMapPin className="text-cyanBlue" size={20} />
                    <span className="text-white text-lg">Sorocaba - SP</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </Layout>
  );
}
