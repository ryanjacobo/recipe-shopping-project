import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// @Injectable is a metadata that allows a service (ShoppingListService) to be injected to the current service.
@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Sinigang',
      'Pork belly with tamarind soup.',
      'https://www.kawalingpinoy.com/wp-content/uploads/2013/01/sinigang-baboy-7-768x1024.jpg',
      [new Ingredient('Pork belly cubes', 1), new Ingredient('Veggies', 3)]
    ),
    new Recipe(
      'Beef Caldereta',
      'Beef shoulder stew.',
      'https://www.kawalingpinoy.com/wp-content/uploads/2019/04/spicy-beef-caldereta-2.jpg',
      [
        new Ingredient('Beef shoulder cubes', 1),
        new Ingredient('Tomato paste', 1),
        new Ingredient('Carrots', 1),
      ]
    ),
  ];

  recipesChanged = new Subject<Recipe[]>();

  constructor(private shoppinglistService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppinglistService.addIngredients(ingredients);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipesChanged.next(this.recipes.slice());
  }
}
