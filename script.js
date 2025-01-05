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
            document.getElementById(id).textContent = time;
            console.log(`${id}: ${time}`); // Debugging log
        }

        fetchMoonPhase();  // Hent månefase én gang
    }

    function fetchMoonPhase() {
        const url = "https://magnuski.com/moon/today";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("Moon phase data received:", data); // Debugging log
                const moonPhase = data.phase; // Ändre til din nya API struktur

                document.querySelectorAll("[id$='-moon']").forEach(moonElement => {
                    moonElement.textContent = moonPhase; // Oppdater månedsfasene
                });
            })
            .catch(error => console.error("Error fetching moon phase:", error));
    }

    setInterval(updateTime, 1000);
    updateTime(); // Initial call to set immediately
});