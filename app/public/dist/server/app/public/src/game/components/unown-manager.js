"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNOWNS_PER_ABILITY = void 0;
const phaser_1 = require("phaser");
const types_1 = require("../../../../types");
const Ability_1 = require("../../../../types/enum/Ability");
const Pokemon_1 = require("../../../../types/enum/Pokemon");
const random_1 = require("../../../../utils/random");
const game_1 = require("../../pages/game");
const pokemon_1 = require("./pokemon");
const SHARDS_PER_ENCOUNTER = 50;
class UnownManager {
    constructor(scene) {
        this.scene = scene;
    }
    addWanderingUnown() {
        (0, pokemon_1.addWanderingPokemon)(this.scene, (0, random_1.pickRandomIn)(Pokemon_1.Unowns), (unown, pointer, tween) => {
            (0, game_1.getGameContainer)().room.send(types_1.Transfer.UNOWN_WANDERING, unown.index);
            this.displayShardGain([pointer.x, pointer.y], unown.index);
            unown.destroy();
            tween.destroy();
        });
    }
    displayShardGain(coordinates, index) {
        const textStyle = {
            fontSize: "25px",
            fontFamily: "Verdana",
            color: "#fff",
            align: "center",
            strokeThickness: 2,
            stroke: "#000"
        };
        const image = this.scene.add.existing(new phaser_1.GameObjects.Image(this.scene, 0, 0, `portrait-${index}`)
            .setScale(0.5, 0.5)
            .setOrigin(0, 0));
        const text = this.scene.add.existing(new phaser_1.GameObjects.Text(this.scene, 25, 0, SHARDS_PER_ENCOUNTER.toString(), textStyle));
        image.setDepth(9);
        text.setDepth(10);
        const container = this.scene.add.existing(new phaser_1.GameObjects.Container(this.scene, coordinates[0], coordinates[1] - 50, [text, image]));
        this.scene.add.tween({
            targets: [container],
            ease: "linear",
            duration: 1500,
            delay: 0,
            alpha: {
                getStart: () => 1,
                getEnd: () => 0
            },
            y: {
                getStart: () => coordinates[1] - 50,
                getEnd: () => coordinates[1] - 110
            },
            onComplete: () => {
                container.destroy();
            }
        });
    }
}
exports.default = UnownManager;
exports.UNOWNS_PER_ABILITY = new Map([
    [
        Ability_1.Ability.HIDDEN_POWER_A,
        [Pokemon_1.Pkm.UNOWN_A, Pokemon_1.Pkm.UNOWN_B, Pokemon_1.Pkm.UNOWN_R, Pokemon_1.Pkm.UNOWN_A]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_B,
        [Pokemon_1.Pkm.UNOWN_B, Pokemon_1.Pkm.UNOWN_U, Pokemon_1.Pkm.UNOWN_R, Pokemon_1.Pkm.UNOWN_N]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_C,
        [Pokemon_1.Pkm.UNOWN_C, Pokemon_1.Pkm.UNOWN_O, Pokemon_1.Pkm.UNOWN_I, Pokemon_1.Pkm.UNOWN_N]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_D,
        [Pokemon_1.Pkm.UNOWN_D, Pokemon_1.Pkm.UNOWN_I, Pokemon_1.Pkm.UNOWN_T, Pokemon_1.Pkm.UNOWN_O]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_E,
        [Pokemon_1.Pkm.UNOWN_E, Pokemon_1.Pkm.UNOWN_G, Pokemon_1.Pkm.UNOWN_G, Pokemon_1.Pkm.UNOWN_S]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_F,
        [Pokemon_1.Pkm.UNOWN_F, Pokemon_1.Pkm.UNOWN_I, Pokemon_1.Pkm.UNOWN_S, Pokemon_1.Pkm.UNOWN_H]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_G,
        [Pokemon_1.Pkm.UNOWN_G, Pokemon_1.Pkm.UNOWN_O, Pokemon_1.Pkm.UNOWN_L, Pokemon_1.Pkm.UNOWN_D]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_H,
        [Pokemon_1.Pkm.UNOWN_H, Pokemon_1.Pkm.UNOWN_E, Pokemon_1.Pkm.UNOWN_A, Pokemon_1.Pkm.UNOWN_L]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_I,
        [Pokemon_1.Pkm.UNOWN_I, Pokemon_1.Pkm.UNOWN_T, Pokemon_1.Pkm.UNOWN_E, Pokemon_1.Pkm.UNOWN_M]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_J,
        [Pokemon_1.Pkm.UNOWN_J, Pokemon_1.Pkm.UNOWN_A, Pokemon_1.Pkm.UNOWN_W, Pokemon_1.Pkm.UNOWN_S]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_K,
        [Pokemon_1.Pkm.UNOWN_K, Pokemon_1.Pkm.UNOWN_I, Pokemon_1.Pkm.UNOWN_C, Pokemon_1.Pkm.UNOWN_K]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_L,
        [Pokemon_1.Pkm.UNOWN_L, Pokemon_1.Pkm.UNOWN_O, Pokemon_1.Pkm.UNOWN_C, Pokemon_1.Pkm.UNOWN_K]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_M,
        [Pokemon_1.Pkm.UNOWN_M, Pokemon_1.Pkm.UNOWN_A, Pokemon_1.Pkm.UNOWN_N, Pokemon_1.Pkm.UNOWN_A]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_N,
        [Pokemon_1.Pkm.UNOWN_N, Pokemon_1.Pkm.UNOWN_U, Pokemon_1.Pkm.UNOWN_K, Pokemon_1.Pkm.UNOWN_E]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_O,
        [Pokemon_1.Pkm.UNOWN_O, Pokemon_1.Pkm.UNOWN_N, Pokemon_1.Pkm.UNOWN_I, Pokemon_1.Pkm.UNOWN_X]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_P,
        [Pokemon_1.Pkm.UNOWN_P, Pokemon_1.Pkm.UNOWN_E, Pokemon_1.Pkm.UNOWN_S, Pokemon_1.Pkm.UNOWN_T]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_Q,
        [Pokemon_1.Pkm.UNOWN_Q, Pokemon_1.Pkm.UNOWN_U, Pokemon_1.Pkm.UNOWN_I, Pokemon_1.Pkm.UNOWN_T]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_R,
        [Pokemon_1.Pkm.UNOWN_R, Pokemon_1.Pkm.UNOWN_O, Pokemon_1.Pkm.UNOWN_L, Pokemon_1.Pkm.UNOWN_L]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_S,
        [Pokemon_1.Pkm.UNOWN_S, Pokemon_1.Pkm.UNOWN_T, Pokemon_1.Pkm.UNOWN_O, Pokemon_1.Pkm.UNOWN_P]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_T,
        [Pokemon_1.Pkm.UNOWN_T, Pokemon_1.Pkm.UNOWN_R, Pokemon_1.Pkm.UNOWN_E, Pokemon_1.Pkm.UNOWN_E]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_U,
        [Pokemon_1.Pkm.UNOWN_U, Pokemon_1.Pkm.UNOWN_X, Pokemon_1.Pkm.UNOWN_I, Pokemon_1.Pkm.UNOWN_E]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_V,
        [Pokemon_1.Pkm.UNOWN_V, Pokemon_1.Pkm.UNOWN_O, Pokemon_1.Pkm.UNOWN_L, Pokemon_1.Pkm.UNOWN_T]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_W,
        [Pokemon_1.Pkm.UNOWN_W, Pokemon_1.Pkm.UNOWN_I, Pokemon_1.Pkm.UNOWN_S, Pokemon_1.Pkm.UNOWN_H]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_X,
        [Pokemon_1.Pkm.UNOWN_X, Pokemon_1.Pkm.UNOWN_R, Pokemon_1.Pkm.UNOWN_A, Pokemon_1.Pkm.UNOWN_Y]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_Y,
        [Pokemon_1.Pkm.UNOWN_Y, Pokemon_1.Pkm.UNOWN_O, Pokemon_1.Pkm.UNOWN_G, Pokemon_1.Pkm.UNOWN_A]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_Z,
        [Pokemon_1.Pkm.UNOWN_Z, Pokemon_1.Pkm.UNOWN_Z, Pokemon_1.Pkm.UNOWN_Z, Pokemon_1.Pkm.UNOWN_Z]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_EM,
        [
            Pokemon_1.Pkm.UNOWN_EXCLAMATION,
            Pokemon_1.Pkm.UNOWN_EXCLAMATION,
            Pokemon_1.Pkm.UNOWN_EXCLAMATION,
            Pokemon_1.Pkm.UNOWN_EXCLAMATION
        ]
    ],
    [
        Ability_1.Ability.HIDDEN_POWER_QM,
        [
            Pokemon_1.Pkm.UNOWN_QUESTION,
            Pokemon_1.Pkm.UNOWN_QUESTION,
            Pokemon_1.Pkm.UNOWN_QUESTION,
            Pokemon_1.Pkm.UNOWN_QUESTION
        ]
    ]
]);
//# sourceMappingURL=unown-manager.js.map