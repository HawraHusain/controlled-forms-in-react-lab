import { useState } from 'react';

const App = () => {
    let initialState ={
        title:'',
        author: '',
    }
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    const [newBook, setnewBooks] = useState({initialState})

    const handleInputChange = (event) => {
        const newBookData ={ ...newBook, [event.target.name]: event.target.value }
        setnewBooks(newBookData)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, { title: newBook.title, author: newBook.author }]);
        setnewBooks({ title: '', author: '' }); //Clear 
    }
    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title">Title: </label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            value={newBook.title}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="author">Author: </label>
                        <input
                            id="author"
                            name="author"
                            type="text"
                            value={newBook.author}
                            onChange={handleInputChange}
                        />
                        
                        <button type='submit'>Submit</button>
                      
                    </form>
                </div>
                <div className="bookCardsDiv">
                    <ul >
                        {books.map((book, index) => (
                            <li className='bookCard' key={index}>
                                <h3>{book.title}</h3>
                                <p>{book.author}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default App;

