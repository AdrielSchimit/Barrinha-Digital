"use client";

import Link from "next/link";
import { FormEvent, ReactNode, useState } from "react";

export const services = [
  { code:"IPTU", title:"2ª via do IPTU", desc:"Consulte débitos e emita sua guia.", href:"https://webapp1-barrinha.cidade360.cloud/", group:"Tributos" },
  { code:"NFS-e", title:"Nota Fiscal Eletrônica", desc:"Emissão e consulta de notas fiscais.", href:"https://webapp1-barrinha.cidade360.cloud/", group:"Empresas" },
  { code:"ITBI", title:"ITBI Online", desc:"Inicie e acompanhe a solicitação.", href:"https://webapp1-barrinha.cidade360.cloud/", group:"Imóveis" },
  { code:"CND", title:"Certidão Negativa", desc:"Emita sua certidão pela internet.", href:"https://webapp1-barrinha.cidade360.cloud/", group:"Documentos" },
  { code:"EDI", title:"Vaga em creche", desc:"Acesse o serviço de vagas de creche.", href:"https://barrinha.sp.gov.br/", group:"Educação" },
  { code:"SIC", title:"Acesso à Informação", desc:"Envie e acompanhe pedidos de informação.", href:"https://webapp1-barrinha.cidade360.cloud/", group:"Cidadania" },
  { code:"RH", title:"Portal do Servidor", desc:"Holerite, informe de rendimentos e serviços.", href:"https://webapp1-barrinha.cidade360.cloud/", group:"Servidor" },
  { code:"LEG", title:"Legislação Municipal", desc:"Consulte leis, decretos e atos normativos.", href:"https://portal.barrinha.sp.gov.br/legislacao-municipal/", group:"Legislação" },
  { code:"CON", title:"Concursos Públicos", desc:"Editais, resultados e convocações.", href:"https://transparencia.barrinha.sp.gov.br/", group:"Trabalho" },
];

export const secretariats = [
  ["Saúde","Atendimento, campanhas, unidades e vigilância."],["Educação","Rede municipal, creches e serviços educacionais."],["Assistência Social","Programas, proteção e inclusão social."],["Obras","Infraestrutura, manutenção urbana e vias."],["Planejamento","Plano Diretor, habitação e orçamento."],["Gestão de Pessoas","Servidores, concursos e processos seletivos."],["Esportes","Equipamentos, atividades e competições."],["Cultura","Ações culturais, patrimônio e eventos."],["Meio Ambiente","Licenciamento, fiscalização e arborização."],["Procuradoria","Representação jurídica e orientação institucional."]
];

export const news = [
  ["17 AGO 2026","Processo seletivo","Relação de candidatos convocados — Edital nº 001/2026"],
  ["13 AGO 2026","Processo seletivo","Publicação 38-2026 — candidatos convocados"],
  ["12 AGO 2026","Processo seletivo","Publicação 37-2026 — candidatos convocados"],
  ["30 JUL 2026","Trabalho","Frente Popular de Trabalho — convocação"],
  ["08 JUL 2026","Habitação","Edital 03/2026 — entrega de documentação MCMV"],
];

export const faqs = [
  ["Como emitir a segunda via do IPTU?","Acesse o Portal do Cidadão, localize o imóvel e selecione a parcela ou guia desejada."],
  ["Onde encontro concursos e processos seletivos?","Consulte a página de Notícias e o Portal da Transparência. Convocações também aparecem em destaque na página inicial."],
  ["Como pedir uma informação pública?","Use o serviço Acesso à Informação, o e-SIC. O pedido gera protocolo e pode ser acompanhado online."],
  ["Como falar com uma secretaria?","Consulte a página Secretarias para identificar o setor. O atendimento geral é pelo telefone (16) 3943-9400, ramal 120."],
  ["Onde consulto vaga em creche?","Use o atalho EDI — Vaga em creche, disponível na página de Serviços."],
  ["Como registrar uma reclamação?","Abra o Resolve Barrinha, escolha a categoria, informe o local e descreva a situação. Nesta demo, o protocolo é apenas ilustrativo."],
];

export function Header(){
  const [open,setOpen]=useState(false);
  return <><a className="skip" href="#conteudo">Pular para o conteúdo</a><div className="demo-bar">DEMONSTRAÇÃO CONCEITUAL — NOVO PORTAL MUNICIPAL DE BARRINHA</div><header className="header"><div className="topline wrap"><span>Prefeitura Municipal de Barrinha</span><div><Link href="/acessibilidade">Acessibilidade</Link><Link href="/contato">Contato</Link><a href="https://portal.barrinha.sp.gov.br/" target="_blank" rel="noreferrer">Portal atual</a></div></div><div className="nav wrap"><Link className="brand" href="/"><img src="/assets/logo-prefeitura.png" alt="Prefeitura Municipal de Barrinha"/><span><b>Barrinha</b> Digital</span></Link><button className="menu" onClick={()=>setOpen(!open)} aria-label="Abrir menu"><i/><i/><i/></button><nav className={open?"open":""}><Link href="/servicos">Serviços</Link><Link href="/noticias">Notícias</Link><Link href="/secretarias">Secretarias</Link><Link href="/ouvidoria">Ouvidoria</Link><Link href="/transparencia">Transparência</Link></nav><Link className="outline small" href="/servicos">Acessar serviços</Link></div></header></>
}

export function Footer(){
  return <footer><div className="wrap footer-grid"><div><img src="/assets/logo-prefeitura.png" alt="Prefeitura Municipal de Barrinha"/><p>Praça Antônio Prado, 70<br/>Centro, Barrinha/SP — CEP 14860-027</p><p>(16) 3943-9400 — Ramal 120</p></div><div><b>Serviços</b><Link href="/servicos">Serviços online</Link><Link href="/ouvidoria">Ouvidoria</Link><Link href="/transparencia">Transparência</Link></div><div><b>Município</b><Link href="/secretarias">Secretarias</Link><Link href="/noticias">Notícias</Link><Link href="/obras">Obras</Link></div><div><b>Plataforma</b><Link href="/perguntas-frequentes">Dúvidas frequentes</Link><Link href="/privacidade">Privacidade</Link><Link href="/apresentacao">Apresentação do projeto</Link></div></div><div className="wrap footer-bottom"><span>Demonstração conceitual com conteúdo vinculado às fontes oficiais.</span><Link href="/">Página inicial</Link></div></footer>
}

export function Shell({children}: {children:ReactNode}){
  const [chat,setChat]=useState(false); const [notice,setNotice]=useState("");
  return <><Header/><main id="conteudo">{children}</main><Footer/><button className="ai-fab" onClick={()=>setChat(!chat)}><span>B</span><b>Fale com a BarrinhIA</b></button>{chat&&<aside className="chat"><div className="chat-head"><div><span>B</span><b>BarrinhIA<small>Assistente municipal — demo</small></b></div><button onClick={()=>setChat(false)}>×</button></div><div className="chat-body"><p className="bot">Olá. Posso ajudar a encontrar serviços e informações oficiais. Não informe documentos, senhas ou dados médicos.</p><button onClick={()=>setNotice("A segunda via do IPTU está em Serviços > Tributos.")}>Como emitir IPTU?</button><button onClick={()=>setNotice("As convocações estão em Notícias e no Portal da Transparência.")}>Onde vejo processos seletivos?</button><button onClick={()=>setNotice("Abra Ouvidoria para registrar e acompanhar uma solicitação.")}>Quero registrar um problema</button></div><form onSubmit={e=>{e.preventDefault();setNotice("Na produção, a BarrinhIA consultará apenas fontes oficiais aprovadas.")}}><input aria-label="Mensagem" placeholder="Digite sua dúvida"/><button>Enviar</button></form><small>Esta demonstração não altera cadastros nem protocolos.</small></aside>}{notice&&<div className="toast"><span>{notice}</span><button onClick={()=>setNotice("")}>Fechar</button></div>}</>
}

export function PageHero({eyebrow,title,text,actions}:{eyebrow:string,title:string,text:string,actions?:ReactNode}){
 return <section className="page-hero"><div className="wrap"><span className="kicker">{eyebrow}</span><h1>{title}</h1><p>{text}</p>{actions&&<div className="page-actions">{actions}</div>}</div></section>
}

export function DemoBadge(){return <span className="demo-badge">FLUXO DEMONSTRATIVO</span>}

export function RequestForm(){
 const [protocol,setProtocol]=useState("");
 function submit(e:FormEvent){e.preventDefault();setProtocol("BRH-DEMO-"+Math.floor(10000+Math.random()*89999))}
 return <form className="request-form" onSubmit={submit}><div className="form-head"><b>Nova solicitação</b><DemoBadge/></div>{protocol?<div className="success"><span>PROTOCOLO GERADO</span><strong>{protocol}</strong><p>O protocolo é demonstrativo e não foi enviado à Prefeitura.</p><button type="button" onClick={()=>setProtocol("")}>Criar outra solicitação</button></div>:<><label>Categoria<select required defaultValue=""><option value="" disabled>Selecione</option><option>Iluminação pública</option><option>Buraco ou pavimentação</option><option>Limpeza urbana</option><option>Poda de árvore</option><option>Sinalização</option></select></label><label>Endereço<input required placeholder="Rua, número e bairro"/></label><label>Descrição<textarea required placeholder="Descreva a situação sem inserir dados sensíveis"/></label><label className="consent"><input type="checkbox" required/><span>Li o aviso de privacidade desta demonstração.</span></label><button className="button">Gerar protocolo demonstrativo</button></>}</form>
}
