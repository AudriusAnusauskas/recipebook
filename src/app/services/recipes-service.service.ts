import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { MyRecipes } from '../models/myrecipes.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesServiceService {
  constructor(private authService:AuthService, private http:HttpClient) { }

  getRecipe(){
    return this.http.get<{[key:string]:MyRecipes}>("https://recipebook-b0e99-default-rtdb.europe-west1.firebasedatabase.app/recipes.json")
    .pipe(map((responseData)=>{
      const recipes:MyRecipes[]=[];
      for(const key in responseData){
        recipes.push({...responseData[key], id:key});
      }
      return recipes
    }));
  }

  postRecipe(name:string, text:string){
    const recipe=new MyRecipes(this.authService.user.email, this.authService.user.id, text, name);

    return this.http.post<{name:string}>("https://recipebook-b0e99-default-rtdb.europe-west1.firebasedatabase.app/recipes.json", recipe, 
    {
      params:new HttpParams().set('auth', this.authService.user.token)
    });

  }

}
