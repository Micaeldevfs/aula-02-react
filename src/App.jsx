function App() { 
  const alunos = [
    {
      nome: "Show banda Aero Smith",
      data: "15/11/2023",
      img: "https://kissfm.com.br/wp-content/uploads/2021/12/materiasrepositorio517-1503672193.jpeg"
    },
    {
      nome: "Show banda Bon Jovi",
      data: "16/11/2023",
      img:"https://kissfm.com.br/wp-content/uploads/2022/01/A-124541-1600554558-2577.jpeg.jpg"
    },
    {
      nome: "Show banda Avioes do Forró",
      data: "17/11/2023",
      img: "https://www.folhavitoria.com.br/entretenimento/blogs/na-balada/wp-content/uploads/2015/03/Avi%C3%B5es-do-Forr%C3%B3_2-800x500.jpg"
    }
  ]

  return (
    <>
    <h1 className="titulo">aula 02</h1>
    <h2> Proximos Shows</h2>
      {alunos.map((aluno)=> (
        <div>
          <h1>{aluno.nome}</h1> 
          <h2>{aluno.data}</h2>
          <img src={aluno.img}/>
          </div>
      ))}
     
    </>
  )
}

export default App

// function App() {

//   const eventos = [
//     {
//       nome: "Evento de Futebol",
//       data: "14/11/2023",
//       img: "https://inteligenciafinanceira.com.br/wp-content/uploads/2021/12/IF-Futebol.png"
//     },
//     {
//       nome: "Evento de Rock",
//       data: "15/11/2023",
//       img: "https://conteudo.solutudo.com.br/wp-content/uploads/2019/10/rock-nacional.jpg"
//     },
//     {
//       nome: "Evento de Comédia",
//       data: "16/11/2023",
//       img: "https://img.freepik.com/vetores-premium/cena-de-teatro-de-show-de-comedia-stand-up-com-comediante-de-cortina-vermelha-e-microfone-aberto-para-ilustracao_2175-4366.jpg"
//     },

//   ]

//   const grid = {
//     display: "flex",
//     gap: "20px"
//   }

//   return (
//     <>
//       <h2>Lista de Eventos</h2>
//       <div style={grid}>
//       {eventos.map((evento)=> (
//           <div style={{border: "1px solid black"}}>
//             <h3>{evento.nome}</h3>
//             <img style={{maxWidth: "300px"}} src={evento.img} />
//             <p>{evento.data}</p>
//           </div>
//       ))}
//       </div>
//     </>
//   )
// }

// export default App