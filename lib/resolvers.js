'use strict'
const connectdb = require('./db')

module.exports = {
  Query: {
    getBooks: async() => {
      let db,books = []
      try {
        db = await connectdb()
        books = await db.collection('books').find().toArray()
      } catch (error) {
        console.error(error)
      }
      return books
    },
    getBook: (root, args) => {
      const book = books.filter(book => book._id === args.id)
      return book.pop()
    }
  }
}
 