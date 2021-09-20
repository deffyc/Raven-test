import {getPercentile, eigthGroup, fourthGroup} from './percentiles.js';

test('El percentil de una persona de 60 años con 40 aciertos es 10', () => {
    expect(getPercentile(40, eigthGroup)).toBe("25");
});

test('El percentil de una person de 45 años con 50 aciertos es 75', () => {
    expect(getPercentile(50, eigthGroup)).toBe("75");
});

test('El percentil de una persona de 17 años con 54 aciertos es 95', () => {
    expect(getPercentile(54, fourthGroup)).toBe("95");
});

test('El percentil de una persona de 17 años con 29 aciertos es 10', () => {
    expect(getPercentile(29, fourthGroup)).toBe("10");
});

test('El percentil de una persona de 64 años con 60 aciertos es 99', () => {
    expect(getPercentile(60, eigthGroup)).toBe("99");
});

test('El percentil de una persona de 17 años con 56 aciertos es 99', () => {
    expect(getPercentile(56, fourthGroup)).toBe("99");
});
