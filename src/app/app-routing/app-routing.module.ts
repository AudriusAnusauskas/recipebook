import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "../auth/auth.component";
import { AuthGuard } from "../auth/auth.guard";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { ReadRecipeComponent } from "../recipes/read-recipe/read-recipe.component";
import { WriteRecipeComponent } from "../recipes/write-recipe/write-recipe.component";



const appRoutes:Routes=[
    {
      path:'auth', 
      component:AuthComponent
    },
    {
      path:'', 
      component:DashboardComponent, 
      canActivate:[AuthGuard]
    },
    {
        path: 'write-recipe',
        component:WriteRecipeComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'read-recipes',
        component:ReadRecipeComponent
      }
]

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
  })
  export class AppRoutingModule { }