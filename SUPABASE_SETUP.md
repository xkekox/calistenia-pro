# Supabase Setup - Calistenia Pro

## Arquivos

- `supabase-config.js`: arquivo real usado pelo app
- `supabase-config.example.js`: modelo de configuracao
- `supabase-schema.sql`: tabela e policies para salvar login e progresso

## Passo a passo

1. Crie um projeto no Supabase.
2. Em `Authentication -> Providers`, deixe `Email` ativo.
3. Decida se vai exigir confirmacao de email.
4. Copie `supabase-config.example.js` para `supabase-config.js`.
5. Preencha:
   - `CALPRO_SUPABASE_URL`
   - `CALPRO_SUPABASE_ANON_KEY`
   - `CALPRO_SUPABASE_REDIRECT_URL`
6. Abra `SQL Editor` e execute `supabase-schema.sql`.
7. Publique o projeto de novo.

## Fluxo do aluno

1. Compra na Hotmart.
2. Hotmart entrega a aula com o link de acesso.
3. Na primeira vez, o aluno entra no `app.html`, usa o mesmo email da compra e cria a senha.
4. Depois disso, entra sempre com email + senha.
5. O progresso e as restricoes ficam salvos na tabela `calpro_user_state`.

## Observacao

- A Hotmart continua sendo a barreira comercial.
- O Supabase cuida do login, sessao, senha e progresso.
- Se o Supabase nao estiver configurado, o app cai em fallback local.
