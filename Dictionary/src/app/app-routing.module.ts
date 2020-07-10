import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {DictionaryPageComponent} from "./dictionary-page/dictionary-page.component";
import {DictionaryDetailComponent} from "./dictionary-detail/dictionary-detail.component";
import {ShitComponent} from "./shit/shit.component";

const routes: Routes = [
  {
    path: 'DicDetail',
    component: DictionaryPageComponent,
    children: [
      {path: 'shit', component: ShitComponent},
      // duong dan chua id luon dung o cuoi cung
      {path: ':id', component: DictionaryDetailComponent},
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
