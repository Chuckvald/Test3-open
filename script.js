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
            console.log(`${id}: ${time}`); // Logg klokkene for debugging
        }

        fetchMoonPhase();  // Hent månefase én gang
    }

    function fetchMoonPhase() {
        const url = "https://api.farmsense.net/v1/moonphases/?d=" + Math.floor(Date.now() / 1000);

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("Moon phase data received:", data); // Debugging log
                const moonPhase = data[0].Phase; // Hent månefasen
                document.querySelectorAll("[id$='-moon']").forEach(moonElement => {
                    moonElement.textContent = moonPhase; // Oppdater månedsfase
                });
            })
            .catch(error => console.error("Error fetching moon phase:", error));
    }

    setInterval(updateTime, 1000);
    updateTime(); // Initial call to set immediately
});