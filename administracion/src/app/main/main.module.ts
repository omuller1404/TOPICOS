import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { TaqullaComponent } from './taqulla/taqulla.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { TaqullaVentaComponent } from './taqulla-venta/taqulla-venta.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AreasComponent } from './areas/areas.component';
import { AreaCrearComponent } from './area-crear/area-crear.component';
import { AnimalesComponent } from './animales/animales.component';
import { AnimalesAltaComponent } from './animales-alta/animales-alta.component';


@NgModule({
  declarations: [
    TaqullaComponent,
    TaqullaVentaComponent,
    AreasComponent,
    AreaCrearComponent,
    AnimalesComponent,
    AnimalesAltaComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    NgxPaginationModule,
    NgbAlertModule,
    NgbDatepickerModule
  ]
})
export class MainModule { }
