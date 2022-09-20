function getGreetingMsg(hour) {
    if (hour > -1 && hour < 12) {
        return "မင်္ဂလာ နံနက်ခင်းပါ ☕";
    }
    else if (hour == 12) {
        return "မင်္ဂလာ နေ့လည်ခင်းပါ 🍚";
    }
    else if (hour > 12 && hour < 18) {
        return "မင်္ဂလာ နေ့လည်ခင်းပါ ☀️";
    }
    else {
        return "မင်္ဂလာ ညချမ်းပါ 🌙";
    }
}

export default getGreetingMsg;
