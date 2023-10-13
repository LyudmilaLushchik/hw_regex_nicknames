import Validator from '../app';

test('should return true if username is valid', () => {
  const user = new Validator('my_user-123th');
  expect(user.validateUserName()).toBeTruthy();
});

test('should return false if username contains invalid characters', () => {
  const user = new Validator('my_user-123!');
  expect(user.validateUserName()).toBeFalsy();
});

test('should return false if username contains more than 3 digits in a row', () => {
  const user = new Validator('my_user-1234th');
  expect(user.validateUserName()).toBeFalsy();
});

test('should return false if username starts or ends with digits', () => {
  const user1 = new Validator('123-my_user');
  const user2 = new Validator('my_user-123');

  expect(user1.validateUserName()).toBeFalsy();
  expect(user2.validateUserName()).toBeFalsy();
});

test('should return false if username starts or ends with underscores', () => {
  const user1 = new Validator('_my_user-123th');
  const user2 = new Validator('my_user-123th_');
  expect(user1.validateUserName()).toBeFalsy();
  expect(user2.validateUserName()).toBeFalsy();
});

test('should return false if username starts or ends with dashes', () => {
  const user1 = new Validator('-my_user-123th');
  const user2 = new Validator('my_user-123th-');
  expect(user1.validateUserName()).toBeFalsy();
  expect(user2.validateUserName()).toBeFalsy();
});
