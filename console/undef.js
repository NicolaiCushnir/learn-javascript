
/*
** Task: verifică dacă e undefined
*/

/*
** Explication : Uite-te! Citeodată vrei să verifici dacă nu scrii nimic în parametru din funcția ta
*/

// check if is undefined
function check_undef (arg) {
	return arg;
}

// eaca asa o sa daie gresală. fiincă arg se vede doar inantru la functie, adica ea este locala, cu alte cuvinte ca sa fie asa cum vrei :
// console.log(check_undef()); și ceia ce ai scris înăuntru la funcție
console.log(arg);