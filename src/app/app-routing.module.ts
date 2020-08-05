import { NgModule } from '@angular/core';
import { Routes, RouterModule,  ActivatedRoute, CanActivate  } from '@angular/router';
import { SigininComponent, SigininGuardService } from './comps/siginin/siginin.component';
import { ChetComponent } from './comps/chet/chet.component';
import { HomeComponent } from './comps/home/home.component';



const routes: Routes = [
  
  {path:'home', component:HomeComponent,
children:[
  {path:'siginin/:id', component:SigininComponent,
  canActivate: [SigininGuardService],},
]},
  {path:'chet', component:ChetComponent},
  {path:'', redirectTo:'home/siginin/0', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


