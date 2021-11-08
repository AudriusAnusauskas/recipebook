import { Component, OnInit } from '@angular/core';
import { MyRecipes } from 'src/app/models/myrecipes.model';
import { RecipesServiceService } from 'src/app/services/recipes-service.service';

@Component({
  selector: 'app-read-recipe',
  templateUrl: './read-recipe.component.html',
  styleUrls: ['./read-recipe.component.css']
})
export class ReadRecipeComponent implements OnInit {
  public recipes:MyRecipes[];
  
  constructor(private recipesService:RecipesServiceService) { }

  ngOnInit(): void {
    this.recipesService.getRecipe().subscribe((recipes)=>{
      this.recipes=recipes;

    })
  }
}
