function getAdmins(map) {
    let adm = []
    for([key, value] of map){
        if (value === 'Admin'){
            adm.push(key)
        }
    }
    return adm
}

const usuarios = new Map()

usuarios.set('Luiza','Admin')
usuarios.set('Ronaldo','Admin')
usuarios.set('Casimiro','User')
usuarios.set('Stephany','Admin')

console.log(getAdmins(usuarios))

