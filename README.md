# Calistenia Pro - Desafio 21 Dias (PWA)

Aplicativo Web Progressivo (PWA) focado em treinos de calistenia em casa com adaptação inteligente baseada em restrições físicas (ombro, joelho, lombar).

## 🚀 Funcionalidades

- **Avaliação Física Inicial:** O usuário seleciona restrições e o algoritmo adapta o treino.
- **Logica de 21 Dias:** Ciclo progressivo de intensidade.
- **Trava de Segurança (Anti-Binge):** O sistema bloqueia o próximo treino até a meia-noite do dia seguinte.
- **Modo Offline:** Estrutura leve que funciona mesmo com internet lenta.

## 📂 Estrutura do Projeto

| Arquivo | Função |
|---------|--------|
| `index.html` | **Landing Page (Vendas):** Otimizada para conversão (AIDA) e tráfego frio. |
| `app.html` | **Aplicação (Produto):** Área de membros com login simulado e player de treino. |
| `database.js` | **Lógica (Backend Local):** Banco de dados JSON com 300+ variações e tags de segurança. |

## 🛠️ Como Usar (Deploy)

Este projeto é estático e pode ser hospedado gratuitamente em qualquer CDN.

### GitHub Pages (Recomendado)
1. Crie um repositório no GitHub.
2. Faça o push destes arquivos.
3. Vá em `Settings > Pages` e selecione a branch `main`.

### Configuração de Vendas
1. Abra `index.html`.
2. Substitua o `href="#"` nos botões de CTA pelo seu link de checkout (Hotmart/Kiwify).

### Configuração de Banco de Dados (Escala)
Para salvar o progresso do usuário na nuvem:
1. Crie um projeto no [Supabase](https://supabase.com).
2. Descomente as linhas de inicialização no `app.html`.
3. Crie a tabela `users` com colunas: `email`, `current_day`, `restriction`, `last_completed`.

## 🛡️ Licença

Proprietário Exclusivo. Todos os direitos reservados.
