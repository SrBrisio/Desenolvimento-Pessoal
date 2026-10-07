# Meu Desenvolvimento — versão GitHub Pages / iPhone

Esta versão foi adaptada para:
- GitHub Pages
- iPhone / Safari
- Android
- computador
- instalação na Tela de Início como PWA
- layout responsivo para telas pequenas

## Arquivos que precisam ficar na raiz do repositório
- index.html
- manifest.json
- service-worker.js
- icon-192.png
- icon-512.png

## Publicar no GitHub Pages
1. Crie um repositório novo no GitHub, por exemplo `meu-desenvolvimento`.
2. Envie TODOS os arquivos desta pasta para a raiz do repositório.
3. Abra o repositório > Settings > Pages.
4. Em "Build and deployment", escolha "Deploy from a branch".
5. Selecione a branch `main` e a pasta `/ (root)`.
6. Clique em Save.
7. O GitHub vai gerar um endereço parecido com:
   `https://SEU-USUARIO.github.io/meu-desenvolvimento/`

## Abrir no iPhone
1. Abra o endereço do GitHub Pages no Safari.
2. Toque no botão Compartilhar.
3. Escolha "Adicionar à Tela de Início".
4. Confirme "Adicionar".
5. O app passará a aparecer como um ícone na Tela de Início.

## Importante sobre os dados
Os dados continuam sendo armazenados localmente no navegador/aplicativo por `localStorage`.
Isso significa que os dados do computador e do iPhone NÃO sincronizam automaticamente.
Use a aba Backup para exportar/restaurar os dados entre dispositivos.

Para sincronização automática entre iPhone e computador, a próxima etapa seria usar um banco de dados online.


## Planejamento semanal
- visão de segunda a domingo
- semana anterior, atual e próxima
- data, horário, categoria, prioridade e observações
- concluir, reabrir, excluir e copiar item para a semana seguinte
- indicadores de progresso
- integração com backup
