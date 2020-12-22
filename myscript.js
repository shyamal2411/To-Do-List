var todos = new Array();
function get_todos() {
	var todos_str = localStorage.getItem('todo');
	if (todos_str !== null) {
		todos = JSON.parse(todos_str);
	}
	return todos;
}
function add() {
	var task = document.getElementById('task').value;
	todos.push(task);
	localStorage.setItem('todo', JSON.stringify(todos));

	show();
	return false;
}
function clearDefault(a) {
	if (a.defaultvalue == a.value) {
		a.value = ' ';
	}
}

function remove() {
	var id = this.getAttribute('id');
	var todos = get_todos();
	todos.splice(id, 1);
	localStorage.setItem('todo', JSON.stringify(todos));
	show();
	return false;
}

function show() {
	var todos = get_todos();
    
	var html = '<ol>';
	for (var i = 0; i < todos.length; i++) {
		html +='<li>' +	todos[i] +'<button class="remove" id="' +i + "\t\t"+ '"> Delete</button> </li>';
	}
	html += '</ol>';
	
	document.getElementById('todo').innerHTML = html;

	var buttons = document.getElementsByClassName('remove');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', remove);
	}
}

document.getElementById('add').addEventListener('click', add);
show();
