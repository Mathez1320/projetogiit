let Alunos = 
[
    {Nome:"Matheus", Turma:"F2", Notas:[9, 3, 9], Resultado:0, Matricula:"4DSD45S5D"},

    {Nome:"Ana", Turma:"F2", Notas:[8, 8, 8], Resultado:0, Matricula:"7FGH23K9A"},

    {Nome:"Maria", Turma:"F2", Notas:[8, 8, 8], Resultado:0, Matricula:"2JDK78P4B"},

    {Nome:"João", Turma:"F2", Notas:[6, 5, 7], Resultado:0, Matricula:"9PLM34X7C"},

    {Nome:"Carlos", Turma:"F2", Notas:[10, 9, 8], Resultado:0, Matricula:"5QWE67R2D"},

    {Nome:"Juliana", Turma:"F2", Notas:[4, 6, 5], Resultado:0, Matricula:"8ASD91T6E"},

    {Nome:"Pedro", Turma:"F2", Notas:[7, 9, 8], Resultado:0, Matricula:"3ZXC56V8F"},

    {Nome:"Beatriz", Turma:"F2", Notas:[10, 10, 9], Resultado:0, Matricula:"6BNM42L1G"},

    {Nome:"Lucas", Turma:"F2", Notas:[5, 4, 6], Resultado:0, Matricula:"1KLP83M5H"},

    {Nome:"Gabriel", Turma:"F2", Notas:[8, 6, 7], Resultado:0, Matricula:"4RTY29N7J"},

    {Nome:"Larissa", Turma:"F2", Notas:[9, 8, 10], Resultado:0, Matricula:"7UIO45P2K"},

    {Nome:"Rafael", Turma:"F2", Notas:[6, 7, 6], Resultado:0, Matricula:"2HGF68D4L"},

    {Nome:"Camila", Turma:"F2", Notas:[3, 5, 4], Resultado:0, Matricula:"9QAZ31W6M"},

    {Nome:"Felipe", Turma:"F2", Notas:[8, 9, 7], Resultado:0, Matricula:"5WSX74E2N"},

    {Nome:"Amanda", Turma:"F2", Notas:[7, 6, 8], Resultado:0, Matricula:"3EDC92R5P"},
];

function calcularMediaAlunos(alunos)
{
    let resultado = 0;

    for(let count = 0; count < alunos.length; count++)
    {
       

        for(let count2 = 0; count2 < alunos[count].Notas.length; count2++)
        {

           resultado += alunos[count].Notas[count2] / 3;
        }

        alunos[count].Resultado = resultado;
        resultado = 0;
    }

    classificarAlunos(alunos);
}


function classificarAlunos (alunos)
{
    for(let count = 0; count < alunos.length; count++)
    {
        let classificacao = ""; 

        if(alunos[count].Resultado < 5.00)
        {
            classificacao = "Ruim"

        }else if(alunos[count].Resultado >= 5.00 && alunos[count].Resultado < 8.00)
        {
            classificacao = "Bom"

        }else{
            classificacao = "Ótimo"
        }
    
    console.log(
    `
    ALUNO: ${alunos[count].Nome} - TURMA: ${alunos[count].Turma} - NOTA: ${alunos[count].Resultado.toFixed(2)} - Classificação: ${classificacao}
    `
    );
    }
}

calcularMediaAlunos(Alunos);
