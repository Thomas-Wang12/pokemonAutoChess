"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnKillEffect = exports.OnItemRemovedEffect = exports.OnItemGainedEffect = exports.Effect = void 0;
class Effect {
    constructor(effect) {
        this.apply = effect;
    }
}
exports.Effect = Effect;
class OnItemGainedEffect extends Effect {
}
exports.OnItemGainedEffect = OnItemGainedEffect;
class OnItemRemovedEffect extends Effect {
}
exports.OnItemRemovedEffect = OnItemRemovedEffect;
class OnKillEffect extends Effect {
    constructor(effect) {
        super(effect);
        this.apply = effect;
    }
}
exports.OnKillEffect = OnKillEffect;
//# sourceMappingURL=effect.js.map