import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  featuredPostsArray: Array<object> | any;
  latestPostsArray: Array<object> | any;

  constructor( private postService: PostsService ) {

   
  }

  ngOnInit(): void {
    this.postService.loadFeatured().subscribe(val=> {
      this.featuredPostsArray = val;
      
    });

    this.postService.loadLatest().subscribe(val => {
        this.latestPostsArray = val;
    })
  }

}
