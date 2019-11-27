import axios from "axios";

export default {
  // Gets all books
  LoadData: function() {
    return axios.get("/api/datos");
  },
  // Gets the book with the given id
  porDelito: function(id) {
    return axios.get("/api/datos/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // Saves a book to the database
  saveOrden: function(bookData) {
    return axios.post("/api/orden", bookData);
  }
};
