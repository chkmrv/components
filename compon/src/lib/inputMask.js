import InputMask from 'inputmask-core';

class BaseFormatCharacter {
    constructor(pattern) {
        this.pattern = pattern;
    }

    validate(char) {
        return this.pattern.test(char);
    }

    transform(char) {
        return char;
    }
}

class UpperCaseFormatCharacter extends BaseFormatCharacter {
    transform(char) {
        return char.toUpperCase();
    }
}

const CYRILLIC_PATTERN = /[а-яА-ЯёЁ]/;
const ROMAN_PATTERN = /[a-zA-Z]/;
const LETTER_PATTERN = /[а-яА-ЯёЁa-zA-Z]/;
const ALPHANUMERIC_PATTERN = /[а-яА-ЯёЁa-zA-Z0-9]/;

const FORMAT_CHARACTERS = {
    'c': new BaseFormatCharacter(CYRILLIC_PATTERN),
    'C': new UpperCaseFormatCharacter(CYRILLIC_PATTERN),
    'r': new BaseFormatCharacter(ROMAN_PATTERN),
    'R': new UpperCaseFormatCharacter(ROMAN_PATTERN),
    'a': new BaseFormatCharacter(LETTER_PATTERN),
    'A': new UpperCaseFormatCharacter(LETTER_PATTERN),
    '*': new BaseFormatCharacter(ALPHANUMERIC_PATTERN),
    '#': new UpperCaseFormatCharacter(ALPHANUMERIC_PATTERN)
};

InputMask.prototype.formatValue = function formatValue(value) {
    return this.pattern.formatValue(value);
};

InputMask.prototype.printValue = function printValue(value) {
    if (!value) {
        return this.emptyValue;
    }

    const result = this.formatValue(value);
    return !!result ? result.join('') : '';
};

export function inputMask(options) {
    if (!options) {
        return null;
    }

    options.formatCharacters = {
        ...FORMAT_CHARACTERS,
        ...options.formatCharacters
    };

    return new InputMask(options);
}
