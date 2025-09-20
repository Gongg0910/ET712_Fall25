/* 

Gonzalo Guerra
Homework 3 - Objects and exception handling in JS

*/


// Exercise 1 
// Create a class object named Movie:      
const Movie = {
    // Properties 
    title: "Incredible",
    director: "Brad Bird",
    year : 2004, 

    // Methods
    getDetails: function(){
        return `The title and director of the move is ${this.title} and ${this.director}. It was released on ${this.year}`
    }
};





// Exercise 2 
// Create a class object named MovieCollection: 

const MovieCollection = {
    // Properties
    movies_array: ["The Incredibles", "Megamind", "Kung Fu Panda", "Rango"],

    // Methods
    // MovieCollection.addMovie("Gonzalo Guerra")           add new movie into array. 
    addMovie(movie) {
        this.movies_array.push(movie);
        console.log(`Added "${movie}" to the collection.`);
    },

    // MovieCollection.removeMovie("The Incredibles")       to remove movies from array list. 
    removeMovie(title) { 
        const remove = this.movies_array.indexOf(title);
        try {
            if(remove > -1) {
                this.movies_array.splice(remove, 1);
                console.log(`"${title}" are removed from the collection`);
            }
            else {
                throw new Error(`The name "${title}" doesn't exist in the collection.`);
            }
        }
        catch (error) {
            console.error("ERROR!", error.message, "Please try again.")
        }
    },

    // MovieCollection.showMovie()      // It show how many movies are in array. 
    showMovies() { 
        try {
            if(this.movies_array.length === 0) { 
                throw new Error("The collection of movies is empty."); 
            }
            else {   // listing
                console.log("All collectable movies:");
                for(let i = 0; i < this.movies_array.length; i++){
                    console.log(`${i + 1}. ${this.movies_array[i]}`);
                }
                console.log(`\nTotal movies in collection: ${this.movies_array.length}`);
            }
        }
        catch (error) { 
            console.error("ERROR!", error.message, "Add more movies!"); 
        }
    }
};