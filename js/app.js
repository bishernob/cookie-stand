'use strict'

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm',
'4pm','5pm','6pm','7pm'];

function Get_random_number(minimum,maximum){
    var random_number=Math.floor(Math.random()* (maximum-minimum)*13)+1;
    return random_number;
}

var Seattle =
{
    name:'Seattle',
    min_customer_per_hour :23,
    max_customer_per_hour:65,
    avg_cookies_sale:6.3,
    Number_of_customer_per_hour:[],
    Number_of_cookies_per_hour:[],
    Total_num_of_cookies : 0,
    Numberofcustomer_perhour:function(){

        for (var x =0;x<hours.length;x++)
        {
            this.Number_of_customer_per_hour[x]= Get_random_number(this.min_customer_per_hour,this.max_customer_per_hour);    
        }
    },


    Numberofcookies_perhour:function(){
        var numberofcookies;
        this.Numberofcustomer_perhour();
        for(var x = 0; x<this.Number_of_customer_per_hour.length;x++){
            numberofcookies = Math.ceil(this.Number_of_customer_per_hour[x]*this.avg_cookies_sale);
            this.Number_of_cookies_per_hour.push(numberofcookies);
            this.Total_num_of_cookies += numberofcookies;
            
        }
        return this.Total_num_of_cookies;
    },

    render :function()
    {
        var Seattle_location = document.getElementById('Seattle_branch');
        var section = document.createElement('section');
        Seattle_location.appendChild(section);
        
        var location_cookies_store_name = document.createElement('h3');
        location_cookies_store_name.textContent=this.name;
        section.appendChild(location_cookies_store_name); 

        var list_location_name = document.createElement('ul');
        section.appendChild(list_location_name);
        
        this.Numberofcookies_perhour();

        for(var x=0;x<this.Number_of_cookies_per_hour.length;x++ ){

            var listitems=document.createElement('li');
            listitems.textContent= hours[x] +':' + this.Number_of_customer_per_hour[x] + 'cookies';
            Seattle_location.appendChild(listitems);
        }

        var listitems = document.createElement('li');
        listitems.textContent = 'total = ' + this.Total_num_of_cookies+'cookies';
        Seattle_location.appendChild(listitems);
    }
};

Seattle.render()

var Tokyo =
{
    name:'Tokyo',
    min_customer_per_hour :23,
    max_customer_per_hour:65,
    avg_cookies_sale:6.3,
    Number_of_customer_per_hour:[],
    Number_of_cookies_per_hour:[],
    Total_num_of_cookies : 0,
    Numberofcustomer_perhour:function(){

        for (var x =0;x<hours.length;x++)
        {
            this.Number_of_customer_per_hour[x]= Get_random_number(this.min_customer_per_hour,this.max_customer_per_hour);    
        }
    },


    Numberofcookies_perhour:function(){
        var numberofcookies;
        this.Numberofcustomer_perhour();
        for(var x = 0; x<this.Number_of_customer_per_hour.length;x++){
            numberofcookies = Math.ceil(this.Number_of_customer_per_hour[x]*this.avg_cookies_sale);
            this.Number_of_cookies_per_hour.push(numberofcookies);
            this.Total_num_of_cookies += numberofcookies;
            
        }
        return this.Total_num_of_cookies;
    },

    render :function()
    {
        var Tokyo_location = document.getElementById('Tokyo_branch');
        var section = document.createElement('section');
        Tokyo_location.appendChild(section);
        
        var location_cookies_store_name = document.createElement('h3');
        location_cookies_store_name.textContent=this.name;
        section.appendChild(location_cookies_store_name); 

        var list_location_name = document.createElement('ul');
        section.appendChild(list_location_name);
        
        this.Numberofcookies_perhour();

        for(var x=0;x<this.Number_of_cookies_per_hour.length;x++ ){

            var listitems=document.createElement('li');
            listitems.textContent= hours[x] +':' + this.Number_of_customer_per_hour[x] + 'cookies';
            Tokyo_location.appendChild(listitems);
        }

        var listitems = document.createElement('li');
        listitems.textContent = 'total = ' + this.Total_num_of_cookies+'cookies';
        Tokyo_location.appendChild(listitems);
    }
};
Tokyo.render()


var Dubai =
{
    name:'Dubai',
    min_customer_per_hour :23,
    max_customer_per_hour:65,
    avg_cookies_sale:6.3,
    Number_of_customer_per_hour:[],
    Number_of_cookies_per_hour:[],
    Total_num_of_cookies : 0,
    Numberofcustomer_perhour:function(){

        for (var x =0;x<hours.length;x++)
        {
            this.Number_of_customer_per_hour[x]= Get_random_number(this.min_customer_per_hour,this.max_customer_per_hour);    
        }
    },


    Numberofcookies_perhour:function(){
        var numberofcookies;
        this.Numberofcustomer_perhour();
        for(var x = 0; x<this.Number_of_customer_per_hour.length;x++){
            numberofcookies = Math.ceil(this.Number_of_customer_per_hour[x]*this.avg_cookies_sale);
            this.Number_of_cookies_per_hour.push(numberofcookies);
            this.Total_num_of_cookies += numberofcookies;
            
        }
        return this.Total_num_of_cookies;
    },

    render :function()
    {
        var Dubai_location = document.getElementById('Dubai_branch');
        var section = document.createElement('section');
        Dubai_location.appendChild(section);
        
        var location_cookies_store_name = document.createElement('h3');
        location_cookies_store_name.textContent=this.name;
        section.appendChild(location_cookies_store_name); 

        var list_location_name = document.createElement('ul');
        section.appendChild(list_location_name);
        
        this.Numberofcookies_perhour();

        for(var x=0;x<this.Number_of_cookies_per_hour.length;x++ ){

            var listitems=document.createElement('li');
            listitems.textContent= hours[x] +':' + this.Number_of_customer_per_hour[x] + 'cookies';
            Dubai_location.appendChild(listitems);
        }

        var listitems = document.createElement('li');
        listitems.textContent = 'total = ' + this.Total_num_of_cookies+'cookies';
        Dubai_location.appendChild(listitems);
    }
};

Dubai.render()

var Paris =
{
    name:'Paris',
    min_customer_per_hour :23,
    max_customer_per_hour:65,
    avg_cookies_sale:6.3,
    Number_of_customer_per_hour:[],
    Number_of_cookies_per_hour:[],
    Total_num_of_cookies : 0,
    Numberofcustomer_perhour:function(){

        for (var x =0;x<hours.length;x++)
        {
            this.Number_of_customer_per_hour[x]= Get_random_number(this.min_customer_per_hour,this.max_customer_per_hour);    
        }
    },


    Numberofcookies_perhour:function(){
        var numberofcookies;
        this.Numberofcustomer_perhour();
        for(var x = 0; x<this.Number_of_customer_per_hour.length;x++){
            numberofcookies = Math.ceil(this.Number_of_customer_per_hour[x]*this.avg_cookies_sale);
            this.Number_of_cookies_per_hour.push(numberofcookies);
            this.Total_num_of_cookies += numberofcookies;
            
        }
        return this.Total_num_of_cookies;
    },

    render :function()
    {
        var Paris_location = document.getElementById('Paris_branch');
        var section = document.createElement('section');
        Paris_location.appendChild(section);
        
        var location_cookies_store_name = document.createElement('h3');
        location_cookies_store_name.textContent=this.name;
        section.appendChild(location_cookies_store_name); 

        var list_location_name = document.createElement('ul');
        section.appendChild(list_location_name);
        
        this.Numberofcookies_perhour();

        for(var x=0;x<this.Number_of_cookies_per_hour.length;x++ ){

            var listitems=document.createElement('li');
            listitems.textContent= hours[x] +':' + this.Number_of_customer_per_hour[x] + 'cookies';
            Paris_location.appendChild(listitems);
        }

        var listitems = document.createElement('li');
        listitems.textContent = 'total = ' + this.Total_num_of_cookies+'cookies';
        Paris_location.appendChild(listitems);
    }
};


Paris.render()



var Paris =
{
    name:'Paris',
    min_customer_per_hour :23,
    max_customer_per_hour:65,
    avg_cookies_sale:6.3,
    Number_of_customer_per_hour:[],
    Number_of_cookies_per_hour:[],
    Total_num_of_cookies : 0,
    Numberofcustomer_perhour:function(){

        for (var x =0;x<hours.length;x++)
        {
            this.Number_of_customer_per_hour[x]= Get_random_number(this.min_customer_per_hour,this.max_customer_per_hour);    
        }
    },


    Numberofcookies_perhour:function(){
        var numberofcookies;
        this.Numberofcustomer_perhour();
        for(var x = 0; x<this.Number_of_customer_per_hour.length;x++){
            numberofcookies = Math.ceil(this.Number_of_customer_per_hour[x]*this.avg_cookies_sale);
            this.Number_of_cookies_per_hour.push(numberofcookies);
            this.Total_num_of_cookies += numberofcookies;
            
        }
        return this.Total_num_of_cookies;
    },

    render :function()
    {
        var Lima_location = document.getElementById('Lima_branch');
        var section = document.createElement('section');
        Lima_location.appendChild(section);
        
        var location_cookies_store_name = document.createElement('h3');
        location_cookies_store_name.textContent=this.name;
        section.appendChild(location_cookies_store_name); 

        var list_location_name = document.createElement('ul');
        section.appendChild(list_location_name);
        
        this.Numberofcookies_perhour();

        for(var x=0;x<this.Number_of_cookies_per_hour.length;x++ ){

            var listitems=document.createElement('li');
            listitems.textContent= hours[x] +':' + this.Number_of_customer_per_hour[x] + 'cookies';
            Lima_location.appendChild(listitems);
        }

        var listitems = document.createElement('li');
        listitems.textContent = 'total = ' + this.Total_num_of_cookies+'cookies';
        Lima_location.appendChild(listitems);
    }
};


Lima.render()
