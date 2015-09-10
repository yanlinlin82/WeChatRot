var myDiv = document.createElement("div");
myDiv.id = "robotFormDiv";
myDiv.innerHTML = '<form id="robotForm" onsubmit="'
	+ 'document.getElementById(\'editArea\').innerHTML += robotForm.content.value; '
	+ 'document.getElementById(\'sendBtn\').click(); '
	+ 'return false;">文字：<input id="content" type="text"></form>';
document.body.appendChild(myDiv);
