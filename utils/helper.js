import moment from 'moment';

export const bindToElement = (object, key) => {
    const split = key.split('.');
    let result = null;
    switch (split.length) {
        case 1: 
            result = object && object[split[0]];
            break;
        case 2:
            result = object && object[split[0]] && object[split[0]][split[1]];
            break;
        case 3:
            result = object && object[split[0]] && object[split[0]][split[1]] && object[split[0]][split[1]][split[2]];
            break;
        default:
            break;
    }
    return result;
}

export const dateFormatFull = (date) => {
    return moment(date).format('ddd, MMM D')
}

export const dateFormatHour = (date) => {
    return moment(date).format('hh:mm A')
}