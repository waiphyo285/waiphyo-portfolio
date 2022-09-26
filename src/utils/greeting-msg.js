function getGreetingMsg(hour) {
    if (hour > -1 && hour < 12) {
        return "Good Morning ☕";
    }
    else if (hour == 12) {
        return "Good Noon 🍚";
    }
    else if (hour > 12 && hour < 18) {
        return "Good Afternoon ☀️";
    }
    else {
        return "Good Evening 🌙";
    }
}

export default getGreetingMsg;
