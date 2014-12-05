/*
* Lukasz Mical
* lukaszmical.pl
*
* Mala biblioteka zawierajaca podstawowe 
* funkcje potrzebne do manipulawania objektami DOM
* oraz ustawiania plikow cookie, wukonuwania zapytan do serwera
*/
function _myQuery(selector)
{ 
	/* 
	* ustalamy element objektu 
	* jeżeli przekazujemy objekt przypisujemy go bezposrednio
	* przeszukujemy dokument gdy przekazujemy nazwe 
	* elementu objęty w "<>" tworzymy nowy objekt tego typu
	* w innym przypadku tworzumy element "DIV"
	*/
	
	if(typeof selector ==="object")
	{
		this.el = selector;
	}
	else if(selector.match(/^[<]{1}[a-z]+[>]{1}$/i))
	{
		this.el = document.createElement(selector.replace(/</g, '').replace(/>/g, ''));
	}
	else if(document.querySelector(selector))
	{
		this.el =document.querySelector(selector);
	}	
	else
	{
		this.el = document.createElement("div");
	}
	
	// funkcja ustalająca style elementu przyjmuje objekt z 
	// wlasciwosciami lub wlaciwosc i jej wartosc
	this.el.css=function(property, value)
	{
		if(typeof property == "string")
		{
			if(value){
				this.style[property] = value;
			}
			else{
				return getComputedStyle(this)[property];
			}
		}
		else if(typeof property == "object")
		{
			for(var prop in property)
			{
				this.style[prop] = property[prop];
			}
		}
		return this;	
	}
	
	
	// uakaznanie elementu
	this.el.show=function()
	{
		this.style.display = "block";
		return this;
	}
	
	
	// ukrycie elementu
	this.el.hide=function()
	{
		this.style.display = "none";
		return this;
	}	
	
	// powolne ukazanie elemntu z  mozliwoscia wykonania funkcji po zakonczeniu
	this.el.fadeIn=function(time,callback) 
	{
		time = time || 500;
		
		this.style.opacity=0;
		this.style.display = "block";
		
		var element = this,
			step=(1/time)*20;
		for(var i=0,o=0;i<time;i+=20)
		{
			(function(time,element,opacity) 
			{
				setTimeout(function() {element.style.opacity=opacity;},time);
			})(i,this,o);
			o+=step;
		}
		setTimeout(function() {
				element.style.opacity = 1;
				callback&&callback();
		},time);
		return this;
	}
	
	
	// powolne ukrycie elemntu z  mozliwoscia wykonania funkcji po zakonczeniu
	this.el.fadeOut=function(time,callback)
	{
		time = time || 500;
		
		this.style.opacity=1;
		
		var element = this,
			step=(1/time)*20;
		
		for(var i=0,o=1;i<time;i+=20)
		{
			(function(time,element,opacity) 
			{
				setTimeout(function() {element.style.opacity=opacity;},time);
			})(i,this,o);
			o-=step;
		}
		setTimeout(function() {
			element.style.display = "none";
			element.style.opacity=1;
			callback&&callback();
		},time);
		return this;		
	}
	
	//dodanie calsy do elementu
	this.el.addClass=function(className)
	{
		this.classList.add(className);
		return this;
	}
	
	//usuniecie klasy z elementu
	this.el.removeClass=function(className)
	{
		this.classList.remove(className);
		return this;
	}
	
	//sprawdzenie czy element zawiera daną klase
	this.el.hasClass=function(className)
	{
		return this.classList.contains(className);
	}
	
	
	// ustawienie tekstu elementu 
	this.el.setText=function(text)
	{
		if(text)
		{
			this.textContent = text;
			return this;
		}
		else
		{
			return this.textContent;
		}
	}	
	
	// wyczyszczenie elementu 
	this.el.empty=function()
	{
		this.textContent = "";
		return this;
	}
	
	// ustawienie wysokosci
	this.el.height=function(size)
	{
		if(typeof size =="undefined")
		{
			return this.offsetHeight;
		}
		
		if(size.toString().match(/px|pt|pc|cm|mm|in|%|em|en|ex/i))
		{
			this.style.height = size;
		}
		else
		{
			this.style.height = size+"px";
		}		
		return this;
	}
	
	// ustawienie szerokosci elementu 
	this.el.width=function(size)
	{
		if(typeof size =="undefined")
		{
			return this.offsetWidth;
		}
	
		if(size.toString().match(/px|pt|pc|cm|mm|in|%|em|en|ex/i))
		{
			this.style.width = size;
		}
		else
		{
			this.style.width = size+"px";
		}		
		return this;
	}
	
	// ustawia lub zwraca wartosc atrybutu data o danym kluczu
	this.el.data = function(key, value)
	{
		if(typeof value !="undefined")
		{
			this.setAttribute(key, value);
			return this;
		}
		else
		{
			return this.getAttribute(key);
		}
	}
	
	
	// usuwa atrybut data o danym kluczu 
	this.el.removeData=function(key)
	{		
		this.removeAttribute(key);
		return this;
	}
	
	// zwucenie rodzica elementu
	this.el.parent = function()
	{
		return this.parentNode;
	}
	
	return this.el;	
 }
 
 
function myQuery(selector){
	return new _myQuery(selector);
}

$$ = myQuery;
 
 /*
 * Funkcja ustawiajaca pliki cookie
 * jaki argument moze przyjmowac trzy argumenty
 * jezeli podamy wszystkie trzy ustawiamy plik cookie 
 * z danym kluczem i wartoscia na okrac dni podanym jako argument
 * baez podania trzeciego argumentu ustawiamy ciasteczko bez terminu
 * wygasniecia; W przypadku podania jednego argumentu 
 * funkcja zwraca wrtosc ciasteczka o kluczu przekazanym w argumencie
 */
myQuery.cookie=function(key,value,expires)
{
	if(typeof expires!="undefined")
	{
		var d = new Date();
		d.setTime(d.getTime() + (expires*24*60*60*1000));
		document.cookie = key + "=" + value + "; " + "expires="+d.toUTCString();
	}
	else if(typeof value!="undefined")
	{
		document.cookie=key+"="+value;
	}
	else if(typeof key!="undefined")
	{
		var currentCookie = "; " + document.cookie;
		var cookieArray = currentCookie.split("; " + key + "=");
		if (cookieArray.length == 2)
		{
			return cookieArray.pop().split(";").shift();
		}
		else
		{
			return false;
		}
	}
	else{
		throw new Error("First parametr is undefined")
	}
}

// usuwa dany plik cookie
myQuery.deleteCookie=function( key ) {
  document.cookie = key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// zwraca kopie dowolnego objektu 
myQuery.clone=function(object)
{
	return JSON.parse(JSON.stringify(object));
}

// wywoluje funkcje przekazana jako argument
// po zaladowaniu strony
myQuery.load=function(action)
{
	document.addEventListener('DOMContentLoaded', function(){
		action();
	});
}

// wywoluje dana funkcje po okreslonym czasie
myQuery.delay=function(callback,time)
{
	if(typeof callback ==="function")
	{
		setTimeout(function(){callback();},time||1000);
	}
}
