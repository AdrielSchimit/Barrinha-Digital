# Barrinha Digital

Protótipo funcional de uma nova plataforma municipal para Barrinha/SP.

O projeto reorganiza o portal público pela necessidade do cidadão, reunindo serviços, notícias, ouvidoria, transparência, secretarias, atendimento digital e uma demonstração do painel editorial.

## Entregas atuais

- identidade e fotografias institucionais da Prefeitura;
- busca de serviços municipais;
- atalhos para IPTU, NFS-e, ITBI, certidão negativa, creche e e-SIC;
- notícias e contatos oficiais;
- Resolve Barrinha com geração de protocolo demonstrativo;
- FAQ estruturado para SEO, AEO e GEO;
- demonstração da BarrinhIA baseada em fontes oficiais;
- transparência cidadã sem apresentar valores fictícios como reais;
- demonstração do painel simplificado de publicação;
- layout responsivo e acessível;
- metadados Open Graph e dados estruturados Schema.org.

## Situação do produto

Esta versão é uma demonstração comercial. Integrações de banco de dados, autenticação administrativa, armazenamento, workflow de aprovação, auditoria e protocolo real serão implementadas na fase de produção.

## Desenvolvimento

Requisitos:

- Node.js 22.13 ou superior;
- npm.

```bash
npm install
npm run dev
```

## Validação

```bash
npm run lint
npm run build
```

## Segurança prevista para produção

- autenticação forte e permissões por função;
- painel administrativo isolado do portal público;
- trilha de auditoria e versionamento;
- proteção contra abuso, rate limiting e WAF;
- política de retenção e tratamento de dados conforme a LGPD;
- backups testados e monitoramento;
- BarrinhIA limitada a fontes oficiais aprovadas;
- testes baseados em OWASP ASVS e WCAG.

## Fontes institucionais

- [Portal oficial da Prefeitura de Barrinha](https://portal.barrinha.sp.gov.br/)
- [Portal da Transparência](https://www.barrinha.sp.gov.br/transparencia/)

Projeto desenvolvido como proposta de modernização do atendimento digital municipal.
