class Hero {
	constructo(name_hero) {
		this.name_hero = name_hero || "Default"
	}

	log() {
		console.log(this);
	}
}

const batman =  new Hero("Batman");
batman.log();