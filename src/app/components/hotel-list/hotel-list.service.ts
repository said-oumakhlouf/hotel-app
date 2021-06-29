import { Injectable } from "@angular/core";
import { IHotel } from "./hotel";

@Injectable({
  providedIn: 'root'
})
export class HotelListService {

  public getHotels(): IHotel[] {
    return ([
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
            "rating": 4
      }
    ]);
  }
}