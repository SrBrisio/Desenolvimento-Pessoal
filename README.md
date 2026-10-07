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


## Rotina personalizada
- Primeiro acesso pergunta a rotina real do usuário.
- Quantidade e dias de jiu-jítsu por semana.
- Quantidade e dias de corrida/caminhada.
- Meta diária de água.
- Horário e duração do jiu-jítsu.
- Horário de trabalho.
- Aba "Minha Rotina" para editar tudo depois.
- Metas passam a usar os dados informados pelo usuário.
- Metas também possuem opção de editar a descrição.


## Metas com prazo e etapas
- título, categoria e prioridade
- data de início e prazo final
- descrição da meta
- etapas personalizadas
- percentual automático de progresso
- marcar etapas como concluídas
- editar meta
- adicionar novas etapas depois
- pausar, retomar, concluir e reabrir metas
- indicador de metas ativas e concluídas
- próximo prazo
- integração com calendário
- dados incluídos no backup


## Painel semanal inteligente
- visão da semana atual, anterior e próxima
- índice geral de consistência
- treinos realizados
- dias em que a meta de água foi alcançada
- percentual de planejamento concluído
- percentual dos checklists
- registros no diário
- eventos concluídos
- evolução de metas
- resumo financeiro semanal
- pontos fortes automáticos
- pontos de atenção para a próxima semana
- consistência por dia
- próximos eventos, planejamentos e prazos de metas


## Sistema de conquistas
- medalhas automáticas
- pontos por conquista
- níveis de evolução
- barra de progresso para o próximo nível
- conquistas de constância, saúde, metas, planejamento, diário e finanças
- histórico de desbloqueios
- progresso parcial das conquistas ainda bloqueadas


## V11 - Supabase + GitHub
- login real por e-mail e senha
- dados salvos no Supabase
- sincronização entre iPhone e computador
- upload manual dos dados locais para a nuvem
- download manual da nuvem
- sincronização automática após alterações
- RLS para isolar os dados por usuário

Leia `SUPABASE_SETUP.md` antes de publicar.


## V12 - Layout responsivo
- sidebar recolhível no computador
- melhor aproveitamento da largura da tela
- cards mais compactos
- dashboard inicial mais limpo
- melhor espaçamento
- menu inferior otimizado no celular
- responsividade refinada para iPhone, Android, tablet e desktop
- cache da PWA atualizado para forçar a nova versão
