import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin: 5px;
      }

    `
  ]
})
export class PorRegionComponent {

  regiones:string[] = ["EU","EFTA","CARICOM", "PA","AU","USAN", "EEU","AL","ASEAN", "CAIS","CEFTA","NAFTA","SAARC"]
  regionActiva:string = ''
  paises:Country[] = []


  constructor(private paisService:PaisService) { }

  getClaseCss(region:string):string {
    return (region!== this.regionActiva)? 'btn btn-outline-primary': 'btn btn-primary' 
  }




  buscarRegion(region:string) {
    if(region === this.regionActiva) return
    
    this.regionActiva = region
    console.log(this.regionActiva);
    this.paises = []

    this.paisService.buscarRegion(region)
      .subscribe(res => {
        console.log(res);
        this.paises = res
      })
  }

}
