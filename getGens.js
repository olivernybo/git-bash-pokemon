const fs = require('fs')
const fetch = require('node-fetch')

for (let i = 1; i <= 7; i++) {
	fetch('https://pokeapi.co/api/v2/generation/' + i).then(r => r.json()).then(r => {
		let gen = './gen' + i
		let pkmns = r.pokemon_species
		if (!fs.existsSync(gen)) fs.mkdirSync(gen)
		for (let j = 0; j < pkmns.length; j++) {
			let p = pkmns[j]
			fs.writeFileSync(gen + '/' + p.name, '')
		}
	})
}