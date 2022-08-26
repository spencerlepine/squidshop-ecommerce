const UserData = require('./index');

const validMockUser = {
  firstName: 'Danny',
  lastName: 'Devito',
  email: 'devito@urmom.com',
  password: 'T0ttallY#ArdPa55$',
};

function validateFormTest(formDataName, validInputs, invalidInputs) {
  const testList = (expectedResult, list) => (
    list.forEach((input) => {
      const data = new UserData({ ...validMockUser, [formDataName]: input });
      expect(data.validateUserData()).toBe(expectedResult);
    })
  );

  testList(true, validInputs);
  testList(false, invalidInputs);
}

describe('UserData Class', () => {
  it('should store user registration data', () => {
    const userData = new UserData(validMockUser);
    expect(userData.getData()).toMatchObject(validMockUser);
  });

  it('should only accept valid name values', () => {
    const validNames = ['Danny', 'Duncan', 'Ross', 'Creations'];
    const invalidNames = ['', '99209837NOTMY REALNAME', ') DROP TABLE', '#nope', 'Ihaveaverylongnamebutitisokay'];
    validateFormTest('firstName', validNames, invalidNames);
  });

  it('should only accept valid email values', () => {
    const validEmails = [
      'john@gmail.com',
    ];
    const invalidEmails = [
      '',
      'this is def not an email',
      'mysite.ourearth.com',
      'mysite@.com.my',
      '@you.me.net',
      'mysite123@gmail.b',
      'mysite@.org.org',
      '.mysite@mysite.org',
      'mysite()*@gmail.com',
      'mysite..1234@yahoo.com',
    ];

    validateFormTest('email', validEmails, invalidEmails);
  });

  it('should only accept valid password values', () => {
    //  Minimum eight characters, at least one letter, one number and one special character:
    const validPasses = [
      '$nA$98488',
      '$Dd00pqRS1',
      'T0ttallY#ArdPa55$',
    ];
    const invalidPasses = [
      '',
      'this is def not a password',
      '$nN0PP', // below min 8 characters
      '$98012399', // no letter
      '$nNiud$$$', // no number
      '94747nfgjfh4', // no special
    ];
    validateFormTest('password', validPasses, invalidPasses);
  });

  it('should be hashing passwords after validating', () => {
    const validPass = new UserData(validMockUser);
    expect(validPass.validateUserData()).toBeTruthy();
    expect(validPass.getData()).not.toBe(validMockUser.password); // un-hashed
  });
});
