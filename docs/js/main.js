alert("¡Bienvenidas mujeres emprendedoras!");
alert("¿Deseas saber acerca de autonomía económica de las mujeres?");
let nombre = prompt("Cual es tu nombre");
alert("Hola "   + nombre +   " te invitamos a ser emprendedora y a desarrollar tu autonomía económica");

let timeNow = new Date();
let hours = timeNow.getHours().toString().length < 2 ? "0" + timeNow.getHours() : timeNow.getHours();
let minutes = timeNow.getMinutes().toString().length < 2 ? "0" + timeNow.getMinutes() : timeNow.getMinutes();
let seconds = timeNow.getSeconds().toString().length < 2 ? "0" + timeNow.getSeconds() : timeNow.getSeconds();
let mainTime = `${hours}:${minutes}:${seconds}`;

alert(timeNow);



var paiArray = [
	"Pai limón",
	"Pai queso",
	"Pai manzana"
]
var pricesArray=[
		20,
		30,
		25.5
	]

var productsArray=[
	{
		name:"Pai limón",
		description:"Some Text",
		price:"$40.00"
	},
	{
		name:"Pai queso",
		description:"Some Text",
		price:"$40.00"
	}
]
var paiObject = {
	name:"Pai manzana",
	description:"Some Text",
	price:"$40.00"
}



var someArray = [
	"item 1",
	"item 2",
	"item 3",
	"item 4",
	"item 5",
	"item 6",
	"item 7",
]

var paiArray = [{
	paiName:"Pai Limón",
	paiDescription:"Some text",
	paiPrice:"$23.00",
	paiImg:"imagenes/9.jpg"
},
{
	paiName:"Pai queso ",
	paiDescription:"Some text",
	paiPrice:"$23.00",
	paiImg:"imagenes/6.jpg"
},
{
	paiName:"Pai manzana",
	paiDescription:"Some text",
	paiPrice:"$23.00",
	paiImg:"imagenes/8.jpg"
}];

const sumaDosNumeros = (datoA,datoB) => {
	console.log(datoA + datoB)
}

const printFullName = (nombre,apaterno,amaterno) => {
	userName = nombre;
	userLastname = apaterno;
	userMothername = amaterno;
	console.log("mi nombre es "+userName+" "+userLastname+" "+userMothername)
}

const printVariables = ()=>{
	console.log(userName);
	console.log(userLastname);
	console.log(userMothername)
	console.log(someArray);
}

const getUserData = () => {
	let userName = $("#user-name").val();
	let userLastName = $("#user-lastname").val();
	let userMotherName = $("#user-mothername").val();
	console.log(userName + " " + userLastName + " " + userMotherName);
	let userObject = {};
	userObject.name = userName;
	userObject.lastName = userLastName;
	userObject.motherName = userMotherName;
	console.log(userObject);
}

$("#save-button").on("click",(event) => {
	getUserData();
})

$("#user-name").on("keypress",(event)=>{
	console.log($(event.target).val())
})

const getpaiData = ()=>{
	let paiName = $("#pai-name").val();
	let paiPrice = $("#pai-price").val();
	let paiDescription = $("#pai-description").val();
	let paiImg = $("#pai-img").val();

	let paiObject = {paiName,paiPrice,paiDescription,paiImg}
	console.log(paiObject)
	paiArray.push(paiObject)
	console.log(paiArray)
	printpaiCatalog();
}

$("#save-pai-btn").on("click",()=>{
	getpaiData()
})

const printpaiCatalog = ()=> {
	$("#pai-wrapper").empty();
	paiArray.forEach((item)=>{
		console.log(item)
		$("#pai-wrapper").append(`
			<div class="col-12 col-lg-4">
				<div class="card mt-3">
					<img class="w-100 d-block mx-auto" src="${item.paiImg}" class="card-img-top" alt="...">
					<div class="card-body">
						<h5 class="card-title">${item.paiName}</h5>
						<ul class="list-group">
						  <li class="list-group-item">${item.paiDescription}</li>
						  <li class="list-group-item text-right font-italic font-weight-bold text-success">${item.paiPrice}</li>
						</ul>
					</div>
				</div>
			</div>
		`)
		
	})
}