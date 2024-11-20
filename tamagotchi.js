class Tamagotchi {
    constructor() {
        this.hunger = 4;
        this.energy = 4;
        this.mood = 4;
    }

    play() {
        this.hunger += 1;
        this.mood += 1;
        this.energy -= 1;
        return this.updateStatus();
    }

    eat() {
        this.hunger -= 2;
        this.energy -= 1;
        return this.updateStatus();
    }

    sleep() {
        this.energy = Math.max(this.energy + 2, 0);
        return this.updateStatus(true);
    }

    updateStatus(isSleeping = false) {
        let status = ":-|";

        if (this.energy <= 0 || isSleeping) {
            status = "(-_-) zZZ";
        } else if (this.mood > 8) {
            status = ":-)";
        } else if (this.energy < 3) {
            status = "(-_-)";
        } else if (this.mood < 2) {
            status = "ఠ_ఠ";
        }

        document.getElementById("status").innerText = `Estado: ${status}`;
        return status;
    }
}

const tamagotchi = new Tamagotchi();
