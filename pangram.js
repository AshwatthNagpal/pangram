export const isPangram = (str) => {
    if (str == '')
        return false;
    let allAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < allAlphabet.length; ++i) {
        if (!str.includes(allAlphabet[i]))
            return false;
    }

    return true;
}
