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

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="h-full bg-gray-100">
        <Header title="Projetos" />
        <div className="flex items-center justify-center bg-gray-100">
          <Card className="w-[300px]">
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
          <Card className="w-[300px]">
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
          <Card className="w-[300px]">
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
      </div>
    </Layout>
  );
}
