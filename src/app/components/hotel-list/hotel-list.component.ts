import { HotelListService } from './hotel-list.service';
import { Component, OnInit } from '@angular/core';
import { IHotel } from './hotel';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  title = 'Liste des hotels';

  constructor(private hotelListService: HotelListService) {

  }

  ngOnInit(): void {
    this.hotels = this.hotelListService.getHotels();
    this.filteredHotels = this.hotels;
    this.hotelFilter = '';
  }

  public hotels: IHotel[] = [];

  public showBadge!: boolean;

  private _hotelFilter = 'mot';

  public filteredHotels: IHotel[] = [];

  public receivedRating!: string;

  public toggleIsNewBadge(): void {
    this.showBadge = !this.showBadge;
  };

  public get hotelFilter(): string {
    return this._hotelFilter;
  }

  public set hotelFilter(filter: string) {
    this._hotelFilter = filter;
    this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels;
  }

  public receiveRatingClicked(message: string): void {
    this.receivedRating = message;
  }

  private filterHotels(criteria: string): IHotel[] {
    criteria = criteria.toLowerCase();
    const res = this.hotels.filter(
      (hotel: IHotel) => hotel.hotelName.toLowerCase().indexOf(criteria) !== -1
    );
    return res;
  }
}
