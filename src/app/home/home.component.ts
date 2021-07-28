import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public leftcoffes: Array<any> = [];
  public rightcoffes: Array<any> = [];
  public coines: Array<any> = [];
  public sum: number = 0;
  public price: number = 0;
  public isanimated: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.coines = [
      50, 100, 200, 500
    ]
    this.leftcoffes = [
      {
        name: "Black Coffe",
        price: 100
      },
      {
        name: "Americano",
        price: 250
      },
      {
        name: "Cappuccino",
        price: 200
      },
      {
        name: "Cacao",
        price: 150
      },
      {
        name: "Light",
        price: 200
      },
    ],
      this.rightcoffes = [
        {
          name: "Espresso",
          price: 200
        },
        {
          name: "Mocha",
          price: 150
        },
        {
          name: "Latte",
          price: 250
        },
        {
          name: "Milk",
          price: 100
        },
        {
          name: "Tea",
          price: 100
        }
      ]
  }

  coinfunction(event: any) {
    if (event.target.classList.contains("coin_text")) {
      this.sum = this.sum + (+event.target.textContent)
    }
    if (event.target.classList.contains("coin")) {
      this.sum = this.sum + (+event.target.children[0].textContent)
    }
  }
  coffeefunction(event: any) {
    if (event.target.classList.contains("coffe_price")) {
      this.price = (+event.target.textContent.replace("AMD", ""));
      if (this.sum >= this.price) {
        this.sum -= this.price
        this.isanimated = true
        setTimeout(() => {
          this.isanimated = false
        }, 8000);
      }
      else {
        alert("Insert coin")
        this.isanimated = false
      }
    }
    if (event.target.classList.contains("coffe_name")) {
      this.price = (+event.target.nextElementSibling.textContent.replace("AMD", ""));
      if (this.sum >= this.price) {
        this.sum -= this.price
        this.isanimated = true
        setTimeout(() => {
          this.isanimated = false
        }, 8000);
      }
      else {
        alert("Insert coin")
        this.isanimated = false
      }
    }
    if (event.target.classList.contains("coffee")) {
      this.price = (+event.target.children[1].textContent.replace("AMD", ""));
      if (this.sum >= this.price) {
        this.sum -= this.price
        this.isanimated = true
        setTimeout(() => {
          this.isanimated = false
        }, 8000);
      }
      else {
        alert("Insert coin")
        this.isanimated = false
      }
    }
  }

}
