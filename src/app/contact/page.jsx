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

export default function ContactPage() {
  return (
    <Layout>
      <div className="bg-zinc-800 h-full">
        <Header title="Entre em contato" />
        <div className="mt-14">
          <div className="flex justify-around">
            {/* Formulário */}
            <Card className="w-[600px] h-[auto]">
              <CardHeader>
                <CardTitle>
                  <h1 className="text-2xl">Envie sua mensagem aqui</h1>
                </CardTitle>
                <CardDescription>Preencha os campos abaixo e entraremos em contato.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="nome" className="mb-1 text-sm font-bold text-gray-700">Nome</label>
                    <input
                      id="nome"
                      type="text"
                      placeholder="Digite seu nome"
                      className="border p-2 rounded outline-none"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="celular" className="mb-1 text-sm font-bold text-gray-700">Celular</label>
                    <input
                      id="celular"
                      type="tel"
                      placeholder="Digite seu número"
                      className="border p-2 rounded outline-none"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1 text-sm font-bold text-gray-700">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Digite seu email"
                      className="border p-2 rounded outline-none"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="assunto" className="mb-1 text-sm font-bold text-gray-700">Assunto</label>
                    <input
                      id="assunto"
                      type="text"
                      placeholder="Digite o assunto"
                      className="border p-2 rounded outline-none"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="mensagem" className="mb-1 text-sm font-bold text-gray-700">Mensagem</label>
                    <textarea
                      id="mensagem"
                      placeholder="Digite sua mensagem"
                      className="border p-2 rounded h-24 resize-none outline-none"
                    ></textarea>
                  </div>
                </form>

              </CardContent>
              <CardFooter className="flex justify-end">
                <button className="bg-blue-500 w-full text-white px-4 py-2 rounded hover:bg-blue-600 transition ">
                  Enviar
                </button>
              </CardFooter>
            </Card>

            {/* Espaço para Imagem */}
            <Card className="w-[400px] h-[auto] flex items-center justify-center">
              <CardContent>
                <h2 className="text-xl font-bold mb-4">Contatos</h2>

                <ul className="space-y-4 text-sm">
                  {/* Email */}
                  <li className="flex items-center gap-2">
                    <FiMail className="text-gray-600" size={18} />
                    <span>williamcostacardoso94@gmail.com</span>
                  </li>

                  {/* Celular */}
                  <li className="flex items-center gap-2">
                    <FiPhone className="text-gray-600" size={18} />
                    <span>(15) 99778-1428</span>
                  </li>

                  {/* LinkedIn */}
                  <li className="flex items-center gap-2">
                    <FaLinkedin className="text-blue-700" size={18} />
                    <a
                      href="https://www.linkedin.com/in/william-alves-4b7683221/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      William Alves
                    </a>
                  </li>

                  {/* Localização */}
                  <li className="flex items-center gap-2">
                    <FiMapPin className="text-gray-600" size={18} />
                    <span>Sorocaba - SP</span>
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
