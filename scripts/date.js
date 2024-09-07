function updateDateTime() {
    const now = new Date();
    const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const amPm = hours >= 12 ? 'pm' : 'am';
    const twelveHourFormat = hours % 12 || 12;

    const dateString = `${twelveHourFormat}:${minutes}${amPm} ${daysOfWeek[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}${getOrdinalSuffix(now.getDate())}`;

    document.getElementById('the-clock').textContent = dateString;
}

function getOrdinalSuffix(day) {
    if ([1, 21, 31].includes(day)) return 'st';
    if ([2, 22].includes(day)) return 'nd';
    if ([3, 23].includes(day)) return 'rd';
    return 'th';
}

// Update every minute
setInterval(updateDateTime, 60000);

// Initial update
updateDateTime();