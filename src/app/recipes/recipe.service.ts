import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';


export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is A test recipe', 'https://frommybowl.com/wp-content/uploads/2018/04/Easy_Falafel_Recipe_Vegan_GlutenFree_FromMyBowl-11.jpg'),
        new Recipe('B Test Recipe', 'This is B test recipe', 'https://frommybowl.com/wp-content/uploads/2018/04/Easy_Falafel_Recipe_Vegan_GlutenFree_FromMyBowl-11.jpg')
    ];

    getRecipes() {
            return this.recipes.slice();
    }
}