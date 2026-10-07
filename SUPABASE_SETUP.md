# Configurar Supabase + GitHub Pages

A V11 usa:
- GitHub Pages para hospedar o aplicativo
- Supabase Auth para login por e-mail e senha
- Supabase Database para sincronizar os dados entre dispositivos

## 1. Criar o projeto no Supabase
1. Entre no Supabase e crie um novo projeto.
2. Aguarde o projeto ficar pronto.

## 2. Criar a tabela e as regras de segurança
1. No Supabase, abra **SQL Editor**.
2. Abra o arquivo `supabase_setup.sql` deste pacote.
3. Copie todo o conteúdo.
4. Cole no SQL Editor.
5. Execute.

Esse SQL cria a tabela `app_state` e ativa Row Level Security (RLS), permitindo que cada usuário acesse apenas a própria linha.

## 3. Pegar URL e chave pública
No painel do Supabase, procure as configurações/API do projeto.
Você precisa de:
- Project URL
- Publishable key (ou anon key, dependendo da interface exibida)

NUNCA coloque a `service_role` no GitHub ou no navegador.

## 4. Editar config.js
Abra `config.js` e troque:

SUPABASE_URL: "COLE_AQUI_SUA_SUPABASE_URL"
SUPABASE_PUBLISHABLE_KEY: "COLE_AQUI_SUA_CHAVE_PUBLICAVEL"

pelos valores do seu projeto.

Exemplo:
window.APP_CONFIG = {
  SUPABASE_URL: "https://xxxxxxxx.supabase.co",
  SUPABASE_PUBLISHABLE_KEY: "sb_publishable_..."
};

## 5. Enviar a V11 ao GitHub
Substitua os arquivos antigos do repositório pelos arquivos desta versão.
Os novos arquivos importantes são:
- index.html
- config.js
- supabase_setup.sql
- manifest.json
- service-worker.js
- ícones

Faça o commit e aguarde o GitHub Pages atualizar.

## 6. Criar a conta
Abra o aplicativo.
1. Toque em **Criar conta**.
2. Informe e-mail e senha.
3. Se o Supabase exigir confirmação de e-mail, abra o e-mail recebido e confirme.
4. Depois volte ao app e faça login.

## 7. Levar seus dados antigos do iPhone para a nuvem
No dispositivo que JÁ possui seus dados locais:
1. Entre com sua conta.
2. Abra a aba **Nuvem**.
3. Toque em **Enviar dados deste dispositivo**.
4. Confirme.

Depois, no computador:
1. Entre com a mesma conta.
2. O app baixará o estado salvo na nuvem.
3. A partir daí as alterações serão sincronizadas.

## Como a sincronização funciona
- O app continua salvando localmente para ficar rápido.
- Depois de alterações, agenda um envio automático para o Supabase.
- Ao entrar em um novo dispositivo, baixa o estado da nuvem.
- A aba Nuvem possui botões manuais para envio e download.

## Segurança
- Não use `service_role` no navegador.
- A chave pública/publicável pode existir no frontend quando o banco está protegido por RLS.
- O SQL deste pacote limita cada usuário ao próprio `user_id`.
