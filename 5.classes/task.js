// TASK 1 ____________________________________________________________________

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(number) {
    if (number < 0) {
      this._state = 0;
    }
    if (number > 100) {
      this._state = 100;
    } else {
      this._state = number;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.state = 100;
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.state = 100;
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.state = 100;
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.state = 100;
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.state = 100;
    this.type = "detective";
  }
}

// TASK 2_____________________________________________________________________

class Library {
  constructor(name) {
    this.name = name;
    this.books = new Array();
  }

  addBook(book) {
    if (book.state > 30) {
      if (this.books === undefined) {
        this.books = new Array();
      }
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    let findBook = null;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        findBook = this.books[i];
      }
    }
    return findBook;
  }

  giveBookByName(bookName) {
      const i = this.books.findIndex((item) => item.name == bookName)
      let bookReturn = null;
      if (i !== -1) {
          bookReturn = this.books[i];
          this.books.splice(i, 1)
      }
      return bookReturn;
  }
}

const library = new Library("Библиотека им.Пушкина");

printItem = new PrintEditionItem("Школьный журнал", 2019, 102);
library.addBook(printItem);
const firstBook = library.giveBookByName('Типовой школьный журнал');
console.log(firstBook.name)
const secondBook = library.giveBookByName('Судовой журнал');
console.log(secondBook)

// TASK 3_____________________________________________________________________

