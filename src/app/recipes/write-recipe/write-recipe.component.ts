import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecipesServiceService } from 'src/app/services/recipes-service.service';

@Component({
  selector: 'app-write-recipe',
  templateUrl: './write-recipe.component.html',
  styleUrls: ['./write-recipe.component.css']
})
export class WriteRecipeComponent implements OnInit {

  constructor(private recipesService:RecipesServiceService) { }

  ngOnInit(): void {
  }

  onPostRecipe(form:NgForm){
    this.recipesService.postRecipe(form.value.name, form.value.text).subscribe((response)=>{
      console.log(response);
      form.reset();
      
    })
  }


}
