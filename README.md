# Ionic 2 with side menu and tabs.

## How to use:
- clone or download
- select the folder and run:
```
npm install
```
- to launch the project on your browser:
```
ionic serve
or
ionic serve -l 
```

## How to do it yourself.
1. ionic start ProjectName --v2
2. navigate to app/
3. create new file app.component.html
4. open app.component.ts and modify:
```
template: `<ion-nav [root]="rootPage"></ion-nav>`

to

templateUrl: 'app.component.html'
```

```
rootPage: any = TabsPage;

to

@ViewChild(Nav) nav: Nav;
  rootPage: any = TabsPage;
  pages: Array<{title: string, component: any}>;
```
