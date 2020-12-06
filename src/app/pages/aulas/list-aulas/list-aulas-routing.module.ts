import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ListAulasPage} from './list-aulas.page';

const routes: Routes = [
  {
    path: '',
    component: ListAulasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAulasPageRoutingModule {}
