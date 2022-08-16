/*
Find the Smaller Angle
PrepBuddy has an analog clock which consists of two hands one for hour and another for minute. She wants to calculate the shorter angle formed between hour and minute hand at any given time.

Note: You have to complete Minimal_Angle function. No need to take any input.
*/

var Minimal_Angle = (h, m) => {
  if (h == 12) {
    h = 0;
  }

  if (m == 60) {
    m = 0;
    h += 1;
    if (h > 12) {
      h -= 12;
    }
  }

  let hourAngle = 0.5 * (h * 60 + m);
  let minuteAngle = 6 * m;

  let angle = Math.abs(hourAngle - minuteAngle);
  angle = Math.min(360 - angle, angle);
  return angle;
};

console.log(Minimal_Angle(5, 30));
