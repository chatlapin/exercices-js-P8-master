/*
Créez une fonction pairNumbers contenant boucle JavaScript qui retourne une chaine de caractères avec tous les nombres pairs entre un minimum et maximum séparés par une virgule (sans espace). 

Exemple : pairNumbers(1, 10) retournera 2,4,6,8,10
*/

function pairNumbers(min, max) {
    let result = ''
    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            result += i
            if (i < max) {
                result += ','
            }
        }
    }
    return result
}

export default pairNumbers
