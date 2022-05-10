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
}

export default BackPack;