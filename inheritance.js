class Vehicles {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  move() {
    console.log("Please come here.");
  }
}

class Bus extends Vehicles {
  constructor(name, price, seat, ticketPrice) {
    super(name, price);
    this.seat = seat;
    this.ticketPrice = ticketPrice;
  }
}
