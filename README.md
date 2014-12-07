#myQuery
=======

Mała biblioteka stworzona do manipulacji objektami DOM

Biblioteka zawiera podstawowe funkcjie związane z elementami dokumentu html

##Metody związane z elementami DOM
================================
```js
  $$(selektor);
```
Funkcja ta może przyjmować:

- nazwę tagu np $$("body") 
- nazwę klasy porzedzoną "." 
- nazwę id poprzedzoną "#" 
- \<nazwa_tagu\> zwraca nowy objekt tego typu 

Funkcja ta zwraca zawsze jeden objekt zwiazane jest z tym, że dalej możemy wykożystać wszystkie funkcjie jakie można wywołac na elemencie używając do tego np. document.getElementById

####css
```js
  $$(selektor).css();
```
Metoda ustawiająca dane właściwości elementu, metoda ta moze przyjmowac dwa argumenty
- jeżeli przyjmuje jeden musi być objektem 
- w innym przypadku przyjmuje dwa stringi gdzie pierwszy jest właciwością a drugi wartością

####show
```js
  $$(selektor).show();
```

Metoda ta ustawia właściwość 
```css
  display:block;
```
####isHidden
```js
  $$(selektor).isHidden();
```

Metoda zwraca informacje na temat czy dany element jest ukryty

####hide
```js
  $$(selektor).hide();
```
Metoda ukrywa dany element

####fadeIn
```js
  $$(selektor).fadeIn();
```
Metoda stopniowo ukazuje element, może przyjmować dwa argument 
- pierwszy to czas pokazania się elementu domyślnie 0,5s
- drugi to funkcjia wywoływana po zakończeni tego procesu

####fadeOut
```js
  $$(selektor).fadeOut();
```
Metoda stopniowo uktywa element, może przyjmować dwa argument 
- pierwszy to czas ukrywania się elementu domyślnie 0,5s
- drugi to funkcjia wywoływana po zakończeni tego procesu


####addClass
```js
  $$(selektor).addClass();
```
Metoda nadaje nową klasę obiektowi

####hasClass
```js
  $$(selektor).hasClass();
```
Metoda zwraca wartość logiczną informację na temat posiadania danej klasy


####removeClass
```js
  $$(selektor).removeClass();
```
Metoda usuwa klase 





