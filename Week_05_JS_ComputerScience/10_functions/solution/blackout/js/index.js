$(document).ready(readyFunction);

function readyFunction() {
	var lightStatus = "off";
	$("#light-switch").click(toggleLights);

	function toggleLights() {
		if (lightStatus === "off") {

			$("body").addClass("light-on");
			$("body").removeClass("light-off");


			$("#switch-label").text("off");

			lightStatus = "on";
		}
		else {
			$("body").addClass("light-off");
			$("body").removeClass("light-on");

			$("#switch-label").text("on");

			lightStatus = "off";

		}
	}


}