![Front-end-Fokus - Timer Pomodoro](https://github.com/user-attachments/assets/a83b89d1-3f6d-4f48-8324-e1d3ecd26040)

# 🧘 Fokus

Bem-vindo ao Fokus, uma ferramenta intuitiva para te ajudar a gerenciar seu tempo e aumentar a produtividade. O projeto combina a **técnica Pomodoro** com uma **lista de tarefas (To-Do List)**, permitindo que você se concentre em atividades específicas e acompanhe seu progresso.

Desenvolvido com HTML, CSS e JavaScript puro, este aplicativo permite alternar entre períodos de foco intenso e pausas para descanso, agora com a capacidade de criar, editar e gerenciar suas tarefas diárias.

## 🔨 Funcionalidades Principais

O projeto é dividido em duas funcionalidades principais que trabalham em conjunto:

### Timer Pomodoro
- **Modos de Tempo:** Alterne facilmente entre os modos **Foco** (25 minutos), **Descanso Curto** (5 minutos) e **Descanso Longo** (15 minutos).
- **Contagem Regressiva:** Um timer visual que exibe o tempo restante para cada sessão.
- **Controle de Áudio:** Opção para ativar ou desativar uma música ambiente para ajudar na concentração, além de sons para iniciar, pausar e finalizar a contagem regressiva.
- **Interface Dinâmica:** O plano de fundo e o texto da página mudam de cor de acordo com o modo selecionado (Foco, Descanso Curto ou Longo).

### Gerenciamento de Tarefas (CRUD)
- **Adicionar Tarefas:** Crie e adicione novas tarefas a uma lista.
- **Editar Tarefas:** Modifique a descrição de uma tarefa existente a qualquer momento.
- **Selecionar Tarefa Ativa:** Clique em uma tarefa para selecioná-la como o foco principal da sua sessão Pomodoro.
- **Marcar como Concluída (Automaticamente):** Ao final de um ciclo de "Foco", a tarefa que estava selecionada é automaticamente marcada como concluída.
- **Remover Tarefas:** Limpe sua lista removendo apenas as tarefas concluídas ou todas de uma vez.
- **Persistência de Dados:** As tarefas são salvas no `localStorage` do navegador, garantindo que sua lista não seja perdida ao fechar ou recarregar a página.

## ✔️ Técnicas e Tecnologias Utilizadas

- `HTML5`: Para a estruturação semântica do conteúdo.
- `CSS3`: Para a estilização, layout e responsividade da interface.
- `JavaScript (ES6+)`: Utilizado para toda a lógica do projeto, incluindo:
  - Manipulação do DOM para interatividade em tempo real.
  - Gerenciamento de eventos (clicks, submit).
  - Lógica do timer e controle de áudio.
- `Web Storage API (localStorage)`: Para salvar as tarefas no navegador, garantindo que os dados persistam entre as sessões.

## 📁 Como Usar

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/MaJu-2440/Fokus.git](https://github.com/MaJu-2440/Fokus.git)
    ```
2.  **Navegue até a Pasta do Projeto:**
    ```bash
    cd Fokus
    ```
3.  **Abra o `index.html`:** Basta abrir o arquivo `index.html` no seu navegador de preferência.

## 📚 Desenvolvimento

Este projeto foi desenvolvido como parte de um curso na **Alura**, focado em aprimorar habilidades em JavaScript, manipulação do DOM e gerenciamento de estado de forma nativa.
