import { Ingredient } from './../shared/ingredient.model';
// import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// Not needed if ShoppingListService is indicated in the app.module.ts > providers:[]. Although, specifying the providedIn on the @Injectable, is more efficient for Angular.
// @Injectable({
//   providedIn: 'root',
// })
export class ShoppingListService {
  ingredients: Ingredient[] = [];
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
