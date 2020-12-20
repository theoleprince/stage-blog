import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddBlogCategorieComponent } from './modules/projetBlogs/blogCategorie/add-blog-categorie/add-blog-categorie.component';


const routes: Routes = [
  {path: 'hello', component: WelcomeComponent},
  {path: 'blog/categorie', component: AddBlogCategorieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
