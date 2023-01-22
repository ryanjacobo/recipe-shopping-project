import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([{ path: '', component: ShoppingListComponent }]),
  ],
})
export class SlRoutingModule {}
