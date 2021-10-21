class SleepRepository {
  constructor(sleepDataSet) {
    this.sleepDataSet = sleepDataSet;
  }

  renderUserSleepData(userID) {
    const userSleepOccurrences = this.sleepDataSet.filter((user) => user.userID === userID);
    return userSleepOccurrences;
  }

  calcAvgHoursSlept(userID) {
    const userSleepOccurrences = this.renderUserSleepData(userID);
    const totalHoursSlept = userSleepOccurrences.reduce((accumulator, sleepOccurrence) => {
      return accumulator + sleepOccurrence.hoursSlept;
    }, 0);

    return totalHoursSlept/userSleepOccurrences.length;
  }

  calcAvgSleepQuality(userID) {
    const userSleepOccurrences = this.renderUserSleepData(userID);
    const totalSleepQuality = userSleepOccurrences.reduce((accumulator, sleepOccurrence) => {
      return accumulator + sleepOccurrence.sleepQuality;
    }, 0);

    return totalSleepQuality/userSleepOccurrences.length;
  }

  calcHoursSleptOnDate(date, userID) {
    const userSleepOccurrences = this.renderUserSleepData(userID);
    const sleepOccurrenceOnDate = userSleepOccurrences.find((sleepOccurrence) => {
        return sleepOccurrence.date === date;
    });
    return sleepOccurrenceOnDate.hoursSlept;
  }

  calcSleepQualityOnDate(date, userID) {
    const userSleepOccurrences = this.renderUserSleepData(userID);
    const sleepOccurrenceOnDate = userSleepOccurrences.find((sleepOccurrence) => {
        return sleepOccurrence.date === date;
    });
    return sleepOccurrenceOnDate.sleepQuality;
  }

  calcHoursSleptInDayRange(days, userID) {
    const userSleepOccurrences = this.renderUserSleepData(userID);
    const hoursSleptForChosenDays = userSleepOccurrences
      .filter((sleepOccurrence) => {
        return days.includes(sleepOccurrence.date);
      })
      .map((renderedSleepOccurance) => {
        return renderedSleepOccurance.hoursSlept;
      })
    return hoursSleptForChosenDays;
  }

}

export default SleepRepository;