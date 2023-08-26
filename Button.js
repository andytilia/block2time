class Button {
  constructor(title, x, y, w, h) {
    this.title = title;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isSelected = false;
  }

  toggle() {
    this.isSelected = !this.isSelected;
  }

  isClicked(x, y) {
    return x > this.x && y > this.y; // TODO: check all four sides
  }

  show() {
    if (this.isSelected) {
      strokeWeight(2);
    } else {
      strokeWeight(1);
    }
    rect(this.x, this.y, this.w, this.h);
    textAlign(CENTER, CENTER);
    text(this.title, this.x + this.w / 2, this.y + this.h / 2);
  }
}
