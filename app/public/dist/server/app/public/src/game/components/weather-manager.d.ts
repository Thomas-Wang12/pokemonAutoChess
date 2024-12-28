import Phaser from "phaser";
export default class WeatherManager {
    scene: Phaser.Scene;
    screen: Phaser.Geom.Rectangle;
    colorFilter: Phaser.GameObjects.Rectangle | undefined;
    particlesEmitters: Phaser.GameObjects.Particles.ParticleEmitter[];
    image: Phaser.GameObjects.Image | undefined;
    constructor(scene: Phaser.Scene);
    addRain(): void;
    addSnow(): void;
    addSun(): void;
    addSandstorm(): void;
    addNight(): void;
    addBloodMoon(): void;
    addWind(): void;
    addSmog(): void;
    addMist(): void;
    addStorm(): void;
    clearWeather(): void;
}
