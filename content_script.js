var div = document.createElement("div");
div.id = "robotFormDiv";
div.innerHTML = '<form id="robotForm" onsubmit="return false;">'
	+ '文字：<input id="robotContent" type="text">'
	+ '</form>';
document.body.appendChild(div);

//angular.module("Controllers").controller("chatSenderController", function($score) {
//	$score.editAreaCtn = 'abc';
//});

function getChild(ele, cls)
{
	for (var index in ele.childNodes) {
		var node = ele.childNodes[index];
		if (node.className && node.className.indexOf(cls) >= 0) {
			return node;
		}
	}
	return false;
}

function simulateKeyEvent(ele, eventType, character) {
	console.debug("simulateKeyEvent(ele = ", ele, ", character = ", character, ")\n");
	var evt = document.createEvent("KeyboardEvent");
	evt.initKeyboardEvent(eventType, true, true, null,
			false, false, false, false, 65, 65);
	console.debug(evt, "\n");
	ele.dispatchEvent(evt);
}

//var navChat = document.getElementById("J_NavChatScrollBody");
//var navList = getChild(navChat, "ng-scope");
//var i = 0;
//for (var index in navList.childNodes) {
//	console.log("index = ", index, "\n");
//	if (++i > 1) {
//		console.log(navList.childNodes[index], "\n");
//		var e = document.createEvent ("MouseEvent");
//		e.initMouseEvent ("click", true, true, window, 0, 
//				event.screenX, event.screenY, event.clientX, event.clientY, 
//				event.ctrlKey, event.altKey, event.shiftKey, event.metaKey, 
//				0, null);
//		navList.childNodes[index].dispatchEvent(e);
//		break;
//	}
//}
//
var chatArea = document.getElementById("chatArea");
var boxFoot = getChild(chatArea, "box_ft");
var actPanel = getChild(boxFoot, "action");
var sendBtn = getChild(actPanel, "btn_send");

var editArea = document.getElementById("editArea");

document.getElementById("robotForm").addEventListener("submit", function() {
	editArea.innerHTML = document.getElementById("robotContent").value;
	editArea.click();
	simulateKeyEvent(editArea, "keydown", "A");
	simulateKeyEvent(editArea, "keyup", "A");
	sendBtn.click();
	return false;
}, false);
