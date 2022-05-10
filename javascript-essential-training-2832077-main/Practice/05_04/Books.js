class Books {
    constructor(
        name,
        author,
        published,
        country,
        genre,
        availability,
        dateAcquired
    ) {
        this.name = name;
        this.author = author;
        this.release = {
            year: published,
            location: country
        }
        this.country = published.country;
        this.genre = genre;
        this.availability = availability;
        this.dateAcquired = dateAcquired;
    }

    changeName(newName) {
        this.name = newName;
    }
    changeAuthor(newAuthor) {
        this.author = newAuthor;
    }
    changePublishedInfo(newYear, newLocation) {
        this.year = newYear;
        this.location = newLocation
    }
    rentTime() {
        let now = new Date();
        let obtained = new Date(this.dateAcquired);
        let elapsed = now - obtained;
        let daysSinceObtained =  Math.floor(elapsed / (1000 * 3600 * 24));
        return daysSinceObtained;
    }
}
export default Books;