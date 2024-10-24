import con from "./connection.js";


export async function adicionarTreino(treinos){

    const comando=  `

insert into AthenasDB.Treinos_marcados (ds_objetivos_cliente, dt_treino, ds_exercicios_escolhidos, bt_concluido)
values(?,?,?)
           `

 let resposta= await con.query(comando, [treinos.objetivos, treinos.data, treinos.exercicios]);

 let registros= resposta[0];
 return registros.insertId;  
    }


export async function consultarTreino(){

    const comando= `
    
        select
                ds_objetivos_cliente         objetivos,
                dt_treino                    data,
                ds_exercicios_escolhidos     exercicios
    
        from AthenasDB.Treinos_marcados;
    
    `
    
    let resposta= await con.query(comando);
    let registros= resposta[0];
    return registros   
    }
    

    
    export async function atualizarTreino(id,treinos){
    
        const comando=  `
    
        
        update AthenasDB.Treinos_marcados
                        set ds_objetivos_cliente= ?,
                            dt_treino=?,
                            ds_exercicios_escolhidos=?
                            bt_concluido =?
        where treino_id= ?;
    
               `
    
     let resposta= await con.query(comando, [treinos.objetivos, treinos.data, treinos.exercicios, id]);
     let registros= resposta[0];
     return registros.affectedRows; 
        } 


        export async function deletarTreino(id){

            const comando= `
            
            delete from Treinos_marcados
                   where treino_id = ?;
                  
                  `
            
                  let resposta= await con.query(comando, [id])
                  let registros= resposta[0]
                  return registros.affectedRows;
            
            }

