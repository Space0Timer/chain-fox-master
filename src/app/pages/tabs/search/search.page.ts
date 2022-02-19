import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  @ViewChild('searchInput') sInput;
  model: any = {
    icon: 'search-outline',
    title: 'No Restaurants Record Found'
  };
  isLoading: boolean;
  query: any;
  allRestaurants: any[] = [];
  restaurants: any[] = [];

  ngOnInit() {
    setTimeout(() => {
      this.sInput.setFocus();
    }, 500);
  }

  async onSearchChange(event) {
    console.log(event.detail.value);
    this.query = event.detail.value.toLowerCase();
    this.restaurants = [];
    if(this.query.length > 0) {
      this.isLoading = true;
      setTimeout(async () => {
        this.restaurants = this.allRestaurants.filter((element: any) => element.short_name.includes(this.query));
        console.log(this.restaurants);
        this.isLoading = false;
      }, 3000);
    }
  }

}
