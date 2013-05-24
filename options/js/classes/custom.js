function confirm_setting(container) {
	var to_append = document.createElement("div");
	to_append.id = "confirm"
	to_append.innerHTML = "Saved!"
	container.appendChild(to_append);
}

function destroy_confirmation(container) {
	var confirmation = document.getElementById("confirm");
	$(confirmation).set('tween', {duration: 2500}).fade('out');
	setTimeout(function(container, confirmation) {
		container.removeChild(confirmation);
	}, 2501, container, confirmation);	
}