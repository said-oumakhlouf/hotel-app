import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  title = 'Liste des hotels';
  
  constructor() { }

  ngOnInit(): void {
  }

  public hotels: any[] = [
    {
          "hotelId": 1,
          "hotelName": "Buea sweet life",
          "description": "Belle vue au bord de la mer",
          "price": 230.5,
          "imageUrl": "assets/img/hotel-mer.jpg",
          "rating": 3.5
    },
    {
          "hotelId": 2,
          "hotelName": "Marrakech",
          "description": "Profitez de la vue sur les montagnes",
          "price": 145.5,
          "imageUrl": "assets/img/marrakech.jpg",
          "rating": 5
    },
    {
          "hotelId": 3,
          "hotelName": "Abudja new look palace",
          "description": "Séjour complet avec service de voitures",
          "price": 120.12,
          "imageUrl": "assets/img/abudja.jpg",
          "rating": 2.5
    },
    {
          "hotelId": 4,
          "hotelName": "Mexico",
          "description": "Magnifique cadre pour votre séjour",
          "price": 135.12,
          "imageUrl": "assets/img/mexique.jpg",
          "rating": 5
    }
  ];

  public showBadge!: boolean;

  public hotelFilter = 'mot';

  public toggleIsNewBadge(): void {
    this.showBadge = !this.showBadge;
  };

}
