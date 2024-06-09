const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const prices = document.querySelectorAll(".price")
const table = document.querySelector("table")

const getSum = () => {
	let sum = 0; // reset sum each time the button is clicked
	for (let val of prices) {
		let value = Number(val.innerText) ;
		sum += value;
	}
	const row = document.createElement("tr");
	row.innerHTML = `
	<td>Total Price</td>
      <td>${sum}</td>`
	table.append(row)
};

getSumBtn.addEventListener("click", getSum);