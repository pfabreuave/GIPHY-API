import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GipbusComponent } from './gipbus/gipbus.component'
import { GipencComponent } from './gipenc/gipenc.component'
import { GipimgComponent } from './gipimg/gipimg.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: GipbusComponent},
  {path: '', component: GipencComponent},
  {path:  'resultados/:q', component:GipimgComponent}
]
@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ], 
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
