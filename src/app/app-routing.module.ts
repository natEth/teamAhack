import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { MainFormComponent } from './main-form/main-form.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'person', component: MainFormComponent},
  {path: 'demo', component: MainFormComponent},
  {path: 'cropper', component: ImageCropperComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
