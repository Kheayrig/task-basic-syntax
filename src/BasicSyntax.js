export function romanToInteger(str) {
    let result = 0;
    let i = str.length - 1;
    let min = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    while (i >= 0) {
        let l = str[i];
        let num = 0;
        switch (l) {
            case 'I':
                num = 1;
                break;
            case 'V':
                num = 5;
                break;
            case 'X':
                num = 10;
                break;
            case 'L':
                num = 50;
                break;
            case 'C':
                num = 100;
                break;
            case 'D':
                num = 500;
                break;
            case 'M':
                num = 1000;
                break;
        }

        if (num < min) {
            result -= num;
        } else {
            min = num;
            result += num;
        }

        i--;
    }

    return result;
}
