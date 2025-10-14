# CampiMove

CampiMove é um aplicativo de mobilidade no campus projetado para melhorar o transporte para estudantes, professores e funcionários do CEFET. A plataforma oferece uma variedade de serviços para tornar a navegação pelo campus mais rápida, segura e conveniente.

## Sobre o Projeto

Construído com Next.js, React, ShadCN UI e Tailwind CSS, o CampiMove oferece uma experiência de usuário moderna e responsiva. As principais características incluem:

- **Rastreamento de Ônibus Intercampus**: Localização em tempo real do ônibus do campus.
- **Compartilhamento de Caronas**: Um mercado para caronas, bicicletas e patinetes oferecidos por outros usuários.
- **Descoberta de Rotas**: Encontre as melhores rotas para se locomover pelo campus.
- **Papéis de Usuário**: Experiências diferenciadas para estudantes, professores e motoristas.
- **Sistema de Avaliação**: Avalie e comente sobre as caronas para manter uma comunidade de alta qualidade.
- **Seguro e Integrado**: Projetado para uso seguro dentro da comunidade do campus.

## Começando

Siga estes passos para colocar o projeto para rodar na sua máquina local para desenvolvimento e testes.

### Pré-requisitos

- Node.js (v18 ou mais recente recomendado)
- npm ou um gerenciador de pacotes compatível

### Instalação

1.  **Instale as dependências:**
    Abra seu terminal no diretório raiz do projeto e execute o seguinte comando para instalar todos os pacotes necessários:

    ```bash
    npm install
    ```

2.  **Execute o servidor de desenvolvimento:**
    Quando a instalação estiver completa, você pode iniciar o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

    O aplicativo estará disponível em [http://localhost:9002](http://localhost:9002).

## Estrutura de Diretórios

O projeto segue uma estrutura que separa as responsabilidades e facilita a localização de arquivos. Aqui está uma visão geral dos principais diretórios:

```
.
├── src
│   ├── app/                # Páginas da aplicação (Next.js App Router)
│   │   ├── dashboard/      # Páginas do painel do usuário e motorista
│   │   ├── (auth)/         # Páginas relacionadas à autenticação (login, registro, etc.)
│   │   └── page.tsx        # Página inicial
│   │
│   ├── components/         # Componentes React reutilizáveis
│   │   ├── landing/        # Componentes específicos da página inicial
│   │   ├── dashboard/      # Componentes usados nas páginas do painel
│   │   └── ui/             # Componentes de UI principais do ShadCN
│   │
│   ├── lib/                # Funções utilitárias e bibliotecas compartilhadas
│   │
│   └── hooks/              # Hooks React personalizados
│
├── public/                 # Arquivos estáticos (imagens, fontes, etc.)
│
└── tailwind.config.ts      # Configuração do Tailwind CSS
```

-   **`src/app/`**: Contém todas as rotas e páginas da aplicação, seguindo o paradigma do Next.js App Router. Cada pasta representa um segmento de URL.
-   **`src/components/`**: Abriga todos os componentes reutilizáveis. Eles são organizados em `landing`, `dashboard` e `ui` para clareza.
-   **`src/lib/`**: Inclui funções auxiliares, classes utilitárias (`cn` para nomes de classe) e dados de exemplo.
-   **`src/hooks/`**: Armazena hooks React personalizados, como `useToast` para exibir notificações.
-   **`public/`**: Para arquivos estáticos que não precisam ser processados pelo sistema de compilação.
-   **`tailwind.config.ts`**: O arquivo de configuração para o Tailwind CSS, onde você pode personalizar o sistema de design.
