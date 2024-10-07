import React from 'react'

const Components = () => {
    const alunos = [
        {
            nome: "Caio",
            sobrenome: "Corrêa",
        },
        {
            nome: "Gabriel",
            sobrenome: "Lopes",
        },
        {
            nome: "Guilherme",
            sobrenome: "Segatto",
        },
        {
            nome: "Guilherme",
            sobrenome: "Pereira"
        }

    ];
    return (
        <div><p>Os alunos da minha turma são: {alunos[0].nome} {alunos[0].sobrenome}, {alunos[1].nome} {alunos[1].sobrenome},
         {alunos[2].nome} {alunos[2].sobrenome} e {alunos[3].nome} {alunos[3].sobrenome} </p></div>

    )
}

export default Components
