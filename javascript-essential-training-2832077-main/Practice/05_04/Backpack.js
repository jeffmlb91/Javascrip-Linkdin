class BackPack {

    constructor(
        name,
        volume,
        color,
        pocketNumber,
        strapLeftLength,
        strapRightLength,
        zipperOpened,
        datePurchased
    ) {
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNumber = pocketNumber,
        this.strapLength = {
            left:  strapLeftLength,
            right:  strapRightLength
        }
        this.zipperOpened = zipperOpened;
        this.datePurchased = datePurchased;
    }
    changeBagName(newName) {
        this.name = newName;
    }
    changeBagCapacity(newVolume) {
        this.volume = newVolume;
    }
    zipperStatus() {
        this.zipperOpened = false;
    }
    datePurchased() {
        let now = new Date();
        let brandNew = new Date(this.datePurchased);
        let howOld = now - brandNew;
        let howLongItsBeen = M
        ath.floor(howOld / (1000 * 3600 * 24));
        return howLongItsBeen;
    }
    
}

export default BackPack;