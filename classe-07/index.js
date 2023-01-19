const usuarios = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];

const usuariosFiltrados = usuarios.filter(x => x.idade > 17 && x.idade < 66);
const usuariosHabilitacao = usuariosFiltrados.every(x => x.habilitado === true);


usuariosHabilitacao ? console.log('Todos passaram no teste') : console.log('Todos precisam estar habilitados');