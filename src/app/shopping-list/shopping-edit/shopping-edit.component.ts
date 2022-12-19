import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
// Requires FormsModule to be imported in AppModule to render the component
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('f', {static: false}) slForm!: NgForm;
  editShoppingList = false;
  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    this.slService.addIngredient(newIngredient);
    console.log(newIngredient);
    // if(this.editShoppingList){}
  }
}
