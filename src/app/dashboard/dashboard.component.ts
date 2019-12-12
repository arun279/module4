import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  today: number = Date.now();
  data = [{'name' : 'My experiments with Truth','author':'M.K.Gandhi ','price':'$145'},{'name' : 'The Merchant of venice','author':'William shakespeare','price':'$543'},{'name' : 'A Tale of Two Cities','author':'Charles Dickens ','price':'$64'},{'name' : 'Origin of species','author':'charles Darwin ','price':'$283'},{'name' : 'Time Machine ','author':'H.G. Wells ','price':'$12'},{'name' : 'Mein Kampf ','author':'Adolf Hitler ','price':'$384'},{'name' : 'Invisible Man  ','author':'H.G. Wells','price':'$123'}];
  dataSource: MatTableDataSource<{ 'name': string; 'author': string; 'price': string; }>;
  displayedColumns = ['name', 'author', 'price'];

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
  }
}