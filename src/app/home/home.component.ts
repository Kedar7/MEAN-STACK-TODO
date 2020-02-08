import { Component, OnInit } from '@angular/core';
import  {HomePageService} from '../services/homepage.service';
import { NgForm } from "@angular/forms"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todo={
    id:'',
    name:''
  }
  blogs:any;
  insertMsg : boolean;
  updateMsg : boolean;
  
  constructor(private  homepageservice : HomePageService) { }

  ngOnInit() {
      this.fetchData();
  }
  fetchData(){
    this.homepageservice.getData().subscribe((data)=>{
      this.blogs = data;
    })
  }
  resetForm(form?: NgForm){
    this.todo.id = "";
    this.todo.name = "";
  }
 
  deleteTodo(id){
    this.homepageservice.deleteData(id).subscribe((data)=>{
      this.fetchData();
    })
  }
  updateTodo(blog){
    this.todo['name'] = blog.todo;
    this.todo['id'] = blog._id
  }
  onSubmit(form: NgForm){
    if(form.value._id =="" ){
    let params ={
     todo : form.value.name
    }
    this.homepageservice.addData(params).subscribe((data)=>{
      this.fetchData();
      this.todo.id = "";
      this.todo.name = "";
      this.insertMsg = true;
      this.updateMsg  = false;
		});
  }else{
    let params = {
      id : form.value._id,
      todo : form.value.name
    }
    this.homepageservice.updateData(params).subscribe((data)=>{
      this.fetchData();
      this.todo.id = "";
      this.todo.name = "";
      this.updateMsg = true;
      this.insertMsg =   false;
    })
  }
     

}

}
