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

## V12.1 - Correção do menu lateral
- rodapé não sobrepõe mais as opções do menu
- menu lateral passa a ter rolagem própria no PC
- Minha Rotina, Finanças, Conquistas e demais abas ficam sempre acessíveis
- rodapé fica separado no fim da sidebar
- identificação antiga "Módulo Saúde V1" removida


## V13 - Notificações e lembretes
- lembretes únicos por data e horário
- lembretes diários
- lembretes por dias da semana
- categorias e observações
- ativar, pausar, editar e excluir
- próximos lembretes
- alertas dentro do aplicativo
- suporte a notificações Web quando permitido
- integração com Supabase e calendário

Observação: notificações totalmente em segundo plano, com o app fechado, exigem Web Push/servidor. Esta versão alerta de forma confiável enquanto o app/PWA está ativo.

## V14 - Web Push em segundo plano

Esta versão adiciona:
- assinatura Web Push por dispositivo
- suporte a notificações com o PWA fechado
- envio de assinatura ao Supabase
- sincronização dos lembretes para a tabela `push_reminders`
- botão de teste de Push
- suporte ao iPhone quando o app está instalado na Tela de Início

### Importante
Este ZIP é seguro para o GitHub. Ele contém apenas a chave VAPID pública.

O servidor precisa ser configurado separadamente usando o pacote:
`Meu_Desenvolvimento_V14_Supabase_Backend_PRIVADO.zip`

Nunca envie o conteúdo do pacote privado para o GitHub.

## V15 — Perfil Inteligente

Principais mudanças:
- questionário inicial em 5 etapas
- perfil com idade, sexo, altura, peso, objetivos, rotina, sono e alimentação
- múltiplas atividades físicas com dias, horários, duração e frequência
- sugestões de metas baseadas no questionário
- usuário aceita ou ignora cada meta sugerida
- tela Hoje com agenda automática
- check-in diário de energia, sono e humor
- histórico de evolução do perfil
- botão Refazer meu plano
- layout reorganizado por grupos
- ações rápidas pelo botão +
- tema claro e modo compacto
- preserva Supabase, login, Web Push e demais módulos da V14

Observação: as metas sugeridas são de organização e hábitos. O aplicativo não cria metas agressivas de peso ou alimentação restritiva.


## V15.1 — Correção do questionário
- corrige travamento no botão “Salvar e criar meu plano”
- normaliza dados vindos de versões anteriores
- fecha o questionário antes de processar módulos secundários
- salva o perfil mesmo se algum painel secundário apresentar erro
- mantém sincronização em nuvem sem bloquear o usuário


## V16 — Revisão Semanal + Metas Inteligentes + Salvamento visual

### Salvamento
- todo botão com ação de salvar mostra `Salvando...`
- confirmação visual `✓ Salvo com sucesso`
- aviso quando o processo demora ou falha
- `save()` passou a tratar erros para reduzir telas travadas
- sincronização em nuvem não deve bloquear o salvamento local

### Revisão Semanal
- analisa atividades, água, planejamento, check-ins e outros registros
- calcula um indicador semanal
- destaca pontos fortes
- sugere ajustes pequenos para a próxima semana
- permite transformar ajustes em sugestões de metas

### Metas adaptativas
- usa perfil e os últimos 14 dias de registros
- compara frequência desejada com frequência realmente registrada
- recomenda manter, simplificar ou reorganizar metas
- o usuário sempre escolhe se quer adicionar ou ignorar
- não cria automaticamente metas agressivas de peso ou alimentação


## V17 — Evolução Geral

### Correções
- corrige definitivamente o JavaScript da Revisão Semanal/Metas Adaptativas que estava inserido no bloco de CSS da V16
- sidebar recolhida passa a mostrar apenas ícones, sem textos cortados ou scrollbar
- Perfil & Rotina simplificado, removendo o formulário legado duplicado
- Lembretes e Nova Meta usam um padrão único de formulário responsivo

### Novos recursos
- Central de Pendências
- Histórico de Alterações
- Busca Global
- Modo Foco
- Central de Saúde do Sistema

### Mantido
- questionário inteligente
- Modo Hoje
- check-in
- metas inteligentes/adaptativas
- revisão semanal
- Web Push / notificações
- Supabase
- salvamento visual

## V18 — Refino, Insights e Sincronização Inteligente

Inclui:
- Login | Criar conta
- lembrar e-mail
- manter conectado
- mostrar/ocultar senha
- recuperação de senha
- refinamento específico para iPhone/mobile
- formulários de Metas e Lembretes reorganizados
- mensagens amigáveis de Web Push
- Central de Insights
- Revisão Mensal
- Caixa de Entrada rápida
- Central de Atualizações
- indicador de sincronização
- base para comparação de última alteração local versus nuvem
- manutenção de todos os recursos anteriores

## V19 Fase 1 — Navegação Inteligente

Primeira etapa da V19, focada em reorganizar a experiência antes das automações.

### Arquitetura
- Hoje
- Planejar
- Evoluir
- Vida
- Histórico
- Mais

No iPhone, a barra inferior mostra apenas Hoje, Planejar, Evoluir, Vida e Mais.
No desktop, a sidebar mostra as 6 áreas principais.

A tela Hoje passa a destacar 3 prioridades e indicadores rápidos.
Os módulos anteriores continuam existindo, mas ficam organizados dentro dos hubs.

## V19 Fase 1.1 — Navegação Corrigida

Correção da Fase 1:
- todos os cards dos hubs agora abrem seus módulos
- navegação interna não depende mais de um botão visível na sidebar
- Planejar, Evoluir, Vida, Histórico e Mais funcionam como portais reais
- o título da página acompanha o módulo aberto
- cards dos hubs ganharam foco por teclado e indicador visual
- Hoje continua sendo a tela principal

## V19 Fase 2 — Automação Pessoal

Inclui:
- Mensagem Inteligente do Dia
- biblioteca própria com 150 mensagens originais
- seleção por contexto
- bloqueio de repetição por 30 dias
- Modo de Prioridade com 3 prioridades automáticas
- Estado da Semana: tranquila, equilibrada ou sobrecarregada
- Previsão de Semana Difícil
- Plano B automático para tarefas e lembretes não concluídos
- reorganização sugerida para próximo dia disponível

A Fase 2 usa os dados já existentes no aplicativo, sem criar novas abas desnecessárias.

## V19 Fase 3 — Uso de Longo Prazo

Inclui:
- backup automático local diário
- restaurar último backup
- modo offline com fila de sincronização pendente
- arquivo de itens
- detecção de abandono
- modo viagem / rotina temporária
- modelos de semana
- central de erros e diagnóstico
- copiar diagnóstico
- ferramentas de manutenção
- revisão mensal de manutenção
- verificação básica de consistência dos dados

Esta fase foi pensada para permitir uso prolongado sem depender de atualizações frequentes.

## V19 Fase 3.1 — Navegação Funcional

Correção:
- cards dos hubs usam `data-module`
- cliques são ligados via `addEventListener`
- removido o problema dos escapes `\'` em atributos inline
- suporte a mouse, toque, Enter e espaço
- recursos das Fases 1, 2 e 3 preservados

## V19 FINAL — Estável

Acabamento final:
- hub Mais com acessos para Arquivo, Manutenção e Rotina Temporária
- tour inicial da nova navegação
- botão "Voltar para o hub" dentro dos módulos
- painel de versão/estado do aplicativo
- teste rápido de instalação
- backup de segurança antes de futuras atualizações
- revisão de integração das fases anteriores
- manutenção do foco em iPhone/mobile
- status V19 Estável

A V19 Final foi pensada como versão de uso prolongado.

## V19 Final 1.1 — Correção visual do hub Mais

- Arquivo, Manutenção e Rotina Temporária agora aparecem no grid principal de Mais
- funcionam no desktop e no mobile
- cache do service worker atualizado

## V19 Final 1.2 — Correção de salvamento

Correção importante:
- backups automáticos não ficam mais aninhados dentro do próprio estado do aplicativo
- snapshots completos ficam somente em `v19LastBackup`
- histórico interno de backups guarda apenas metadados
- migração automática remove snapshots antigos aninhados
- tratamento específico para limite de armazenamento do navegador
- cache da PWA atualizado

## V19 Final 1.3 — Alimentação Inteligente

- questionário de alimentação usa opções marcáveis em vez de campos livres
- categorias: proteínas, carboidratos/bases, frutas e vegetais
- lista de alimentos a evitar
- cardápio-base existente continua como referência estrutural
- refeições semanais são adaptadas às preferências marcadas
- estilo de preparo (prático, marmitas, cozinhar ou misto) influencia a apresentação
- compatibilidade mantida com os campos antigos `foodsLike` e `foodsAvoid`
- sem metas calóricas ou restrições automáticas

## V19 Final 1.4 — Estabilidade, Dados e Busca

Mudanças:
- salvamento global revisado para todos os módulos
- confirmação padrão “Salvo com sucesso”
- limpeza automática de resíduos do backup automático antigo
- backup automático completo removido
- backup passa a ser manual por exportação/importação
- Central de Dados com contagem de registros e tamanho aproximado
- reset local do usuário com confirmação forte
- reset completo dispositivo + nuvem/Supabase com confirmação forte
- conta de login não é excluída pelo reset
- Busca Global ampliada: módulos, metas, tarefas, lembretes, calendário, diário, finanças, treinos, alimentação, arquivo, lixeira e configurações
- ao focar a busca sem texto, todos os módulos pesquisáveis aparecem
- resultados abrem diretamente o módulo correspondente
- Lixeira temporária de 30 dias
- exclusões de metas, tarefas, lembretes, diário, calendário e finanças passam pela lixeira

## V20 — Treino Mental + correções

- correção do botão de água +250 ml
- retorno do Check-in do Dia em Hoje
- check-in automático para água, treino, tarefas e treino mental
- novo módulo Evoluir → Treino Mental
- 5 jogos: Memória, Caça-palavras, Lógica, Atenção Relâmpago e Inglês na Memória
- progresso local de partidas
- inglês voltado para compreensão e conversa prática
- palavras erradas voltam com mais frequência
- integração do Treino Mental à Busca Global

## V20.1 — Correções dos jogos

- Água +250 ml permanece 250 ml e passa a exibir 0,25 L.
- Memória finaliza no último par.
- Caça-palavras é interativo: primeira + última letra.
- Lógica finaliza após a quinta resposta.
- Atenção dá feedback e conclui após 5 rodadas.
- Inglês abre, registra respostas e conclui normalmente.
- Progresso dos jogos é salvo sem interromper a tela da partida.
