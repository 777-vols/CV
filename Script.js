let basic = document.querySelector('#basic');
let http = document.querySelector('#http');
let html = document.querySelector('#html');
let js = document.querySelector('#js');
let react = document.querySelector('#react');
let ts = document.querySelector('#ts');

basic.onclick = function () {
	this.classList.toggle('active');
	this.parentElement.querySelector('.toggle__description').classList.toggle('active');
	this.parentElement.parentElement.querySelector('.toggle__info').classList.toggle('active');
}
http.onclick = function () {
	this.classList.toggle('active');
	this.parentElement.querySelector('.toggle__description').classList.toggle('active');
	this.parentElement.parentElement.querySelector('.toggle__info').classList.toggle('active');
}
html.onclick = function () {
	this.classList.toggle('active');
	this.parentElement.querySelector('.toggle__description').classList.toggle('active');
	this.parentElement.parentElement.querySelector('.toggle__info').classList.toggle('active');
}
js.onclick = function () {
	this.classList.toggle('active');
	this.parentElement.querySelector('.toggle__description').classList.toggle('active');
	this.parentElement.parentElement.querySelector('.toggle__info').classList.toggle('active');
}
react.onclick = function () {
	this.classList.toggle('active');
	this.parentElement.querySelector('.toggle__description').classList.toggle('active');
	this.parentElement.parentElement.querySelector('.toggle__info').classList.toggle('active');
}
ts.onclick = function () {
	this.classList.toggle('active');
	this.parentElement.querySelector('.toggle__description').classList.toggle('active');
	this.parentElement.parentElement.querySelector('.toggle__info').classList.toggle('active');
}