const findTheOldest = function(people) {
   return people.reduce((older, currentPerson) => {
        let currentPersonDeathYear = "yearOfDeath" in currentPerson? currentPerson.yearOfDeath : new Date().getFullYear();
        let currentPersonBirthYear = currentPerson.yearOfBirth;
        let currentPersonAge = currentPersonDeathYear - currentPersonBirthYear;

        let olderDeathYear = "yearOfDeath" in older? older.yearOfDeath : new Date().getFullYear();
        let olderBirthYear = older.yearOfBirth;
        let olderPersonAge = olderDeathYear - olderBirthYear;
        
        return currentPersonAge > olderPersonAge? currentPerson : older;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
