import { Component } from '@angular/core';

@Component ({
   selector: 'my-app',
   templateUrl: 'html/app.component.html',
   styleUrls: ['css/app.component.css']
})
export class AppComponent  { 
title : string = "Hello Angular 2!";
arrList : any[] = [
{
	"id" : "1";
	"name" : "Krishna";
},
{
	"id" : "2";
	"name" : "SIva";
},
{
	"id" : "3";
	"name" : "Vivek";
}
];
}
