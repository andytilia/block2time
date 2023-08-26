class Session {
  constructor(startHour, startMinute) {
    this.startHour = startHour;
    this.startMinute = startMinute;
    this.course = '';
  }

  setCourse(title) {
    this.course = title;
  }

  toMinutes() {
    return this.startHour * 60 + this.startMinute;
  }

  static durationBetween(time1, time2) {
    const diff = Math.abs(time1.toMinutes() - time2.toMinutes());
    const hoursDiff = Math.floor(diff / 60);
    const minutesDiff = diff % 60;
    return new Time(hoursDiff, minutesDiff);
  }

  toString() {
    return `${this.course}: ${String(this.startHour).padStart(
      2,
      '0'
    )}:${String(this.startMinute).padStart(2, '0')}`;
  }
}
