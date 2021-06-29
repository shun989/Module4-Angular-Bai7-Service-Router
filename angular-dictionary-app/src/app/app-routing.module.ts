import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DictionaryPageComponent} from "./dictionary/dictionary-page/dictionary-page.component";

const routes: Routes = [
  {
    path: 'dictionary/page',
    component: DictionaryPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
