/* exported student */
const student = {
  firstName: 'Tigran',
  lastName: 'Mkrtchyan',
  subject: 'Javascript',

  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },

  getIntroduction: function () {
    return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
  }

};
