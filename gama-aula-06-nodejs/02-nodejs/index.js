/*
0 Obter um usuario
1 Obter o numero de telefone de um usuario a partir de seu Id
2 Obter o endereco do usuario pelo Id 
*/

// Importamos um módulo interno do node.js
// const util = require('util')
// const obterEnderecoAsync = util.promisify(obterEndereco) 
// obterEnderecoAsync().then

function obterUsuario() {
    // quando der algum problema -> reject(ERRO)
    // qunado sucess -> RESOLVE
    return new Promise(function resolvePromise(resolve, reject) {
        // return reject(new Error('DEU RUIM DE VERDADE!'))

        setTimeout(function () {
            return resolve({
                id: 1,
                nome: 'Jhonatan',
                dataNascimento: new Date()
            })
        }, 1000)

    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject) {

        setTimeout(() => {
            return resolve({
                telefone: '9948758',
                ddd: 11
            })
        }, 2000);
    })
}
function obterEndereco(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject) {

        setTimeout(() => {
            return resolve({
                rua: 'Dom Banana',
                numero: '943'
            })
        }, 2000)
    })
}


// function obterEndereco(idUsuario, callback) {
//     setTimeout(() => {
//         return callback(null, {
//             rua: 'Minha rua',
//             numero: 0
//         })
//     }, 2000);
// }


// Primeiro passo adicionar a palavra async -> automaticamente ela retornará uma Promise
main()
async function main() {
    try {
        console.time('medida-promise')
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        // const endereco = await obterEndereco(usuario.id)
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEndereco(usuario.id)
        ])
        const endereco = resultado [1]
        const telefone = resultado [0]
        console.log(`
            Nome: ${usuario.nome}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
            Endereco: ${endereco.rua}, ${endereco.numero}
        `)
        console.timeEnd('medida-promise')
    }
    catch (error) {
        console.error('Deu Ruim', error)
    }
}



// const usuarioPromise = obterUsuario()
// // para manipular o sucesso usamos a função .then
// // para manipular erros, usamos .cath
// // usuario -> telefone -> telefone
// usuarioPromise
//     .then(function (usuario) {
//         return obterTelefone(usuario.id)
//             .then(function resolverTelefone(result) {
//                 return {
//                     usuario: {
//                         nome: usuario.nome,
//                         id: usuario.id
//                     },
//                     telefone: result
//                 }
//             })
//     })
//     .then(function (resultado) {
//         return obterEndereco(resultado)
//             .then(function resolverEndereco(result) {
//                 return {
//                     usuario: resultado.usuario,
//                     telefone: resultado.telefone,
//                     endereco: result
//                 }
//             })
//     })
//     .then(function (resultado) {
//         console.log(`
//             Nome: ${resultado.usuario.nome}
//             Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
//             Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
//         `)
//     })


//                 // .then(function (resultado) {
//                 //     const endereco = obterEnderecoAsync(resultado.usuario.id)
//                 //     return endereco.then(function resolverEndereco(result) {
//                 //         return {
//                 //             usuario: resultado.usuario,
//                 //             telefone: resultado.telefone,
//                 //             endereco: result
//                 //         }
//                 //     })
//                 // })
//     .then(function (resultado) {
//         console.log('resultado', resultado)
//     })
//     .catch(function (erro) {
//         console.error('Deu Ruim', erro)
//     })



// function resolverUsuario(erro, usuario) {
//     console.log('usuario', usuario)
// }

// obterUsuario(function resolverUsuario(error, usuario) {
//     // null || "" || 0 === false
//     if (error) {
//         console.error('Deu ruim em Usuario', error)
//         return;
//     }
//     obterTelefone(usuario.id, function resolverTelefone (erro1, telefone) {
//         if (error1) {
//             console.error('Deu ruim em Telefone', error)
//             return;
//         }
//         obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {
//             if (error2) {
//                 console.error('Deu ruim em Endereço', error)
//                 return;
//             }
//             console.log(`
//                 Nome: ${usuario.nome},
//                 Endereco: ${endereco.rua}, ${endereco.numero}
//                 Telefone: ${telefone.ddd}, ${telefone.telefone}
//             `)
//         })
//     })

// })

//const telefone = obterTelefone(usuario.id)

//console.log('telefone', telefone)