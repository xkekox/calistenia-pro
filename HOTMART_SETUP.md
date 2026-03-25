# Hotmart Setup - Calistenia Pro

## Estrutura recomendada

- `index.html`: página principal de vendas
- `obrigado.html`: página de acesso imediato pós-compra
- `app.html`: área do aluno
- `admin.html`: painel administrativo

## Fluxo recomendado

1. Criar produto na Hotmart
2. Usar a Hotmart como checkout
3. Entregar o acesso em página externa
4. Apontar a página pós-compra para `obrigado.html`
5. Na comunicação do produto, orientar o aluno a entrar no `app.html` com o e-mail da compra

## Campos práticos para configurar

- Nome do produto: `Calistenia Pro - Desafio 21 Dias`
- Tipo: produto digital
- Página de vendas: URL pública do `index.html`
- Página de obrigado / acesso: URL pública do `obrigado.html`
- Suporte: WhatsApp ou e-mail do projeto

## Observações

- `app.html` não depende da Hotmart Club para funcionar
- Se quiser, depois é possível migrar a entrega para dentro do Hotmart Club
- Para publicação rápida, o projeto pode ser hospedado em GitHub Pages, Netlify ou Vercel
