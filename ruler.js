function handleMouseMove(e) {
	const { clientY } = e
	console.log(e)
	// if (clientY < 5) {
	// 	window.resizeBy(0, 1)
	// 	window.moveBy(0, -1)
	// }
}

document.addEventListener('mousemove', handleMouseMove)
