const dinghy = {
    startRow: null,
    startCol: null,
    length: 2,
    isVertical: null
}
const speedboat = {
    startRow: null,
    startCol: null,
    length: 3,
    isVertical: null
}
const sailboat = {
    startRow: null,
    startCol: null,
    length: 3,
    isVertical: null
}
const catamaran = {
    startRow: null,
    startCol: null,
    length: 4,
    isVertical: null
}
const yacht = {
    startRow: null,
    startCol: null,
    length: 5,
    isVertical: null
}

const ships = [dinghy, speedboat, sailboat, catamaran, yacht]

const getShipCells = (ship) => {
    let cells = []

    for (let i = 0; i <ship.length; i++) {
        if (ship.isVertical) {
            cells.push({ row: ship.startRow + i, col: ship.startCol })
        } else {
            cells.push({ row: ship.startRow, col: ship.startCol + i })
        }
    }

    return cells
}