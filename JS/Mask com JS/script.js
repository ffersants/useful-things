const masks = {
    cpf (value){
        return value
        //impede o input de qualquer dado que não seja número
        .replace(/\D/g, '')
        //*\D - qualquer valor que não seja número
        //*/g - busca globalmente em toda a string por valores que não sejam números
        .replace(/(\d{3})(\d)/, '$1.$2')
        //1º grupo (3 números seguidos) = (\d{3}), que casa com $1, que é o grupo de captura dos 3 números seguidos
        //2º grupo (1 número) = (\d), que casa com $2, que é o quarto número seguido
        //em $1.$2, vemos que os dois grupos devem ser separados por um ponto 
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, "$1")
        //esse último replace impede que eu insira mais dígitos que um CPF possui
    },

    cnpj(value){
        return value
        .replace(/\D/g, '' )
        .replace(/(\d{2})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1")
    },
    phone(value){
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{4})\d+?$/, "$1")
    },
    cep(value){
        return value
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{3})\d+?$/, "$1")
    },
    pis(value){
        return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{5})(\d)/, "$1.$2")
        .replace(/(\d{5}\.)(\d{2})(\d)/, "$1$2-$3")
        .replace(/(-\d{1})\d+?$/, "$1")
    }
}

document.querySelectorAll('input').forEach(($input) =>{
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)
})

