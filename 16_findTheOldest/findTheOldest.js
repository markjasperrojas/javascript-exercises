const findTheOldest = function (array) {
  const currentDate = new Date().getFullYear();
  const newArr = array
    .map((person) => {
      if (person.yearOfDeath === undefined) {
        person.yearOfDeath = currentDate;
      }

      return person;
    })
    .sort((firstPerson, secondPerson) => {
      const firstPersonAge = firstPerson.yearOfDeath - firstPerson.yearOfBirth;
      const secondPersonAge =
        secondPerson.yearOfDeath - secondPerson.yearOfBirth;

      return firstPersonAge > secondPersonAge ? -1 : 1;
    });

  return newArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
