## Descrição

Este repositório contém um exemplo de serviço em NestJS, utilizado para preparar ambientes de infraestura para o Aprova Digital On Premise.

## Dependências

O servidor a ser utilizado para execução dos containers deverá conter os seguintes itens:

 - Docker (https://docs.docker.com/get-docker/)
 - Docker Compose (https://docs.docker.com/compose/install/)

 As dependências específicas da aplicação ficam limitadas ao contexto do container, dessa forma, não serão necessárias quaisquer ações por parte da equipe para adicioná-las.

## Etapa de Build

Para executar o build da imagem de exemplo, basta executar o comando dentro da pasta do código fonte fornecido.

```bash
docker-compose build
```

Todos os passos serão realizados automaticamente via arquivos de configuração previamente definidos na base de código.

## Etapa de Execução

Similar ao processo de build, a execução do serviço também é executada com um simples comando:

```bash
docker-compose up -d
```

O serviço ficará disponível na porta 8000 por padrão. Este parâmetro pode ser alterado no arquivo .env, na variável "PORT".

## Como testar

Para verificar se o serviço foi disponibilizado com sucesso, basta executar uma requisição do tipo GET na porta especificada no passo anterior. Para as configurações padrão, o comando seria:

```bash
curl --request GET \
  --url http://localhost:8000/v2
```

A URL "localhost" pode ser substituída pelo redirecionamento de DNS do servidor, caso este possua, para acesso externo. É importante que, nesses casos, a porta do servidor especificada (por padrão 8000) esteja liberada para acesso externo.