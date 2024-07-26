
// simulate trafic light
function traffic_light () {
	let colors = ["red", "yellow", "green"];
	let count_index = 0;

	// Funcție pentru a actualiza culoarea semaforului
	function update_color() {
		
		// Curăță consola
		console.clear();

		// Afișează culoarea curentă
		console.log(colors[count_index]);

		// Actualizează indexul culorii curente
        count_index = (count_index + 1) % colors.length;
	}

	// Schimbă culoarea la fiecare 5 secunde
    setInterval(update_color, 5000);
}