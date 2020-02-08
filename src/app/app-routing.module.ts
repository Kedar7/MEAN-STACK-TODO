import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddBlogComponent } from './add-blog/add-blog.component';

const routes: Routes = [
	{
		path:"",
		component: HomeComponent
	}, {
		path:"technology",
		component: AddBlogComponent
	},
	{
		path:"home",
		component: HomeComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
