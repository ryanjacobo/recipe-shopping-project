import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Sinigang',
      'Pork belly with tamarind soup.',
      'https://www.kawalingpinoy.com/wp-content/uploads/2013/01/sinigang-baboy-7-768x1024.jpg',
      [new Ingredient('Pork belly cubes', 1), new Ingredient('Veggies', 3)]
    ),
  ];

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
}
