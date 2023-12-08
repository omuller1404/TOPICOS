import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { TaqullaComponent } from './taqulla/taqulla.component';
import { TaqullaVentaComponent } from './taqulla-venta/taqulla-venta.component';
import { AreasComponent } from './areas/areas.component';
import { AreaCrearComponent } from './area-crear/area-crear.component';
import { AnimalesComponent } from './animales/animales.component';
import { AnimalesAltaComponent } from './animales-alta/animales-alta.component';

const routes: Routes = [
  {
		path: '', component: MainComponent,
		children: [
      {
      path:'taquilla', component:TaqullaComponent
      },
	  {
		path:'taquillaVenta', component:TaqullaVentaComponent
	  },
	  {
		path:'areas', component:AreasComponent
	  },
	  {
		path:'creararea', component:AreaCrearComponent
	  },
	  {
		path:'animales', component:AnimalesComponent
	  },
	  {
		path:'animales-alta', component:AnimalesAltaComponent
	  },
	  // {
		// path:'reporteAsistencias', component:ReporteAsistenciasComponent
	  // },
			// {
			// 	path:'consulta/:guid' , component:ValidacionDatosComponent
			// },
			{
				path: '**',
				redirectTo: 'taquilla'
			},
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
