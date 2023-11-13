// descreve métodos comuns aos elementos simples e compostos da tree
interface Component {
  execute(): void
}

// não tem sub elementos
// geralmente faz todo o trabalho
interface Leaf extends Component {}

// elemento que tem sub elementos
// não sabe a classe concreta dos filhos
// delega o trabalhos para os filhos
// processa os resultados
// retorna o resultado para o cliente
interface Composite extends Component {
  children: Component[]
  add(c: Component): void
  remove(c: Component): void
  getChildren(): Component[]
}

// EXEMPLO CONCRETO
interface Graphic {
  move(x: number, y: number): void
  draw(): void
}

class Dot implements Graphic {
  x = 0
  y = 0

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  move(x: number, y: number) {
    this.x += x
    this.y += y
  }

  draw() {
    console.log("Drawing dot")
    console.log("X = ", this.x)
    console.log("Y = ", this.y)
  }
}

class Circle extends Dot {
  radius = 0

  constructor(x: number, y: number, radius: number) {
    super(x, y)
    this.radius = radius
  }

  draw(): void {
    console.log(`Drawing circle`)
    console.log("X = ", this.x)
    console.log("Y = ", this.y)
    console.log("Radius = ", this.radius)
  }
}

class CompoundGraphic implements Graphic {
  children: Graphic[] = []

  constructor() {}

  add(child: Graphic) {
    this.children.push(child)
  }

  remove(child: Graphic) {
    this.children = this.children.filter((c) => c === child)
  }

  draw() {
    for (let child of this.children) {
      child.draw()
    }
  }

  move(x: number, y: number): void {
    for (let child of this.children) {
      child.move(x, y)
    }
  }
}

class ImageEditor {
  all: CompoundGraphic | null = null

  constructor() {
    this.load()
  }

  load() {
    this.all = new CompoundGraphic()
    this.all.add(new Dot(1, 2))
    this.all.add(new Circle(5, 3, 10))
  }

  add(g: Graphic) {
    this.all?.add(g)
  }

  draw() {
    this.all?.draw()
  }
}

const ie = new ImageEditor()
ie.add(new Circle(10, 50, 3))
ie.draw()
