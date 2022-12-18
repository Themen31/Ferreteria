import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/home/productos/shared/mascota.model';
import { ProductoService } from 'src/app/home/productos/shared/mascota.service';
import { Producton } from '../shared/historiaclinica.model';
import { ProductonService } from '../shared/historiaclinica.service';
import { FormBuilder,Validators , FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-edit-producton',
  templateUrl: './edit-producton.component.html',
  styleUrls: ['./edit-producton.component.css']
})
export class EditProductonComponent implements OnInit {
  idHistoriaClinica : number;
  idMascota : number;
  public producton:Producton;
  public producto: Producto;

  @Input() produ: Producton = new Producton();

  constructor(public productonService: ProductonService, private router: Router,
   private activeRoute: ActivatedRoute, public mascotaService: ProductoService,   private formBuilder: FormBuilder,) {
    this.activeRoute.paramMap.subscribe(paramMap =>{
      this.idHistoriaClinica = Number(paramMap.get('id'));
      this.productonService.get(this.idHistoriaClinica).subscribe((data:any)=>{
        this.producton=data;
        console.log(this.producton);
      });
      this.activeRoute.paramMap.subscribe((paramMap) => {
        this.idMascota = Number(paramMap.get('id'));
        this.mascotaService.get(this.idMascota).subscribe((data: any) => {
          this.mascota=this.producton.idMascota;
          console.log(this.mascota);
        });
      });
   })
  }

  ngOnInit(): void {}

  update(producton: any) {
    this.productonService.update(producton).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/admin/Producto']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  form=new FormGroup({
    numeroFicha: new FormControl('',[Validators.required ]),
    observacion: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(700)]),
    diagnostico: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(700)]),
    tratamiento: new FormControl('',[Validators.required, Validators.minLength(5),Validators.maxLength(700)]),
  });



  save(form: Producton) {
    form.idHistoriaClinica = this.idHistoriaClinica;
    form.idMascota = this.mascota;
    this.productonService.update(form).subscribe(()=>{
      this.router.navigate(['/admin/Producto']);
    }, (error: any) => {
      
    })
  }
}