import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { exhaustMap, map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}
  // HttpClientModule should be imported in app.module.ts to be able to use HttpClient

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.httpClient
      .put(
        'https://ng-course-recipe-book-72b7b-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.httpClient
      .get<Recipe[]>(
        'https://ng-course-recipe-book-72b7b-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            // "map" is not same as "map" on map.recipes. map from rxjs/operators vs map as an array method
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
