import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapViewComponent} from './map-view/map-view.component';
import {GraphComponent} from './graph/graph.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: GraphComponent
},
  {
  path: 'map',
  component: MapViewComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
