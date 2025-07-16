//thi is just an example, so all these are in one app.js file.
//for real projects, need a proper structure. need to keep the app.js (root) file clean.
const express = require("express");
const app = express();

//use Middleware
app.use(express.json());
let books = [
  { id: 1, title: "book1" },
  { id: 2, title: "book2" },
];

//routes
//intro route
app.get("/", (req, res) => {
  res.json({ message: "welcome to the bookstore api" });
});

//get all books
app.get("/get", (req, res) => {
  res.json(books);
});

//get a single book
app.get("/get/:id", (req, res) => {
  const specificBook = books.find(
    (book) => book.id === parseInt(req.params.id)
  );
  if (specificBook) {
    res.status(200).json(specificBook);
  } else {
    res
      .status(404)
      .json({ message: "book not found. please check your book id" });
  }
});

//add a new book
app.post("/add", (req, res) => {
  const newBook = {
    //id: books.length + 1,
    id: Math.floor(Math.random() * 1000),
    title: `book ${Math.floor(Math.random() * 1000)}`,
  };
  books.push(newBook);
  res.status(200).json({
    data: newBook,
    message: "new book added successfully",
  });
});

//update a book
app.put("/update/:id", (req, res) => {
  const specificBook = books.find(
    (book) => book.id === parseInt(req.params.id)
  );
  //  console.log(specificBook);
  if (specificBook) {
    specificBook.title = req.body.title || specificBook.title;
    res.status(200).json({
      message: `the book with ID ${req.params.id} updated successfully`,
      data: specificBook,
    });
  } else {
    res.status(404).json({
      message: "book not found",
    });
  }
});

//delete a book
app.delete("/delete/:id", (req, res) => {
  const specificBookIndex = books.findIndex(
    (book) => book.id === parseInt(req.params.id)
  );
  if (specificBookIndex != -1) {
    //when findIndex() find nothing, it return -1
    const deletedBook = books.splice(specificBookIndex, 1); //from this index delete 1 item (~the item at that index)
    //splice(a,n) means: start at index a, delete n items
    res.status(200).json({
      message: "deleted",
      data: deletedBook,
    });
  } else {
    res.status(404).json({
      message: "book not found",
    });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
