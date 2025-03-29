# Tipos de menssagens utilizadas com Commitlint

## 1. build

O que é?: Refere-se a mudanças no processo de construção do projeto, como a configuração do build, dependências de pacotes ou ferramentas de build (Webpack, Babel, etc.).

 **Exemplo de uso:**
- "build: Adiciona configuração do Webpack para otimização de imagens."
- "build: Atualiza versão do Node.js para 16."

## 2. chore

O que é?: Usado para tarefas de manutenção ou ajustes pequenos no código que não afetam a lógica do sistema, como atualizações de dependências, configurações ou arquivos de configuração.

 **Exemplo de uso:**
- "chore: Atualiza dependências para a versão mais recente."
- "chore: Adiciona arquivo de configuração do ESLint."

## 3. ci

O que é?: Refere-se a mudanças nos arquivos ou configurações do processo de Integração Contínua (CI). Isso inclui configurações de ferramentas como Travis CI, CircleCI, GitHub Actions, Jenkins, etc.

 **Exemplo de uso:**
- "ci: Atualiza workflow do GitHub Actions para testar novos recursos."
- "ci: Adiciona configuração para rodar testes no CircleCI."

## 4. docs

O que é?: Usado para alterações na documentação do projeto, seja no README, no Wiki ou em qualquer outro documento explicativo.
   
 **Exemplo de uso:**
- "docs: Atualiza o README com instruções de instalação."
- "docs: Adiciona exemplos de uso da API na documentação."

## 5. feat (Feature)

O que é?: Refere-se a uma nova funcionalidade ou recurso adicionado ao projeto.

 **Exemplo de uso:**
- "feat: Adiciona funcionalidade de login com Google."
- "feat: Implementa sistema de notificações push."

## 6. fix

O que é?: Usado quando há correção de bugs ou falhas no código. Alterações que resolvem problemas, mas não adicionam novos recursos.

 **Exemplo de uso:**
- "fix: Corrige erro de cálculo no componente de resumo."
- "fix: Resolve problema de autenticação no sistema de login."

## 7. perf (Performance)

O que é?: Refere-se a alterações feitas para melhorar o desempenho do sistema, como otimizações de código que aumentam a velocidade, diminuem o uso de memória ou tornam o código mais eficiente.

 **Exemplo de uso:**
- "perf: Melhora performance de renderização da lista de itens."
- "perf: Reduz tempo de resposta do endpoint de login."

## 8. refactor

O que é?: Refatoração de código significa modificar a estrutura do código sem alterar seu comportamento. O objetivo é melhorar a legibilidade, a organização ou a eficiência do código sem introduzir novas funcionalidades ou corrigir erros.
  
 **Exemplo de uso:**
- "refactor: Refatora função de login para melhorar legibilidade."
- "refactor: Refatora código de validação de formulários."

## 9. revert

O que é?: Usado quando você precisa reverter uma alteração anterior, seja devido a um erro ou mudança de direção. Isso geralmente é feito com o comando git revert, que cria um novo commit que desfaz um commit anterior.

 **Exemplo de uso:**
- "revert: Reverte commit que introduziu falha no sistema de autenticação."
- "revert: Desfaz a alteração no layout do componente de menu."

## 10. style

O que é?: Refere-se a mudanças que afetam a estilização do projeto, como CSS, layout, formatação de código (indentação, espaçamento), mas não altera o comportamento do sistema.

 **Exemplo de uso:**
- "style: Ajusta o alinhamento do botão de envio no formulário."
- "style: Refatora o arquivo CSS para usar classes mais claras."

## 11. test

O que é?: Usado para alterações que envolvem a criação ou modificação de testes automatizados. Isso inclui testes unitários, de integração ou de interface.

 **Exemplo de uso:**
- "test: Adiciona testes unitários para a função de login."
- "test: Cria testes de integração para o endpoint de usuários."

# Resumo de Como Usar:

**build**: Modificações nas ferramentas e configurações de build.
**chore**: Tarefas de manutenção ou melhorias pequenas que não alteram o comportamento do código.
**ci**: Modificações no processo de integração contínua.
**docs**: Alterações na documentação.
**feat**: Implementação de novos recursos ou funcionalidades.
**fix**: Correção de erros ou falhas no sistema.
**perf**: Melhoria no desempenho do sistema.
**refactor**: Refatoração do código sem alterar sua funcionalidade.
**revert**: Reversão de alterações feitas em commits anteriores.
**style**: Mudanças na estilização e formatação, sem alterar o comportamento do código.
**test**: Modificação ou adição de testes automatizados.
