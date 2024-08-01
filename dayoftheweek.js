function dayOfTheWeek(num) {
    const days = ['Invalid Input', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return days[num] || days[0];
}

const num = 3;
console.log(dayOfTheWeek(num));