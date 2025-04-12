// Importa o Nodemailer
import nodemailer from "nodemailer";

// Função handler para lidar com requisições POST
export default async function handler(req, res) {
    // Se a requisição não for POST, retorna erro
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Método não permitido" });
    }

    // Desestrutura os dados do corpo da requisição
    const { name, phone, email, subject, message } = req.body;

    // Validação básica: se faltar algum campo, retorna erro
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "Todos os campos obrigatórios devem ser preenchidos." });
    }

    try {
        // Cria um transporter com suas credenciais SMTP (você vai usar variáveis de ambiente aqui)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,         // exemplo: smtp.gmail.com
            port: process.env.SMTP_PORT,         // exemplo: 587
            secure: false,                       // true se usar SSL (porta 465), false se TLS (587)
            auth: {
                user: process.env.SMTP_USER,       // Seu email
                pass: process.env.SMTP_PASS,       // Sua senha ou app password
            },
        });

        // Define o conteúdo do e-mail
        await transporter.sendMail({
            from: `"Contato do Portfólio" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_TO,  // para onde você quer receber (pode ser seu próprio email)
            subject: `[PORTFÓLIO] ${subject}`,
            html: `
        <h3>Nova mensagem de contato</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong><br/>${message}</p>
      `,
        });

        // Retorna sucesso
        res.status(200).json({ message: "Mensagem enviada com sucesso!" });
    } catch (error) {
        console.error("Erro ao enviar email:", error);
        res.status(500).json({ message: "Erro interno ao tentar enviar o email." });
    }
}
