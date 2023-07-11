# ProjectWork
Tartalmazza egyrészt az applikációhoz, illetve az azt működtető dashbordhoz kapcsolódó fájlokat, kódokat, lásd a branchekben. 

Specifikáció: 
Blog-applikáció, a benne megjelenő postokat egy dashbordon keresztül hozom létre, annak adattartalmát (feliratkozók neve, posztok tartalma) pedig a Firebase tárolja. Szintén a firebase segítségével készült az authentikáció is. A dashbordban 3 egység található: a kategóriák, a postok, illetve a feliratkozók kezelésére. A dashboardba kizárólag az arra feljogosított admin léphet be. Az admin tud postokat létrehozni, törölni, illetve módosítani. Az adatok automatikusan tárolódnak a firebaseben, amely továbbítja a blog applikációhoz azokat.  

A fejlesztői környezet leírása:
Angular keretrendszer (Angular 16)
HTML
CSS
JavaScript
Bootstrap 5.3.0
TypeScript 5.1.3

Fejlesztési lehetőségek:
- A comment egységet még nem sikerült lefejleszteni: azok adattartalmát a firebase-ben tárolni szükséges, gondoskodi kell a nem megfelelő postok törlési lehetőségéről is.
- A blog applikáció footer része fejlesztésre vár, a contact fül egyáltalán nem készült el. 

