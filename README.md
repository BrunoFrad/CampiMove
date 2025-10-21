# CampiMove: Sistema de Mobilidade do CEFET
O **CampiMove** tem como objetivo melhorar a mobilidade para os campi do CEFET, a partir do gerenciamento dos ônibus oficiais da instituição e de transportes alternativos. O sistema permitirá que alunos, professores, motoristas, administradores e fornecedores interajam para garantir um transporte eficiente e acessível.

## Equipe de Desenvolvimento
| Ordem | Nome                 |
|:------|:---------------------|
| 1     | Bruno Frade          |
| 2     | Francisco Eduardo    |
| 3     | Gabriela Pacheco    |
| 4     | Matheus Rattes       |
| 5     | Pedro Peixoto        |

## Atores do Sistema
| Ator                        | Definição                                                                 |
|:----------------------------|:--------------------------------------------------------------------------|
| Aluno                       | Usuário que utilizará os ônibus e transportes alternativos.               |
| Administrador               | Usuário que administra o sistema, atualizando horários, notícias, etc.    |
| Motorista                   | Usuário que dirige o ônibus e atualiza sua localização.                   |
| Fornecedor de transporte     | Usuário que disponibiliza transportes alternativos como vans ou micro-ônibus. |
| Professor                   | Usuário que utiliza os transportes e pode reservar o intercampi para uso didático. |

## Requisitos Funcionais
| Id     | Ator                                        | Descrição                                                            |
|:-------|:--------------------------------------------|:---------------------------------------------------------------------|
| REQ001 | Administrador                               | Cadastrar horários dos ônibus.                                       |
| REQ002 | Aluno, Professor                            | Consultar horários dos ônibus.                                       |
| REQ003 | Aluno, Professor                            | Rastrear e exibir localização atual dos ônibus.                      |
| REQ004 | Administrador                               | Cadastrar transportes alternativos.                                  |
| REQ005 | Aluno, Professor                            | Consultar transportes alternativos.                                  |
| REQ006 | Motorista                                   | Atualizar localização do ônibus.                                     |
| REQ007 | Motorista                                   | Notificar atrasos ou mudanças de trajeto.                            |
| REQ008 | Administrador                               | Cadastrar novos motoristas.                                          |
| REQ009 | Administrador                               | Cadastrar novos ônibus oficiais.                                     |
| REQ010 | Aluno, Professor                            | Receber notificação sobre imprevistos nos transportes.               |
| REQ011 | Aluno, Professor                            | Avaliar o transporte alternativo.                                    |
| REQ012 | Administrador                               | Enviar mensagens e avisos para os usuários.                          |
| REQ013 | Professor                                   | Reservar o ônibus oficial.                                           |
| REQ014 | Aluno, Professor                            | Avaliar motorista ou o ônibus oficial.                               |
| REQ015 | Sistema                                     | Permitir cadastro de contas com confirmação de e-mail.               |
| REQ016 | Aluno, Professor, Motorista, Administrador  | Logar ou cadastrar no software.                                      |
| REQ017 | Fornecedor de transporte alternativo        | Entrar como fornecedor.                                              |
| REQ018 | Aluno, Professor                            | Escrever comentário ao avaliar motorista ou transporte.              |
| REQ019 | Aluno, Professor                            | Contratar transporte alternativo ao consultar.                       |
| REQ020 | Fornecedor de transporte alternativo        | Enviar cadastro para o administrador.                                |
| REQ021 | Fornecedor de transporte alternativo, aluno, professor | Enviar mensagens ao motorista.                            |

## Regras de Negócio
| Id     | Nome                       | Descrição                                                                 |
|:-------|:---------------------------|:--------------------------------------------------------------------------|
| RN001  | Localização do ônibus oficial | O motorista deve atualizar a localização do ônibus a cada parada.         |
| RN002  | Login para motoristas      | É necessário logar motorista para atualizar informações do ônibus.        |
| RN003  | Poder de administração     | Apenas administradores podem cadastrar motoristas, ônibus, etc.          |
| RN004  | Avaliação do motorista     | Caso receba muitas reclamações, a direção deve ser notificada.           |
| RN005  | Avaliação do transporte alternativo | As notas mudam conforme elogios e reclamações.                     |
| RN006  | Login de professor         | O professor precisa logar para reservar o ônibus oficial.                |
| RN007  | Cadastro de motorista      | O motorista deve ser maior de idade e possuir licença válida.            |
| RN008  | Login de fornecedor        | O fornecedor só pode enviar cadastro, sem acesso total ao sistema.       |
| RN009  | Login de aluno             | O aluno precisa logar para usar o sistema.                               |

## Casos de Uso
| Id     | Nome                                     | Requisitos                        | Regras de Negócio                |
|:-------|:-----------------------------------------|:----------------------------------|:---------------------------------|
| CSU01  | Cadastrar horários dos ônibus            | REQ001                            | RN003                            |
| CSU02  | Consultar horários dos ônibus            | REQ002                            | RN009, RN003, RN006              |
| CSU03  | Cadastrar transporte alternativo         | REQ004                            | RN003                            |
| CSU04  | Consultar transportes alternativos       | REQ005, REQ019                    | RN009, RN003, RN006              |
| CSU05  | Atualizar horário de chegada do ônibus   | REQ006                            | RN002                            |
| CSU06  | Denunciar usuários                       | REQ010                            | RN004, RN009                     |
| CSU07  | Remover horário do ônibus                | REQ001                            | RN003                            |
| CSU08  | Cadastrar ônibus                         | REQ009                            | RN003                            |
| CSU09  | Notificar usuários                       | REQ012                            | RN003                            |
| CSU10  | Avaliar transporte alternativo           | REQ011, REQ014, REQ018            | RN005, RN004                     |
| CSU11  | Cadastrar conta por tipo de usuário      | REQ015                            | RN009, RN002, RN003, RN006       |
| CSU12  | Banir usuários                           | REQ010                            | RN004, RN003                     |
| CSU13  | Reservar transporte alternativo          | REQ019                            | RN009                            |
| CSU14  | Editar perfil de usuário                 | REQ016                            | RN009                            |
| CSU15  | Login                                    | REQ015                            | RN009, RN002, RN003, RN006       |
| CSU16  | Recuperar senha                          | REQ015                            | RN002                            |
| CSU17  | Mandar e receber mensagens de motoristas | REQ021                            | RN008, RN006, RN009              |

## Planejamento
| Sprint | Caso de Uso | Desenvolvedor                |
|:-------|:-------------|:-----------------------------|
|    1   |   CSU01   |  Francisco Eduardo   |
|    2   |   CSU02   |  Gabriela Pacheco    |
|    1   |   CSU03   |  Matheus Rattes      |
|    2   |   CSU04   |  Francisco Eduardo   |
|    1   |   CSU05   |  Bruno Frade         |
|    1   |   CSU06   |  Bruno Frade         |
|    2   |   CSU07   |  Gabriela Pacheco    |
|    1   |   CSU08   |  Gabriela Pacheco    |
|    2   |   CSU09   |  Matheus Rattes      |
|    3   |   CSU10   |  Francisco Eduardo   |
|    1   |   CSU11   |  Pedro Peixoto       |
|    3   |   CSU12   |  Matheus Rattes      |
|    2   |   CSU13   |  Bruno Frade         |
|    3   |   CSU14   |  Pedro Peixoto       |
|    2   |   CSU15   |  Pedro Peixoto       |
|    3   |   CSU16   |  Pedro Peixoto       |
|    3   |   CSU17   |  Bruno Frade         |

