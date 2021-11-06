function learn_json () {
  var hardware = [
  	{
  		id: 1,
  		name: 'motherboard',
  		model: 'ASUS'
  	},
  	{
  		id: 2,
  		name: 'CPU',
  		core: 4,
  		cache1: 1,
  		cache2: 2,
  		hZ: 4000
  	},
  	{
  		id: 3,
  		name: 'video card',
  		gender: 'nvidia',
  		memory: '4GB'
  	},
  	{
  		id: 4,
  		name: 'cooler',
  		speed: 1200,
  		sound: 'quiet'
  	},
  	{
  		id: 5,
  		name: 'monitor',
  		resolution: '4K',
  		matrix: 'IPS'
  	}
  ];
  function sort_name() {
  	for (var each in hardware) {
  		if (each < 5) {
  			console.log(hardware[each].name);
  		}
  	}
  };
  function sort_id() {
  	for (var each in hardware) {
  		if (each < 6) {
  			console.log(hardware[each]);
  		}
  	}
  };
  function find_name () {
  	for (var each in hardware) {
  		return console.log(hardware[5]);
  	}
  };
}



function sumNumbers(...numbers) {
  var sum = numbers.reduce((a, b) => {
    if (typeof b == 'number') {
      return a += b;
    }
    return a;
  }, 0);
  console.log(sum);
  // sumNumbers("f", 4, false, null, undefined, 't', 7);
}