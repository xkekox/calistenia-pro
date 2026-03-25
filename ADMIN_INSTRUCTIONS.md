# PROTOCOLO DE IMPLANTAÇÃO FINAL - CALISTENIA PRO ELITE

## 1. BANCO DE DADOS (Supabase)
Execute este SQL no editor do Supabase para criar a tabela correta:

```sql
CREATE TABLE exercicios (
  id SERIAL PRIMARY KEY,
  dia INTEGER NOT NULL,
  tipo TEXT NOT NULL,
  nome TEXT NOT NULL,
  descricao TEXT,
  restricao TEXT DEFAULT 'none',
  video_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## 2. CARGA DE DADOS (300 Exercícios)
1. Abra o arquivo `importar_exercicios.html` no navegador.
2. Insira suas credenciais do Supabase.
3. Clique em **INICIAR**. Isso vai popular o banco com treinos para 21 dias, incluindo variações para quem tem dor no ombro, joelho e lombar.

## 3. PUBLICAÇÃO (GitHub)
Suba os seguintes arquivos finais para o repositório:
- `index.html` (Landing Page Elite)
- `app.html` (Web App com Vídeo e Filtro)
- `admin.html` (Painel de Controle)

## 4. CADASTRO DE VÍDEOS
Após a importação automática, os exercícios estarão lá, mas sem vídeo.
1. Acesse `seusite.com/admin.html` (Senha: `admin123`).
2. Filtre por "Sem Vídeo".
3. Vá colando os links do YouTube nos exercícios.

**SISTEMA PRONTO PARA ESCALA.**
