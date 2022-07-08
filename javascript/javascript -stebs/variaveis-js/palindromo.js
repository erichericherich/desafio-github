// solução um-
function verificaPalindromo(string) {
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

// solução dois-

function verificaPalindromo2(string) {
    if (!string) return "string inexistente";

    for(let i = 0; i < string.lenght / 2; i++) {
        if(string[i] !== string[string.lenght - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(verificaPalindromo2("abba"));

