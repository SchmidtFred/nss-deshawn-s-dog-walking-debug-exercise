import { getWalkers, getCities } from "./database.js";

document.addEventListener("click", (clickEvent) => {
	const itemClicked = clickEvent.target;
	if (itemClicked.id.startsWith("walker")) {
		const cities = getCities();
		const [, walkerId] = itemClicked.id.split("--");

		for (const walker of walkers) {
			if (walker.id === parseInt(walkerId)) {
				window.alert(`${walker.name} services ${cities.find(item => item.id === walker.cityId).name}`);
			}
		}
	}
});

const walkers = getWalkers();

export const Walkers = () => {
	let walkerHTML = "<ul>";

	for (const walker of walkers) {
		walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`;
	}

	walkerHTML += "</ul>";

	return walkerHTML;
};

// walkers - 3
