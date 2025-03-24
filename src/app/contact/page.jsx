import Header from "@/components/header/header";
import Layout from "@/components/layout/layout";
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
            <Card className="w-[600px] h-[400px]">
              <CardHeader>
                <CardTitle>
                  <h1 className="text-2xl">Envie sua mensagem aqui</h1>
                </CardTitle>
                <CardDescription>Descrição simples aqui.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Aqui vai o conteúdo do seu card. Você pode adicionar qualquer
                  coisa dentro deste espaço.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <button className="text-blue-500">Saiba mais</button>
              </CardFooter>
            </Card>

            <Card className="w-[400px] h-[300px]">
              <CardHeader>
                <CardTitle>Exemplo de Card</CardTitle>
                <CardDescription>Descrição simples aqui.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Aqui vai o conteúdo do seu card. Você pode adicionar qualquer
                  coisa dentro deste espaço.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <button className="text-blue-500">Saiba mais</button>
              </CardFooter>
            </Card>
          </div>
          <div></div>
        </div>
      </div>
    </Layout>
  );
}
