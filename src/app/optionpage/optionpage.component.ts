import { Merchant } from './../model/Merchant';
import { Component, OnInit, Input,ViewChild } from "@angular/core";
import { Chart } from "chart.js";
import { MostView } from "../model/MostView";
import { ServiceService } from "../service.service";
import { Product } from '../model/Product';
import { Order } from '../model/Order';
import {MatPaginator, MatTableDataSource} from '@angular/material';
@Component({
  selector: "app-optionpage",
  templateUrl: "./optionpage.component.html",
  styleUrls: ["./optionpage.component.css"]
})
export class OptionpageComponent implements OnInit {




  constructor(private service: ServiceService) {
    this.merchant = new Merchant();
  }

  ngOnInit() {
    this.getmostview();
    this.getallOrders();
    this.dataSource.paginator = this.paginator;
  }

  //Sold Products Graph Info
  mostview: MostView[] = [];
  soldcount = [];
  productName = [];
  chart: Chart[] = [];
//End of bestSeller


//bargraphlogic
  getmostview() {
    this.service.getmostviewed().subscribe(result => {
      this.mostview = result;
      this.soldcount = this.mostview.map(a => a.soldCount);
      this.productName = this.mostview.map(a => a.productFromMostView.name);


      this.chart.push(new Chart("canvas", {
        type: "bar",
        data: {
          labels: this.productName,
          datasets: [
            {
              label: "Number of Products Sold",
              data: this.soldcount,
              backgroundColor: "#3361FF",
              fill: false,
              borderWidth: 1
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [
              {
                display: true
              }
            ],
            yAxes: [
              {
                display: true
              }
            ]
          }
        }
      }));
    });
  }

  //bar graph logic ends

// Products Of Merchant
dataSourceProduct;
merchantid:string;
product:Product[] = [];
@Input() merchant :Merchant;
displayedColumns = ['id','name','brand'];
//End

//product display logic
getproductbymerchant(){

  this.service.getproductbymerchant(this.merchant.id).subscribe(
    result =>{this.product = result;

              this.dataSourceProduct = new MatTableDataSource(result); }
  )
}
//end of product display logic


//all orders attributes
dataSource;
order: Order[];
displayedColumnsorder = ['id', 'date','amount'];
@ViewChild(MatPaginator) paginator: MatPaginator;

getallOrders(){
  this.service.getAllOrder().subscribe(
    result => {this.order = result;
               this.dataSource = new MatTableDataSource(result);
    }

  )
}
//end all orders logic
}
