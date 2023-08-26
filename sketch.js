const type = {
  NORMAL: {
    name: 'normal',
    highSchoolStartTimes: [
      new Session(8, 0),
      new Session(9, 0),
      new Session(10, 0),
      new Session(12, 0),
    ],
    middleSchoolStartTimes: [
      new Session(8, 10),
      new Session(9, 0),
      new Session(10, 0),
      new Session(11, 0),
    ],
  },
  DELAY: '2-hour delay',
  ASSEMBLY: 'assembly',
};

const rotation = {
  A: 'ABCEFG',
  B: 'BCDFGH',
};

const days = [
  { date: '8/30/23', rotation: 'A', type: type.NORMAL },
  { date: '8/31/23', rotation: 'D', type: type.NORMAL },
  { date: '9/1/23', rotation: 'C', type: type.NORMAL },
];

let TOGGLE_WIDTH = 30;
let TOGGLE_HEIGHT = 20;
let TOGGLE_START_X = 50;
let TOGGLE_START_Y = 50;
let TOGGLE_GAP = 10;

let buttons = [];

function setup() {
  createCanvas(400, 400);
  createButtons();
}

function draw() {
  background(220);
  text(type.NORMAL.highSchoolStartTimes[0].toString(), 20, 20);
  showButtons();
}

function showButtons() {
  buttons.forEach((b) => b.show());
}

function createButtons() {
  const letters = 'ABCDEFGH'.split('');
  letters.forEach((letter) => {
    let x = TOGGLE_START_X + 10; // TODO: replace 10 with a math expression
    buttons.push(
      new Button(
        letter,
        x,
        TOGGLE_START_Y,
        TOGGLE_WIDTH,
        TOGGLE_HEIGHT
      )
    );
  });
}

function mousePressed() {
  buttons.forEach((b) => {
    if (b.isClicked(mouseX, mouseY)) {
      b.toggle();
    }
  });
}
