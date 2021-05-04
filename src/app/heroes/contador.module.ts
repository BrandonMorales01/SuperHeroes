import {ContadorComponent} from './contador/contador.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  declarations:[

  ContadorComponent
  ],
  exports:[

    ContadorComponent
  ],
  imports:[
    CommonModule
  ]
})
export class ContadorModule{

}
