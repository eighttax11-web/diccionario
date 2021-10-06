import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category.interface';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getCategory().subscribe(
      (resp:any) => {
        this.categories = resp;
        console.log(this.categories);
      }
    )
  }

  slideOpts = {
    slidesPerView: 1,
    freeMode: true
  }

}
