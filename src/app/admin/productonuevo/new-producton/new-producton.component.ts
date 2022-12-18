import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producton } from '../shared/historiaclinica.model';
import { ProductonService } from '../shared/historiaclinica.service';

@Component({
  selector: 'app-new-producton',
  templateUrl: './new-producton.component.html',
  styleUrls: ['./new-producton.component.css']
  
  
})
export class NewProductonComponent implements OnInit {
  constructor(public productonService: ProductonService, private router: Router) {}

  ngOnInit(): void {}

  createProducton(producton: any) {
    this.productonService.create(producton).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/admin/Producton']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
