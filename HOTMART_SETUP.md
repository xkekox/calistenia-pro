# Hotmart Setup - Calistenia Pro

## Estrutura recomendada

- `index.html`: página principal de vendas
- `quiz.html`: avaliação de conversão antes do checkout
- `resultado.html`: resultado personalizado antes da compra
- `obrigado.html`: página de acesso imediato pós-compra
- `app.html`: área do aluno
- `admin.html`: painel administrativo

## Fluxo recomendado

1. Criar produto na Hotmart
2. Usar `index.html` como página principal de vendas
3. Usar `quiz.html` e `resultado.html` como etapa de personalização antes do checkout
4. Colocar o checkout real da Hotmart no botão principal de `resultado.html`
5. Apontar a página pós-compra para `obrigado.html`
6. Na comunicação do produto, orientar o aluno a entrar no `app.html` com o e-mail da compra

## Campos práticos para configurar

- Nome do produto: `Calistenia Pro - Desafio 21 Dias`
- Tipo: produto digital
- Página de vendas: URL pública do `index.html`
- Página de quiz: URL pública do `quiz.html`
- Página de resultado: URL pública do `resultado.html`
- Página de obrigado / acesso: URL pública do `obrigado.html`
- Suporte: WhatsApp ou e-mail do projeto

## Observações

- `app.html` não depende da Hotmart Club para funcionar
- Se quiser, depois é possível migrar a entrega para dentro do Hotmart Club
- Para publicação rápida, o projeto pode ser hospedado em GitHub Pages, Netlify ou Vercel
