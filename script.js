document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        const timeZones = {
            "new-york-time": "America/New_York",
            "london-time": "Europe/London",
            "tokyo-time": "Asia/Tokyo",
            "sydney-time": "Australia/Sydney",
            "los-angeles-time": "America/Los_Angeles",
            "paris-time": "Europe/Paris",
            "dubai-time": "Asia/Dubai",
            "indianapolis-time": "America/Indiana/Indianapolis",
            "sao-paulo-time": "America/Sao_Paulo",
            "beijing-time": "Asia/Shanghai"
        };

        for (const [id, zone] of Object.entries(timeZones)) {
            const time = moment().tz(zone).format("HH:mm:ss");
            const timeElement = document.getElementById(id);
            const moonElement = document.getElementById(id + "-moon"); // Hent måne-symbol

            // Oppdater tiden
            if(timeElement) {
                timeElement.textContent = time;
                console.log(`${id}: ${time}`); // Logg tidene
            } else {
                console.error(`Element with ID ${id} not found.`);
            }

            // Oppdater månesymbolet basert på tid
            if (moonElement) {
                const hour = moment().tz(zone).hour();
                if (hour >= 6 && hour < 18) {
                    moon