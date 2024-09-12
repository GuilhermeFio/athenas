import con from "./connection.js";



/*lembrar que quando apertar botão deletar, vai deletar o registro na tabela treinos marcados e adiconar na tb finalizados*/

export async function adicionarFinalizadosPendentes(FP){

    const comando=  `

insert into db_athenas.tb_avaliacaoFisica (ds_objetivos_cliente, dt_treino)
values(?,?)
           `

 let resposta= await con.query(comando, [FP.objetivos, FP.treino]);

 let registros= resposta[0];
 return registros.insertId;  
    }



export async function consultarFinalizadosPendentes(){

    const comando= `
    
        select
                ds_objetivos         objetivos,
                dt_treino            treino,
    
        from db_athenas.tb_treino;
    
    `
    
    let resposta= await con.query(comando);
    let registros= resposta[0];
    return registros   
    }


    
    export async function deletarFinalizadosPendentes(id){

        const comando= `
        
        delete from tb_treinos_finalizados_pendentes
               where treino_id = ?;             
              `
        
              let resposta= await con.query(comando, [id])
              let registros= resposta[0]
              return registros.affectedRows;
        
        }