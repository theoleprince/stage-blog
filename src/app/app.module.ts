import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './modules/general/side-bar/side-bar.component';
import { NavBarComponent } from './modules/general/nav-bar/nav-bar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddBlogCategorieComponent } from './modules/projetBlogs/blogCategorie/add-blog-categorie/add-blog-categorie.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    WelcomeComponent,
    AddBlogCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
