class EquipList {

    getLevel1Armor = () => {
        return ["None", "3M", "Paca"]
    }

    getLevel1Helm = () => {
        return ["None", "SSH-68 Steel", "Kolpack"]
    }

    getLevel1Weapon = () => {
        return ["Any Pistol", "Saiga-19", "PP-19", "KEDR", "Mosin"]
    }

    getLevel2Armor = () => {
        return ["Paca", "Untar", "Zhuk \"Press\"", "Kirasa", "6B23-1 \"Digital Flora\""]
    }

    getLevel2Helm = () => {
        return ["SSH-68 Steel", "Untar", "LZSH Light", "6B47"]
    }

    getLevel2Weapon = () => {
        return ["Mosin", "PP-19", "KEDR", "SV-98", "ADAR", "AKS-74", "VEPR", "SKS", "MP5", "MPX"]
    }

    getLevel3Armor = () => {
        return ["Zhuk \"Press\"", "Kirasa", "6B23-1 \"Digital Flora\"", "6B13 \"Assault\"", "6B23-1 \"Mountain Flora\"", "Gzhel", "Trooper"]
    }

    getLevel3Helm = () => {
        return ["Kiver", "LZSH Light", "6B47", "Striker", "Ulach", "ZSH-1-2M"]
    }

    getLevel3Weapon = () => {
        return ["SV-98", "VEPR", "Any AK", "M4", "M1A", "DVL-10", "M700", "AS-VAL", "VSS", "MP7"]
    }


}

module.exports = EquipList;