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
                      className="border p-2 rounded outline-none
"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="celular" className="mb-1 text-sm font-bold text-gray-700">Celular</label>
                    <input
                      id="celular"
                      type="tel"
                      placeholder="Digite seu número"
                      className="border p-2 rounded outline-none
"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1 text-sm font-bold text-gray-700">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Digite seu email"
                      className="border p-2 rounded outline-none
"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="assunto" className="mb-1 text-sm font-bold text-gray-700">Assunto</label>
                    <input
                      id="assunto"
                      type="text"
                      placeholder="Digite o assunto"
                      className="border p-2 rounded outline-none
"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="mensagem" className="mb-1 text-sm font-bold text-gray-700">Mensagem</label>
                    <textarea
                      id="mensagem"
                      placeholder="Digite sua mensagem"
                      className="border p-2 rounded h-24 resize-none outline-none
"
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
                <img
                  src="/caminho/para/sua-imagem.jpg"
                  alt="Imagem ilustrativa"
                  className="w-full h-auto object-cover rounded"
                />
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </Layout>
  );
}
