"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiniGame = void 0;
const matter_js_1 = require("matter-js");
const floating_item_1 = require("../../models/colyseus-models/floating-item");
const pokemon_avatar_1 = require("../../models/colyseus-models/pokemon-avatar");
const portal_1 = require("../../models/colyseus-models/portal");
const orientation_1 = require("../../utils/orientation");
const types_1 = require("../../types");
const Config_1 = require("../../types/Config");
const Dungeon_1 = require("../../types/enum/Dungeon");
const Game_1 = require("../../types/enum/Game");
const Item_1 = require("../../types/enum/Item");
const SpecialGameRule_1 = require("../../types/enum/SpecialGameRule");
const Synergy_1 = require("../../types/enum/Synergy");
const number_1 = require("../../utils/number");
const random_1 = require("../../utils/random");
const schemas_1 = require("../../utils/schemas");
const PLAYER_VELOCITY = 2;
const ITEM_ROTATION_SPEED = 0.0004;
const PORTAL_ROTATION_SPEED = 0.0003;
const SYMBOL_ROTATION_SPEED = 0.0006;
const CAROUSEL_RADIUS = 150;
const NB_SYMBOLS_PER_PLAYER = 4;
class MiniGame {
    constructor(room) {
        this.symbolsByPortal = new Map();
        this.centerX = 325;
        this.centerY = 250;
        this.engine = matter_js_1.Engine.create({ gravity: { x: 0, y: 0 } });
        this.bodies = new Map();
        this.alivePlayers = [];
        matter_js_1.Composite.add(this.engine.world, matter_js_1.Bodies.rectangle(0, -70, 2000, 40, { isStatic: true, restitution: 1 }));
        matter_js_1.Composite.add(this.engine.world, matter_js_1.Bodies.rectangle(-70, 0, 40, 2000, { isStatic: true, restitution: 1 }));
        matter_js_1.Composite.add(this.engine.world, matter_js_1.Bodies.rectangle(740, 0, 40, 2000, { isStatic: true, restitution: 1 }));
        matter_js_1.Composite.add(this.engine.world, matter_js_1.Bodies.rectangle(0, 610, 2000, 40, { isStatic: true, restitution: 1 }));
        matter_js_1.Events.on(this.engine, "beforeUpdate", () => {
            var _a, _b;
            (_a = this.items) === null || _a === void 0 ? void 0 : _a.forEach((item) => {
                if (item.avatarId === "") {
                    const itemBody = this.bodies.get(item.id);
                    if (itemBody) {
                        const t = this.engine.timing.timestamp * ITEM_ROTATION_SPEED;
                        const x = this.centerX +
                            Math.cos(t + (Math.PI * 2 * item.index) / this.items.size) *
                                CAROUSEL_RADIUS;
                        const y = this.centerY +
                            Math.sin(t + (Math.PI * 2 * item.index) / this.items.size) *
                                CAROUSEL_RADIUS;
                        matter_js_1.Body.setPosition(itemBody, { x, y });
                    }
                }
            });
            (_b = this.portals) === null || _b === void 0 ? void 0 : _b.forEach((portal) => {
                if (portal.avatarId === "") {
                    const portalBody = this.bodies.get(portal.id);
                    if (portalBody) {
                        const t = this.engine.timing.timestamp * PORTAL_ROTATION_SPEED;
                        const x = this.centerX +
                            Math.cos(t + (Math.PI * 2 * portal.index) / this.portals.size) *
                                CAROUSEL_RADIUS;
                        const y = this.centerY +
                            Math.sin(t + (Math.PI * 2 * portal.index) / this.portals.size) *
                                CAROUSEL_RADIUS;
                        matter_js_1.Body.setPosition(portalBody, { x, y });
                    }
                }
            });
        });
        matter_js_1.Events.on(this.engine, "collisionStart", (event) => {
            event.pairs.forEach(({ bodyA, bodyB }) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
                if ((((_a = this.items) === null || _a === void 0 ? void 0 : _a.has(bodyA.label)) && ((_b = this.avatars) === null || _b === void 0 ? void 0 : _b.has(bodyB.label))) ||
                    (((_c = this.avatars) === null || _c === void 0 ? void 0 : _c.has(bodyA.label)) && ((_d = this.items) === null || _d === void 0 ? void 0 : _d.has(bodyB.label)))) {
                    const avatarBody = ((_e = this.avatars) === null || _e === void 0 ? void 0 : _e.has(bodyA.label)) ? bodyA : bodyB;
                    const itemBody = ((_f = this.items) === null || _f === void 0 ? void 0 : _f.has(bodyA.label)) ? bodyA : bodyB;
                    const avatar = this.avatars.get(avatarBody.label);
                    const item = this.items.get(itemBody.label);
                    if ((avatar === null || avatar === void 0 ? void 0 : avatar.itemId) === "" && (item === null || item === void 0 ? void 0 : item.avatarId) === "") {
                        if (room.state.specialGameRule === SpecialGameRule_1.SpecialGameRule.KECLEONS_SHOP) {
                            const player = room.state.players.get(avatar.id);
                            const client = room.clients.find((cli) => cli.auth.uid === avatar.id);
                            if (((_g = player === null || player === void 0 ? void 0 : player.money) !== null && _g !== void 0 ? _g : 0) < Config_1.KECLEON_SHOP_COST) {
                                client === null || client === void 0 ? void 0 : client.send(types_1.Transfer.NPC_DIALOG, {
                                    npc: "kecleon",
                                    dialog: "tell_price"
                                });
                                return;
                            }
                            else {
                                client === null || client === void 0 ? void 0 : client.send(types_1.Transfer.NPC_DIALOG, {
                                    npc: "kecleon",
                                    dialog: "thank_you"
                                });
                                if (player) {
                                    player.money -= Config_1.KECLEON_SHOP_COST;
                                }
                            }
                        }
                        const constraint = matter_js_1.Constraint.create({
                            bodyA: avatarBody,
                            bodyB: itemBody
                        });
                        matter_js_1.Composite.add(this.engine.world, constraint);
                        avatar.itemId = item.id;
                        item.avatarId = avatar.id;
                        itemBody.collisionFilter.mask = 0;
                        avatarBody.collisionFilter.mask = 0;
                        const player = this.alivePlayers.find((p) => p.id === avatar.id);
                        if (player && player.isBot) {
                            const i = this.alivePlayers.indexOf(player);
                            avatar.targetX =
                                this.centerX +
                                    Math.cos((2 * Math.PI * i) / this.alivePlayers.length) * 300;
                            avatar.targetY =
                                this.centerY +
                                    Math.sin((2 * Math.PI * i) / this.alivePlayers.length) * 250;
                        }
                    }
                }
                if ((((_h = this.portals) === null || _h === void 0 ? void 0 : _h.has(bodyA.label)) && ((_j = this.avatars) === null || _j === void 0 ? void 0 : _j.has(bodyB.label))) ||
                    (((_k = this.avatars) === null || _k === void 0 ? void 0 : _k.has(bodyA.label)) && ((_l = this.portals) === null || _l === void 0 ? void 0 : _l.has(bodyB.label)))) {
                    const avatarBody = ((_m = this.avatars) === null || _m === void 0 ? void 0 : _m.has(bodyA.label)) ? bodyA : bodyB;
                    const portalBody = ((_o = this.portals) === null || _o === void 0 ? void 0 : _o.has(bodyA.label)) ? bodyA : bodyB;
                    const avatar = this.avatars.get(avatarBody.label);
                    const portal = this.portals.get(portalBody.label);
                    if ((avatar === null || avatar === void 0 ? void 0 : avatar.portalId) === "" && (portal === null || portal === void 0 ? void 0 : portal.avatarId) === "") {
                        portal.avatarId = avatar.id;
                        avatar.portalId = portal.id;
                        matter_js_1.Composite.remove(this.engine.world, avatarBody);
                        matter_js_1.Composite.remove(this.engine.world, portalBody);
                        this.bodies.delete(avatar.id);
                        this.bodies.delete(portal.id);
                    }
                }
            });
        });
    }
    create(avatars, items, portals, symbols) {
        this.avatars = avatars;
        this.items = items;
        this.portals = portals;
        this.symbols = symbols;
    }
    initialize(state, room) {
        const { players, stageLevel, specialGameRule } = state;
        this.alivePlayers = new Array();
        players.forEach((p) => {
            if (p.alive) {
                this.alivePlayers.push(p);
            }
        });
        this.alivePlayers.forEach((player, i) => {
            const x = this.centerX +
                Math.cos((2 * Math.PI * i) / this.alivePlayers.length) * 300;
            const y = this.centerY +
                Math.sin((2 * Math.PI * i) / this.alivePlayers.length) * 250;
            let retentionDelay = 4000 + (this.alivePlayers.length - player.rank) * 2000;
            if (stageLevel < 5) {
                retentionDelay = 5000;
            }
            if (Config_1.PortalCarouselStages.includes(stageLevel)) {
                retentionDelay = 8000;
            }
            if (player.isBot) {
                retentionDelay += (0, random_1.randomBetween)(1000, 6000);
            }
            if (Config_1.ItemCarouselStages.includes(stageLevel) &&
                state.specialGameRule === SpecialGameRule_1.SpecialGameRule.KECLEONS_SHOP) {
                if (player.money < Config_1.KECLEON_SHOP_COST) {
                    retentionDelay = Infinity;
                }
            }
            const avatar = new pokemon_avatar_1.PokemonAvatarModel(player.id, player.avatar, x, y, retentionDelay);
            if (player.isBot) {
                avatar.targetX =
                    this.centerX +
                        Math.cos((2 * Math.PI * i) / this.alivePlayers.length) *
                            CAROUSEL_RADIUS;
                avatar.targetY =
                    this.centerY +
                        Math.sin((2 * Math.PI * i) / this.alivePlayers.length) *
                            CAROUSEL_RADIUS;
            }
            this.avatars.set(avatar.id, avatar);
            const body = matter_js_1.Bodies.circle(x, y, 25);
            body.label = avatar.id;
            body.collisionFilter.mask = 0;
            this.bodies.set(avatar.id, body);
            matter_js_1.Composite.add(this.engine.world, body);
        });
        if (Config_1.PortalCarouselStages.includes(stageLevel)) {
            this.initializePortalCarousel();
            room.broadcast(types_1.Transfer.PRELOAD_MAPS, (0, schemas_1.values)(this.portals).map((p) => p.map));
        }
        else if (Config_1.ItemCarouselStages.includes(stageLevel)) {
            this.initializeItemsCarousel(stageLevel, specialGameRule);
        }
    }
    initializeItemsCarousel(stageLevel, specialGameRule) {
        var _a;
        const items = this.pickRandomItems(stageLevel, specialGameRule);
        for (let j = 0; j < items.length; j++) {
            const x = this.centerX + Math.cos((Math.PI * 2 * j) / items.length) * 100;
            const y = this.centerY + Math.sin((Math.PI * 2 * j) / items.length) * 90;
            const name = items[j];
            const floatingItem = new floating_item_1.FloatingItem(name, x, y, j);
            (_a = this.items) === null || _a === void 0 ? void 0 : _a.set(floatingItem.id, floatingItem);
            const body = matter_js_1.Bodies.circle(x, y, 20);
            body.label = floatingItem.id;
            body.isSensor = true;
            this.bodies.set(floatingItem.id, body);
            matter_js_1.Composite.add(this.engine.world, body);
        }
    }
    initializePortalCarousel() {
        var _a;
        const nbPortals = (0, number_1.clamp)(this.alivePlayers.length + 1, 3, 9);
        for (let i = 0; i < nbPortals; i++) {
            const x = this.centerX + Math.cos((Math.PI * 2 * i) / nbPortals) * 115;
            const y = this.centerY + Math.sin((Math.PI * 2 * i) / nbPortals) * 115;
            const portal = new portal_1.Portal(x, y, i);
            (_a = this.portals) === null || _a === void 0 ? void 0 : _a.set(portal.id, portal);
            const body = matter_js_1.Bodies.circle(x, y, 30);
            body.label = portal.id;
            body.isSensor = true;
            this.bodies.set(portal.id, body);
            matter_js_1.Composite.add(this.engine.world, body);
        }
        this.pickRandomSynergySymbols();
    }
    update(dt) {
        var _a;
        matter_js_1.Engine.update(this.engine, dt);
        (_a = this.avatars) === null || _a === void 0 ? void 0 : _a.forEach((a) => {
            if (a.timer > 0) {
                a.timer = a.timer - dt;
            }
        });
        this.bodies.forEach((body, id) => {
            var _a, _b, _c, _d;
            if (body.position.x < 0 ||
                body.position.x > 720 ||
                body.position.y < 0 ||
                body.position.y > 590) {
                matter_js_1.Body.setPosition(body, {
                    x: (0, number_1.clamp)(body.position.x, 0, 720),
                    y: (0, number_1.clamp)(body.position.y, 0, 590)
                });
            }
            if ((_a = this.avatars) === null || _a === void 0 ? void 0 : _a.has(id)) {
                const avatar = this.avatars.get(id);
                avatar.x = body.position.x;
                avatar.y = body.position.y;
                this.updatePlayerVector(id);
            }
            else if ((_b = this.items) === null || _b === void 0 ? void 0 : _b.has(id)) {
                const item = this.items.get(id);
                item.x = body.position.x;
                item.y = body.position.y;
            }
            else if ((_c = this.portals) === null || _c === void 0 ? void 0 : _c.has(id)) {
                const portal = this.portals.get(id);
                portal.x = body.position.x;
                portal.y = body.position.y;
                const t = this.engine.timing.timestamp * SYMBOL_ROTATION_SPEED;
                const symbols = (_d = this.symbolsByPortal.get(portal.id)) !== null && _d !== void 0 ? _d : [];
                symbols.forEach((symbol) => {
                    symbol.x =
                        portal.x +
                            Math.cos(t + (Math.PI * 2 * symbol.index) / symbols.length) * 25;
                    symbol.y =
                        portal.y +
                            Math.sin(t + (Math.PI * 2 * symbol.index) / symbols.length) * 25;
                });
            }
        });
    }
    pickRandomItems(stageLevel, specialGameRule) {
        const items = [];
        let nbItemsToPick = (0, number_1.clamp)(this.alivePlayers.length + 3, 5, 9);
        let maxCopiesPerItem = 2;
        let itemsSet = Item_1.ItemComponents;
        if (stageLevel >= 20) {
            nbItemsToPick += 1;
            maxCopiesPerItem = 1;
            itemsSet = Item_1.CraftableItems;
        }
        if (specialGameRule === SpecialGameRule_1.SpecialGameRule.SYNERGY_WHEEL) {
            itemsSet = Item_1.SynergyStones;
            maxCopiesPerItem = 4;
        }
        if (specialGameRule === SpecialGameRule_1.SpecialGameRule.KECLEONS_SHOP) {
            itemsSet = Item_1.CraftableItems;
            maxCopiesPerItem = 1;
            nbItemsToPick = 6;
        }
        for (let j = 0; j < nbItemsToPick; j++) {
            let item, count, tries = 0;
            do {
                item = (0, random_1.pickRandomIn)(itemsSet);
                count = items.filter((i) => i === item).length;
                tries++;
            } while (count >= maxCopiesPerItem && tries < 10);
            items.push(item);
        }
        return items;
    }
    pickRandomSynergySymbols() {
        var _a, _b;
        (_a = this.avatars) === null || _a === void 0 ? void 0 : _a.forEach((avatar) => {
            const player = this.alivePlayers.find((p) => p.id === avatar.id);
            const synergiesTriggerLevels = Array.from(player.synergies).map(([type, value]) => {
                const lastTrigger = Config_1.SynergyTriggers[type]
                    .filter((n) => n <= value)
                    .at(-1);
                let levelReached = lastTrigger
                    ? Config_1.SynergyTriggers[type].indexOf(lastTrigger) + 1
                    : 0;
                if (type === Synergy_1.Synergy.FLORA || type === Synergy_1.Synergy.LIGHT)
                    levelReached = (0, number_1.min)(0)(levelReached - 1);
                return [type, levelReached];
            });
            const candidatesSymbols = [];
            synergiesTriggerLevels.forEach(([type, level]) => {
                candidatesSymbols.push(...new Array(level).fill(type));
            });
            if (candidatesSymbols.length < 4) {
                const incompleteSynergies = synergiesTriggerLevels
                    .filter(([type, level]) => level === 0 && player.synergies.get(type) > 0)
                    .map(([type, _level]) => type);
                candidatesSymbols.push(...(0, random_1.pickNRandomIn)(incompleteSynergies, 4 - candidatesSymbols.length));
            }
            while (candidatesSymbols.length < 4) {
                candidatesSymbols.push((0, random_1.pickRandomIn)(Synergy_1.Synergy));
            }
            const symbols = (0, random_1.pickNRandomIn)(candidatesSymbols, NB_SYMBOLS_PER_PLAYER);
            symbols.forEach((type, i) => {
                var _a;
                const symbol = new portal_1.SynergySymbol(avatar.x, avatar.y, type, i);
                (_a = this.symbols) === null || _a === void 0 ? void 0 : _a.set(symbol.id, symbol);
            });
        });
        const portalIds = (0, random_1.shuffleArray)((0, schemas_1.keys)(this.portals));
        const symbols = (0, random_1.shuffleArray)((0, schemas_1.values)(this.symbols));
        this.symbolsByPortal = new Map();
        symbols.forEach((symbol, i) => {
            var _a;
            const portalId = portalIds[i % portalIds.length];
            this.symbolsByPortal.set(portalId, [
                ...((_a = this.symbolsByPortal.get(portalId)) !== null && _a !== void 0 ? _a : []),
                symbol
            ]);
            setTimeout(() => {
                symbol.index = Math.floor(i / portalIds.length);
                symbol.portalId = portalId;
            }, 1500 + 1500 * (i / symbols.length));
        });
        const maps = new Set(Object.values(Dungeon_1.DungeonPMDO));
        (_b = this.portals) === null || _b === void 0 ? void 0 : _b.forEach((portal) => {
            const symbols = this.symbolsByPortal.get(portal.id);
            const portalSynergies = (symbols !== null && symbols !== void 0 ? symbols : []).map((s) => s.synergy);
            let nbMaxInCommon = 0, candidateMaps = [];
            maps.forEach((map) => {
                const synergies = Dungeon_1.DungeonDetails[map].synergies;
                const inCommon = synergies.filter((s) => portalSynergies.includes(s));
                if (inCommon.length > nbMaxInCommon) {
                    nbMaxInCommon = inCommon.length;
                    candidateMaps = [map];
                }
                else if (inCommon.length === nbMaxInCommon) {
                    candidateMaps.push(map);
                }
            });
            portal.map = (0, random_1.pickRandomIn)(candidateMaps);
            maps.delete(portal.map);
        });
    }
    applyVector(id, x, y) {
        var _a;
        const avatar = (_a = this.avatars) === null || _a === void 0 ? void 0 : _a.get(id);
        if (avatar && avatar.timer <= 0) {
            avatar.targetX = avatar.x + x;
            avatar.targetY = avatar.y - y;
            this.updatePlayerVector(id);
        }
    }
    updatePlayerVector(id) {
        var _a;
        const avatar = (_a = this.avatars) === null || _a === void 0 ? void 0 : _a.get(id);
        const body = this.bodies.get(id);
        if (body && avatar && avatar.timer <= 0) {
            if (!avatar.itemId) {
                body.collisionFilter.mask = 1;
            }
            const distanceToTarget = Math.sqrt((avatar.targetX - avatar.x) ** 2 + (avatar.targetY - avatar.y) ** 2);
            if (distanceToTarget > PLAYER_VELOCITY) {
                avatar.action = Game_1.PokemonActionState.WALK;
                let moveVector = matter_js_1.Vector.sub(matter_js_1.Vector.create(avatar.targetX, avatar.targetY), matter_js_1.Vector.create(avatar.x, avatar.y));
                avatar.orientation = (0, orientation_1.getOrientation)(0, 0, moveVector.x, -1 * moveVector.y);
                moveVector = matter_js_1.Vector.normalise(moveVector);
                moveVector = matter_js_1.Vector.mult(moveVector, PLAYER_VELOCITY);
                matter_js_1.Body.setVelocity(body, moveVector);
            }
            else {
                avatar.action = Game_1.PokemonActionState.IDLE;
                matter_js_1.Body.setVelocity(body, matter_js_1.Vector.create(0, 0));
            }
        }
    }
    stop(room) {
        const state = room.state;
        const players = state.players;
        this.bodies.forEach((body, key) => {
            matter_js_1.Composite.remove(this.engine.world, body);
            this.bodies.delete(key);
        });
        this.avatars.forEach((avatar) => {
            var _a, _b, _c;
            const player = players.get(avatar.id);
            if (avatar.itemId === "" &&
                player &&
                !player.isBot &&
                this.items &&
                state.specialGameRule !== SpecialGameRule_1.SpecialGameRule.KECLEONS_SHOP) {
                const remainingItems = [...this.items.entries()].filter(([_itemId, item]) => item.avatarId == "");
                if (remainingItems.length > 0) {
                    avatar.itemId = (0, random_1.pickRandomIn)(remainingItems)[0];
                }
            }
            if (avatar.portalId == "" && player && !player.isBot) {
                avatar.portalId = "random";
            }
            if (avatar.itemId) {
                const item = (_a = this.items) === null || _a === void 0 ? void 0 : _a.get(avatar.itemId);
                if (item && player && !player.isBot) {
                    player.items.push(item.name);
                }
            }
            if (player && Config_1.PortalCarouselStages.includes(state.stageLevel)) {
                if (avatar.portalId && ((_b = this.portals) === null || _b === void 0 ? void 0 : _b.has(avatar.portalId))) {
                    const portal = this.portals.get(avatar.portalId);
                    player.map = portal.map;
                    player.updateRegionalPool(state, true);
                }
                const symbols = (_c = this.symbolsByPortal.get(avatar.portalId)) !== null && _c !== void 0 ? _c : [];
                const portalSynergies = symbols.map((s) => s.synergy);
                state.shop.assignUniquePropositions(player, state.stageLevel, portalSynergies);
            }
            this.avatars.delete(avatar.id);
        });
        if (this.items) {
            this.items.forEach((item) => {
                this.items.delete(item.id);
            });
        }
        if (this.portals) {
            this.portals.forEach((portal) => {
                this.portals.delete(portal.id);
            });
        }
        if (this.symbols) {
            this.symbols.forEach((symbol) => {
                this.symbols.delete(symbol.id);
            });
        }
    }
}
exports.MiniGame = MiniGame;
//# sourceMappingURL=mini-game.js.map