"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const Effect_1 = require("../types/enum/Effect");
const Game_1 = require("../types/enum/Game");
const Passive_1 = require("../types/enum/Passive");
const distance_1 = require("../utils/distance");
const logger_1 = require("../utils/logger");
const orientation_1 = require("../utils/orientation");
const random_1 = require("../utils/random");
class Board {
    constructor(rows, colums) {
        this.rows = rows;
        this.columns = colums;
        this.cells = new Array(this.rows * this.columns);
        this.effects = new Array(this.rows * this.columns);
    }
    getValue(x, y) {
        if (y >= 0 && y < this.rows && x >= 0 && x < this.columns) {
            return this.cells[this.columns * y + x];
        }
    }
    setValue(x, y, value) {
        if (y >= 0 && y < this.rows && x >= 0 && x < this.columns) {
            const index = this.columns * y + x;
            this.cells[index] = value;
            if (value && !(value.positionX === x && value.positionY === y)) {
                const effectOnPreviousCell = this.effects[value.positionY * this.columns + value.positionX];
                if (effectOnPreviousCell != null) {
                    value.effects.delete(effectOnPreviousCell);
                }
                if (value.passive === Passive_1.Passive.STENCH) {
                    this.effects[value.positionY * this.columns + value.positionX] =
                        Effect_1.Effect.POISON_GAS;
                }
                value.positionX = x;
                value.positionY = y;
                const effectOnNewCell = this.effects[index];
                if (effectOnNewCell != null) {
                    value.effects.add(effectOnNewCell);
                }
            }
        }
    }
    moveValue(x0, y0, x1, y1) {
        const value = this.getValue(x0, y0);
        this.setValue(x1, y1, value);
        this.setValue(x0, y0, undefined);
    }
    swapValue(x0, y0, x1, y1) {
        const v0 = this.getValue(x0, y0);
        const v1 = this.getValue(x1, y1);
        this.setValue(x1, y1, v0);
        this.setValue(x0, y0, v1);
    }
    forEach(callback) {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.columns; x++) {
                callback(x, y, this.cells[this.columns * y + x]);
            }
        }
    }
    find(predicate) {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.columns; x++) {
                const cell = this.cells[this.columns * y + x];
                if (cell && predicate(x, y, cell)) {
                    return cell;
                }
            }
        }
        return null;
    }
    orientation(x0, y0, x1, y1, pokemon, target) {
        const dx = x1 - x0;
        const dy = y1 - y0;
        if (dx > 0) {
            if (dy == 0) {
                return Game_1.Orientation.RIGHT;
            }
            else if (dy < 0) {
                return Game_1.Orientation.DOWNRIGHT;
            }
            else {
                return Game_1.Orientation.UPRIGHT;
            }
        }
        else if (dx == 0) {
            if (dy == 0) {
                if (pokemon.status.confusion) {
                    return (0, random_1.pickRandomIn)(Game_1.Orientation);
                }
                logger_1.logger.error("failed to get pokemon orientation", {
                    x0,
                    y0,
                    x1,
                    y1,
                    pokemon: pokemon.name,
                    pokemonPosX: pokemon.positionX,
                    pokemonPosY: pokemon.positionY,
                    target: target === null || target === void 0 ? void 0 : target.name,
                    targetPosX: target === null || target === void 0 ? void 0 : target.positionX,
                    targetPosY: target === null || target === void 0 ? void 0 : target.positionY
                });
                logger_1.logger.trace("orientation error");
                return Game_1.Orientation.DOWNRIGHT;
            }
            else if (dy < 0) {
                return Game_1.Orientation.DOWN;
            }
            else {
                return Game_1.Orientation.UP;
            }
        }
        else {
            if (dy == 0) {
                return Game_1.Orientation.LEFT;
            }
            else if (dy < 0) {
                return Game_1.Orientation.DOWNLEFT;
            }
            else {
                return Game_1.Orientation.UPLEFT;
            }
        }
    }
    getAdjacentCells(cellX, cellY, includesCenter = false) {
        const cells = new Array();
        for (let y = cellY - 1; y < cellY + 2; y++) {
            for (let x = cellX - 1; x < cellX + 2; x++) {
                if (x == cellX && y == cellY && !includesCenter)
                    continue;
                if (y >= 0 && y < this.rows && x >= 0 && x < this.columns) {
                    cells.push({ x, y, value: this.cells[this.columns * y + x] });
                }
            }
        }
        return cells;
    }
    getOuterRangeCells(cellX, cellY, range = 1, includesCenter = false) {
        const cells = new Array();
        for (let y = cellY - range; y <= cellY + range; y++) {
            for (let x = cellX - range; x <= cellX + range; x++) {
                if (x == cellX && y == cellY && !includesCenter)
                    continue;
                if (y >= 0 && y < this.rows && x >= 0 && x < this.columns) {
                    cells.push({ x, y, value: this.cells[this.columns * y + x] });
                }
            }
        }
        return cells;
    }
    getCellsInFront(pokemon, target, range = 1) {
        const cells = new Array();
        pokemon.orientation = this.orientation(pokemon.positionX, pokemon.positionY, target.positionX, target.positionY, pokemon, target);
        const orientations = [
            pokemon.orientation,
            orientation_1.OrientationArray[(orientation_1.OrientationArray.indexOf(pokemon.orientation) + 1) % 8],
            orientation_1.OrientationArray[(orientation_1.OrientationArray.indexOf(pokemon.orientation) + 7) % 8]
        ];
        for (let r = 1; r <= range; r++) {
            orientations.forEach((orientation) => {
                const x = pokemon.positionX + orientation_1.OrientationVector[orientation][0] * r;
                const y = pokemon.positionY + orientation_1.OrientationVector[orientation][1] * r;
                if (y >= 0 && y < this.rows && x >= 0 && x < this.columns) {
                    cells.push({ x, y, value: this.cells[this.columns * y + x] });
                }
            });
        }
        return cells;
    }
    getCellsInRange(cellX, cellY, range) {
        const cells = new Array();
        range = Math.floor(Math.abs(range));
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.columns; x++) {
                if (x == cellX && y == cellY)
                    continue;
                const distance = (0, distance_1.distanceC)(cellX, cellY, x, y);
                if (y >= 0 &&
                    y < this.rows &&
                    x >= 0 &&
                    x < this.columns &&
                    distance <= range) {
                    cells.push({ x, y, value: this.cells[this.columns * y + x] });
                }
            }
        }
        return cells;
    }
    getCellsInRadius(cellX, cellY, radius) {
        const cells = new Array();
        radius = Math.floor(Math.abs(radius)) + 0.5;
        const radiusSquared = radius * radius;
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.columns; x++) {
                if (x == cellX && y == cellY)
                    continue;
                const dy = cellY - y;
                const dx = cellX - x;
                const distanceSquared = dy * dy + dx * dx;
                if (y >= 0 &&
                    y < this.rows &&
                    x >= 0 &&
                    x < this.columns &&
                    distanceSquared < radiusSquared) {
                    cells.push({ x, y, value: this.cells[this.columns * y + x] });
                }
            }
        }
        return cells;
    }
    getAllPokemonCoordinates() {
        const pokemonCoordinates = [];
        this.forEach((x, y, value) => {
            if (value !== undefined) {
                pokemonCoordinates.push({ x, y });
            }
        });
        return pokemonCoordinates;
    }
    getCellsBetween(x0, y0, x1, y1) {
        const cells = [
            {
                x: x0,
                y: y0,
                value: this.cells[this.columns * y0 + x0]
            }
        ];
        const dx = x1 - x0, dy = y1 - y0;
        const nx = Math.abs(dx), ny = Math.abs(dy);
        const sign_x = Math.sign(dx), sign_y = Math.sign(dy);
        let x = x0, y = y0;
        for (let ix = 0, iy = 0; ix < nx || iy < ny;) {
            const decision = (1 + 2 * ix) * ny - (1 + 2 * iy) * nx;
            if (decision === 0) {
                x += sign_x;
                y += sign_y;
                ix++;
                iy++;
            }
            else if (decision < 0) {
                x += sign_x;
                ix++;
            }
            else {
                y += sign_y;
                iy++;
            }
            cells.push({ x, y, value: this.cells[this.columns * y + x] });
        }
        return cells;
    }
    getTeleportationCell(x, y) {
        const candidates = new Array();
        [
            { x: 0, y: 0 },
            { x: 0, y: this.rows - 1 },
            { x: this.columns - 1, y: this.rows - 1 },
            { x: this.columns - 1, y: 0 }
        ].forEach((coord) => {
            const cells = this.getCellsBetween(x, y, coord.x, coord.y);
            cells.forEach((cell) => {
                if (cell.value === undefined) {
                    candidates.push(cell);
                }
            });
        });
        if (candidates.length > 0) {
            candidates.sort((a, b) => (0, distance_1.distanceC)(x, y, b.x, b.y) - (0, distance_1.distanceC)(x, y, a.x, a.y));
            return candidates[0];
        }
        else {
            return undefined;
        }
    }
    getFlyAwayCell(x, y) {
        const cx = Math.round((x + this.columns * 0.5) % this.columns);
        const cy = Math.round((y + this.rows * 0.5) % this.rows);
        let radius = 1;
        const candidates = [{ x: cx, y: cy, value: this.getValue(cx, cy) }];
        while (candidates[0].value !== undefined && radius < 5) {
            candidates.shift();
            if (candidates.length === 0) {
                candidates.push(...this.getCellsInRadius(cx, cy, radius));
                radius++;
            }
        }
        return candidates[0].value === undefined ? candidates[0] : null;
    }
    getEffectOnCell(x, y) {
        if (y >= 0 && y < this.rows && x >= 0 && x < this.columns) {
            return this.effects[this.columns * y + x];
        }
    }
    getClosestAvailablePlace(x, y) {
        var _a;
        const candidateCells = new Array();
        this.forEach((x, y, value) => {
            if (value === undefined) {
                candidateCells.push({
                    x,
                    y,
                    distance: (0, distance_1.distanceM)(x, y, x, y)
                });
            }
        });
        candidateCells.sort((a, b) => a.distance - b.distance);
        return (_a = candidateCells[0]) !== null && _a !== void 0 ? _a : null;
    }
    getFarthestTargetCoordinateAvailablePlace(pokemon, targetAlly = false) {
        const candidateCells = new Array();
        this.forEach((x, y, value) => {
            if (value && value.isTargettableBy(pokemon, !targetAlly, targetAlly)) {
                candidateCells.push(...this.getAdjacentCells(x, y)
                    .filter((cell) => this.getValue(cell.x, cell.y) === undefined)
                    .map((cell) => ({
                    x: cell.x,
                    y: cell.y,
                    distance: (0, distance_1.distanceM)(pokemon.positionX, pokemon.positionY, cell.x, cell.y),
                    target: value
                })));
            }
        });
        candidateCells.sort((a, b) => b.distance - a.distance);
        return candidateCells[0];
    }
    addBoardEffect(x, y, effect, simulation) {
        const previousEffect = this.effects[y * this.columns + x];
        const entityOnCell = this.getValue(x, y);
        if (entityOnCell) {
            entityOnCell.effects.add(effect);
        }
        this.effects[y * this.columns + x] = effect;
        if (previousEffect !== effect) {
            simulation.room.broadcast(types_1.Transfer.BOARD_EVENT, {
                simulationId: simulation.id,
                effect,
                x,
                y
            });
        }
    }
    clearBoardEffect(x, y, simulation) {
        const effect = this.effects[y * this.columns + x];
        const entityOnCell = this.getValue(x, y);
        if (effect && entityOnCell) {
            entityOnCell.effects.delete(effect);
        }
        if (effect) {
            simulation.room.broadcast(types_1.Transfer.BOARD_EVENT, {
                simulationId: simulation.id,
                effect: null,
                x,
                y
            });
        }
        this.effects[y * this.columns + x] = undefined;
    }
}
exports.default = Board;
//# sourceMappingURL=board.js.map