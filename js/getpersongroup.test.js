import {getPersonGroup, personRanges} from './percentiles.js';

test('Una persona de 10 años pertenece al grupo: firstGroup', () => {
    expect(getPersonGroup(10)).toBe('firstGroup');
});

test('Una persona de 13 años pertenece al grupo: secondGroup', () => {
    expect(getPersonGroup(13)).toBe('secondGroup');
});

test('Una persona de 16 años pertenece al grupo: thirdGroup', () => {
    expect(getPersonGroup(16)).toBe('thirdGroup');
});

test('Una persona de 17 años pertenece al grupo: fourthGroup', () => {
    expect(getPersonGroup(17)).toBe('fourthGroup');
});

test('Una persona de 18 años pertenece al grupo: fifthGroup', () => {
    expect(getPersonGroup(18)).toBe('fifthGroup');
});
