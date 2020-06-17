module.exports = {
	GetBottles: async (req, res, next) => {

		let {
			priceList
		} = req.body;

		let result

		let bottle1 = 0
		let pack1 = 0
		let box1 = 0
		var remaining = 0

		for (let i = 0; i < priceList.length; i++) {

			// console.log(priceList[i].n)
			// console.log("prices", priceList[i].prices)
			// console.log("pieces", priceList[i].pieces)

			result = priceList[i].pieces.reduce(function (a, b) {
				return a + b;
			}, 0);

			if (result <= priceList[i].prices[0]) {

				var temp = result % priceList[i].prices[1]

				var temp2 = (result - temp) / priceList[i].prices[1]

				remaining = priceList[i].prices[1] - temp2

				bottle1 = temp2
			} 
			
			else if (result > priceList[i].prices[0] || result <= priceList[i].prices[1]) {

				var temp = result % priceList[i].prices[1]

				var temp2 = (result - temp) / priceList[i].prices[1]

				remaining = priceList[i].prices[1] - temp2

				pack1 = temp2

			} 
			
			else if (result > priceList[i].prices[2]) {
				var temp = result % priceList[i].prices[1]

				var temp2 = (result - temp) / priceList[i].prices[1]

				remaining = priceList[i].prices[1] - temp2

				box1 = temp2
			} 
			
			else if (remaining <= priceList[i].prices[1]) {
				bottle1 += remaining
			} 
			
			else if (remaining > priceList[i].prices[2]) {
				pack1 += remaining
			}

			let array = []
			array.push(bottle1)
			array.push(pack1)
			array.push(box1)

			res.json({
				array
			});

		}
	}
}