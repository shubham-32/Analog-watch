function moveHands() {
    const now = new Date();
    const hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();
  
    const hourAngle = (hour * 30) + (0.5 * minute); // 30 degrees per hour, 0.5 degrees per minute
    const minuteAngle = (minute * 6) + (0.1 * second); // 6 degrees per minute, 0.1 degrees per second
    const secondAngle = second * 6; // 6 degrees per second
  
    document.getElementById('hour-hand').style.transform = `translate(-50%, -100%) rotate(${hourAngle}deg)`;
    document.getElementById('minute-hand').style.transform = `translate(-50%, -100%) rotate(${minuteAngle}deg)`;
    document.getElementById('second-hand').style.transform = `translate(-50%, -100%) rotate(${secondAngle}deg)`;
  }
  
  setInterval(moveHands, 1000); // Update every second
  