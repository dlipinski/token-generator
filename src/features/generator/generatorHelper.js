const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

let running = false;
const typeDetails = async (setDetails, name, value) => {
	const valueArr = value.split('');
	let newValue = '';
	for (let i = 0; i < valueArr.length; i++) {
		newValue += valueArr[i];
		setDetails(oldDetails => ({ ...oldDetails, [name]: newValue }));
		await sleep(50);
		if (!running) break;
	}
};

const deleteDetails = async (setDetails, name, value) => {
	let newValue = value;
	for (let i = 0; i < value.length; i++) {
		newValue = newValue.slice(0, -1);
		setDetails(oldDetails => ({ ...oldDetails, [name]: newValue }));
		await sleep(20);
		if (!running) break;
	}
};
export const runSymulator = async (setDetails, setFeatures, setAdditions, setAccepted) => {
	const fields = ['name', 'symbol', 'decimals', 'totalSupply'];
	const values = ['Token Creator Coin', 'TCC', '16', '1000000'];
	const features = ['Ownable', 'Lockable', 'Burnable', 'Mintable'];
	const additions = ['Verify contract', 'Remove copyright'];
	running = true;
	(async () => {
		while (true) {
			await sleep(1000);
			if (!running) break;
			for (let i = 0; i < fields.length; i++) {
				await typeDetails(setDetails, fields[i], values[i]);
				await sleep(500);
				if (!running) break;
			}
			await sleep(500);
			if (!running) break;
			for (let i = 0; i < features.length; i++) {
				setFeatures(oldFeatures => oldFeatures.concat(features[i]));
				await sleep(400);
				if (!running) break;
			}
			await sleep(500);
			if (!running) break;
			for (let i = 0; i < additions.length; i++) {
				setAdditions(oldAdditions => oldAdditions.concat(additions[i]));
				await sleep(400);
				if (!running) break;
			}
			await sleep(500);
			if (!running) break;
			setAccepted(true);
			await sleep(2000);
			if (!running) break;

			setAccepted(false);
			await sleep(200);
			if (!running) break;
			for (let i = additions.length - 1; i >= 0; i--) {
				setAdditions(oldAdditions => oldAdditions.filter(x => x !== additions[i]));
				await sleep(100);
				if (!running) break;
			}
			await sleep(200);
			if (!running) break;
			for (let i = features.length - 1; i >= 0; i--) {
				setFeatures(oldFeatures => oldFeatures.filter(x => x !== features[i]));
				await sleep(100);
				if (!running) break;
			}
			await sleep(200);
			if (!running) break;
			for (let i = fields.length - 1; i >= 0; i--) {
				await deleteDetails(setDetails, fields[i], values[i]);
				await sleep(100);
				if (!running) break;
			}
		}
	})();
};

export const stopSymulator = (setDetails, setFeatures, setAdditions, setAccepted) => {
	running = false;
	setTimeout(() => {
		setDetails({ name: 'TestName', symbol: 'TestSymbol', decimals: '18', totalSupply: '1000000000' });
		setFeatures(['Ownable', 'Burnable']);
		setAdditions([]);
		setAccepted(true);
	}, 100);
	setTimeout(() => {
		//setDetails({});
	}, 200);
};