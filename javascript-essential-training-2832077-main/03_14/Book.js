class Book {
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
        };
        this.genre = genre;
        this.availability = availability;
        this.dateAcquired = dateAcquired;
    }
    changeName(newName) {
        this.name = newName;
    }
    changeReleaseInfo(newYear, newLocation) {
        this.release.year = newYear;
        this.release.location = newLocation;
    }
    rentTime() {
        let now = new Date();
        let acquired = new Date(this.dateAcquired); // 
        let elapsed = now - acquired;
        let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
        return daysSinceAcquired;
    }
    
}
export default Book;