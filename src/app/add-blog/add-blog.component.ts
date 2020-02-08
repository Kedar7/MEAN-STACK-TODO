import { Component, OnInit } from '@angular/core';
import { HomePageService} from '../services/homepage.service';
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  constructor(private homepageservice : HomePageService) { }

  ngOnInit() {
  }

}
