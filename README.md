#myQuery
=======

Mała biblioteka stworzona do manipulacji objektami DOM

Biblioteka zawiera podstawowe funkcjie związane z elementami dokumentu html

```js
  $$(selektor);
```
Funkcja ta może przyjmować:

- nazwę tagu np $$("body") 
- nazwę klasy porzedzoną "." 
- nazwę id poprzedzoną "#" 
- \<nazwa_tagu\> zwraca nowy objekt tego typu 

Funkcja ta zwraca zawsze jeden objekt zwiazane jest z tym, że dalej możemy wykożystać wszystkie funkcjie jakie można wywołac na elemencie używając do tego np. document.getElementById

##Metody związane z elementami DOM
================================
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


####setText
```js
  $$(selektor).setText();
```
Ustawia tekst w danym elemencie 

####empty
```js
  $$(selektor).emptyt();
```
Czyści dany element


####height
```js
  $$(selektor).height();
```
Ustawia wysokość elementu na wartość podaną jako argument jażeli podamy samą liczbę wartość będzie wyrażona w px. Metodę tą posiadają tylko objekty które nie posiadają atrybutu height

####width
```js
  $$(selektor).width();
```
Ustawia szerokość elementu na wartość podaną jako argument jażeli podamy samą liczbę wartość będzie wyrażona w px. Metodę tą posiadają tylko objekty które nie posiadają atrybutu width

####data
```js
  $$(selektor).data();
```
Ustawia lub zwraca atrybut data o podanym kluczu. W przypadku przekazania jednego argumentu funkcja zwraca wartośc atrybutu data o danym kluczu, nadomiast przy podanu dwóch argumentów zostaje ustawiona atrybut data o podanym kluczu i danej wartości.

####removeData
```js
  $$(selektor).removeData();
```
Usuwa atrybut data o danym kluczu

####parent
```js
  $$(selektor).parent();
```
Zwraca objekt _myQuery z rodzicem danego elementu

##Metody niezwiązane z elementami DOM
================================

####cookie
```js
  $$.cookie();
```
Metoda do działania na plikach cookie w zalężności od ilości argumentów funkcjia ustawia lub zwraca dane ciasteczko, i tak:
- dla 3 argumentów metoda ustawia ciasteczko o nazwie podanym jako pierwszy argument, wartości podanej jako drugi argument i czasie podanym w trzecim argumencie (wartość podana w dniach)
- dla 2 podabnie jak dla trzech lecz nie ustawia czasu wygaśnięcia ciasteczka
- dla 1 zwraca wartość ciasteczka gdy nie jest ustawione zwraca false

####removeCookie
```js
  $$.removeCookie();
```
Metoda usuwa ciasteczko o nazwie przkazanej jako argument

####clone
```js
  $$.clone();
```
Metoda zwraca kopie danego dowolnej zmiennej
