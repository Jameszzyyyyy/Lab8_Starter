// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('YesPhoneNumber1', () => {
    phoneNumber = '858-560-6809'
    expect(functions.isPhoneNumber(phoneNumber)).toBe(true);
});

test('YesPhoneNumber2', () => {
    phoneNumber = '502-536-4161'
    expect(functions.isPhoneNumber(phoneNumber)).toBe(true);
});

test('NoPhoneNumber1', () => {
    phoneNumber = '858-56'
    expect(functions.isPhoneNumber(phoneNumber)).toBe(false);
});

test('NoPhoneNumber2', () => {
    phoneNumber = '#2'
    expect(functions.isPhoneNumber(phoneNumber)).toBe(false);
});

test('YesEmail1', () => {
    Email = 'abc@gmail.com'
    expect(functions.isEmail(Email)).toBe(true);
});

test('YesEmail2', () => {
    Email = '123@qq.com'
    expect(functions.isEmail(Email)).toBe(true);
});

test('NoEmail1', () => {
    Email = 'abc@'
    expect(functions.isEmail(Email)).toBe(false);
});

test('NoEmail2', () => {
    Email = '123@gmail.com@qq.com'
    expect(functions.isEmail(Email)).toBe(false);
});

test('YesStrongPass1', () => {
    password = 'my_password'
    expect(functions.isStrongPassword(password)).toBe(true);
});

test('YesStrongPass2', () => {
    password = 'CSE110'
    expect(functions.isStrongPassword(password)).toBe(true);
});

test('NoStrongPass1', () => {
    password = 'ajshvbjdbvhjabsddfefefe'
    expect(functions.isStrongPassword(password)).toBe(false);
});

test('NoStrongPass2', () => {
    password = '12345'
    expect(functions.isStrongPassword(password)).toBe(false);
});

test('YesDate1', () => {
    date = '25/05/2023'
    expect(functions.isDate(date)).toBe(true);
});

test('YesDate2', () => {
    date = '27/12/2001'
    expect(functions.isDate(date)).toBe(true);
});

test('NoDate1', () => {
    date = '11/11/11'
    expect(functions.isDate(date)).toBe(false);
});

test('NoDate2', () => {
    date = 'Date'
    expect(functions.isDate(date)).toBe(false);
});

test('YesColor1', () => {
    color = '8feb34'
    expect(functions.isHexColor(color)).toBe(true);
});

test('YesColor2', () => {
    color = '#2b3670'
    expect(functions.isHexColor(color)).toBe(true);
});

test('NoColor1', () => {
    color = '#1111111'
    expect(functions.isHexColor(color)).toBe(false);
});

test('NoColor2', () => {
    color = 'Color'
    expect(functions.isHexColor(color)).toBe(false);
});