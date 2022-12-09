import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Sinigang',
      'Pork belly with tamarind soup.',
      'https://www.kawalingpinoy.com/wp-content/uploads/2013/01/sinigang-baboy-7-768x1024.jpg',
      [new Ingredient('Pork belly cubes', 1), new Ingredient('Veggies', 3)]
    ),
  ];

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
