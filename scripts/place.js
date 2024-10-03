const windchill = document.querySelector("#windchill");
let temp = 26;
let wind = 5;

const windchill_compute = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));

windchill.textContent = `${windchill_compute.toFixed(2)}°C`;