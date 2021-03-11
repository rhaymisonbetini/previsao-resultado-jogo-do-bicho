"use strict"

const Config = use("Config")

class TheCryptService {

    async generateKey() {

        let groupSecret = [];
        let charecteres = [
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
            "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
            "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "#",
            "$", "%", "[", "]", "&", "*", "(", ",", ")", "<", ">", ",", ":",
            "?", "{", "}",
        ]
        for (let i = 0; i < charecteres.length; i++) {
            let response = await this.seperateAndGenerateGroup(charecteres);
            charecteres = response.charecteres;
            groupSecret.push(response.groupSecret);
            if (charecteres.length > 0) {
                i--;
            }
        }
    }

    async seperateAndGenerateGroup(charecteres) {
        let groupSecret = { k1: "", k2: "", k3: "" }
        for (let i = 0; i < 3; i++) {
            let index = Math.floor(Math.random() * charecteres.length)
            i == 0 ? groupSecret.k1 = charecteres[index] :
                i == 1 ? groupSecret.k2 = charecteres[index] :
                    groupSecret.k3 = charecteres[index];
            charecteres.splice(index, 1);
        }
        return {
            charecteres: charecteres,
            groupSecret: groupSecret
        }
    }
}

module.exports = TheCryptService;