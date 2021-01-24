'use strict';

var hours = [
	'6am',
	'7am',
	'8am',
	'9am',
	'10am',
	'11am',
	'12pm',
	'1pm',
	'2pm',
	'3pm',
	'4pm',
	'5pm',
	'6pm',
	'7pm',
];

var locations_of_store =[];

var table_of_branches = document.getElementById('results');

function Branches(name,min_customer_per_hour,max_customer_per_hour,avg_cookies_sale)
{
	this.name=name;
	this.min_customer_per_hour=min_customer_per_hour;
	this.max_customer_per_hour=max_customer_per_hour;
	this.avg_cookies_sale=avg_cookies_sale;
	this.Number_of_customer_per_hour=[];
	this.Number_of_cookies_per_hour=[];
	this.Total_num_of_cookies=0;
	locations_of_store.push(this);
}


var Seattle = new Branches('Seattle', 2, 16, 4.6);
var Tokyo = new Branches('Tokyo', 2, 16, 4.6);
var Dubai = new Branches('Dubai', 2, 16, 4.6);
var Paris = new Branches('Paris', 2, 16, 4.6);
var Lima = new Branches('Lima', 2, 16, 4.6);

var tr = document.createElement('tr');
for (var j = 0; j <= hours.length; j++) {
	var td = document.createElement('td');
	if (j === 0) {
		td.textContent = ' ';
	} else {
		td.textContent = hours[j - 1];
	}
	

	tr.appendChild(td);
}
if (j === hours.length+1) {
	td.textContent = 'total';
}
tr.appendChild(td);
table_of_branches.appendChild(tr);

function Get_random_number(minimum, maximum) {
	var random_number = Math.floor(Math.random() * (maximum - minimum) * 13) + 1;
	return random_number;
}



Branches.prototype.Numberofcustomer_perhour = function() {
	for (var x = 0; x < hours.length; x++) {
		this.Number_of_customer_per_hour[x] = Get_random_number(this.min_customer_per_hour,this.max_customer_per_hour);
	}
	
};




Branches.prototype.Numberofcookies_perhour = function (){
	var numberofcookies;
	
		for (var x = 0; x < this.Number_of_customer_per_hour.length; x++) {
			numberofcookies = Math.ceil(this.Number_of_customer_per_hour[x] * this.avg_cookies_sale,);
			this.Number_of_cookies_per_hour.push(numberofcookies);
			this.Total_num_of_cookies += numberofcookies;
		}
		return this.Total_num_of_cookies;
};

Branches.prototype.render= function(){
	this.Numberofcookies_perhour();
	var tr = document.createElement('tr');
	var td = document.createElement('td');
	for (var i = 0; i <= this.Number_of_cookies_per_hour.length; i++){
		td=document.createElement('td');

		if(i === 0 ) {
			td.textContent = this.name;
			
		} else if(i === this.Number_of_cookies_per_hour.length) {
			// td.textContent = "total";
		}else {
			td.textContent = this.Number_of_cookies_per_hour[i - 1];
			
		}
		tr.appendChild(td);
	
	} 
	if(i === this.Number_of_cookies_per_hour.length+1) {
		td.textContent=this.Total_num_of_cookies;
		tr.appendChild(td);
	}	
	table_of_branches.appendChild(tr);

};



var form_input = document.getElementById("form_input");

form_input.addEventListener("submit", submit);


function submit(event) {


  event.preventDefault();


  var name_of_branche = event.target.name_of_branche.value;


  console.log("name", name_of_branche);

  var min_num_of_Customers =parseInt( event.target.min_num_of_Customers.value);

  console.log("minCustomers", min_num_of_Customers);


  var max_num_of_Customers =parseInt( event.target.max_num_of_Customers.value);

  console.log("maxCustomers", max_num_of_Customers);

  var avg_Cookies =parseInt( event.target.avg_Cookies.value);

  console.log("avgCookies", avg_Cookies);

  new Branches(name_of_branche,min_num_of_Customers,max_num_of_Customers,avg_Cookies);


  console.log(locations_of_store);

  render_for_new_branche(1);

  

}

=======


Branches.prototype.Numberofcustomer_perhour = function() {
	for (var x = 0; x < hours.length; x++) {
		this.Number_of_customer_per_hour[x] = Get_random_number(this.min_customer_per_hour,this.max_customer_per_hour);
	}
	
};




Branches.prototype.Numberofcookies_perhour = function (){
	var numberofcookies;
	
		for (var x = 0; x < this.Number_of_customer_per_hour.length; x++) {
			numberofcookies = Math.ceil(this.Number_of_customer_per_hour[x] * this.avg_cookies_sale,);
			this.Number_of_cookies_per_hour.push(numberofcookies);
			this.Total_num_of_cookies += numberofcookies;
		}
		return this.Total_num_of_cookies;
};

Branches.prototype.render= function(){
	this.Numberofcookies_perhour();
	var tr = document.createElement('tr');
	var td = document.createElement('td');
	for (var i = 0; i <= this.Number_of_cookies_per_hour.length; i++){
		td=document.createElement('td');

		if(i === 0 ) {
			td.textContent = this.name;
			
		} else if(i === this.Number_of_cookies_per_hour.length) {
			// td.textContent = "total";
		}else {
			td.textContent = this.Number_of_cookies_per_hour[i - 1];
			
		}
		tr.appendChild(td);
	
	} 
	if(i === this.Number_of_cookies_per_hour.length+1) {
		td.textContent=this.Total_num_of_cookies;
		tr.appendChild(td);
	}	
	table_of_branches.appendChild(tr);

};



Seattle.Numberofcustomer_perhour();
Seattle.render();
Tokyo.Numberofcustomer_perhour();
Tokyo.render();
Dubai.Numberofcustomer_perhour();
Dubai.render();
Paris.Numberofcustomer_perhour();
Paris.render();
Lima.Numberofcustomer_perhour();
Lima.render();

