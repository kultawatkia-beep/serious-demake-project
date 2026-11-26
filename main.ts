namespace SpriteKind {
    export const Clamp = SpriteKind.create()
    export const Core = SpriteKind.create()
    export const Module = SpriteKind.create()
    export const Turret = SpriteKind.create()
    export const Crate = SpriteKind.create()
    export const Airlock = SpriteKind.create()
}

// --- PIXEL ART ASSETS (8x8 Sprites & 16x16 Tiles) ---
const imgClampActive = img`
    . 4 4 4 4 4 4 .
    4 5 5 5 5 5 5 4
    4 5 f f f f 5 4
    4 5 f 4 4 f 5 4
    4 5 f 4 4 f 5 4
    4 5 f f f f 5 4
    4 5 5 5 5 5 5 4
    . 4 4 4 4 4 4 .
`

const imgClampIdle = img`
    . b b b b b b .
    b c c c c c c b
    b c f f f f c b
    b c f 9 9 f c b
    b c f 9 9 f c b
    b c f f f f c b
    b c c c c c c b
    . b b b b b b .
`

const imgCore = img`
    . . 9 9 9 9 . .
    . 9 1 9 9 1 9 .
    9 1 1 9 9 9 9 9
    9 9 9 6 6 9 9 9
    9 9 9 6 6 9 9 9
    9 9 9 9 9 9 9 9
    . 9 9 9 9 9 9 .
    . . 9 9 9 9 . .
`

const imgModule = img`
    . . . 7 7 . . .
    . . 7 1 1 7 . .
    . 7 1 7 7 1 7 .
    7 1 7 5 5 7 1 7
    7 1 7 5 5 7 1 7
    . 7 1 7 7 1 7 .
    . . 7 1 1 7 . .
    . . . 7 7 . . .
`

const imgTurret = img`
    . . f f f f . .
    . f 2 2 2 2 f .
    f 2 f f f f 2 f
    f 2 f 4 4 f 2 f
    f 2 f 4 4 f 2 f
    f 2 f f f f 2 f
    . f 2 2 2 2 f .
    . . f f f f . .
`

const imgBullet = img`
    . 2 2 .
    2 5 5 2
    2 5 5 2
    . 2 2 .
`

const imgCrate = img`
    5 5 5 5 5 5 5 5
    5 4 4 4 4 4 4 5
    5 4 5 4 4 5 4 5
    5 4 4 5 5 4 4 5
    5 4 4 5 5 4 4 5
    5 4 5 4 4 5 4 5
    5 4 4 4 4 4 4 5
    5 5 5 5 5 5 5 5
`

const imgAirlockLocked = img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
    2 f f f f f f f f f f f f f f 2
    2 f 2 2 f f f f f f f f 2 2 f 2
    2 f 2 f f f 2 2 2 2 f f f 2 f 2
    2 f f f f 2 f f f f 2 f f f f 2
    2 f f f f 2 f f f f 2 f f f f 2
    2 f f f 2 2 2 2 2 2 2 2 f f f 2
    2 f f f 2 2 2 f f 2 2 2 f f f 2
    2 f f f 2 2 2 f f 2 2 2 f f f 2
    2 f f f 2 2 2 2 2 2 2 2 f f f 2
    2 f f f f f f f f f f f f f f 2
    2 f f f f f f f f f f f f f f 2
    2 f 2 f f f f f f f f f f 2 f 2
    2 f 2 2 f f f f f f f f 2 2 f 2
    2 f f f f f f f f f f f f f f 2
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
`

const imgAirlockOpen = img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
    7 f f f f f f f f f f f f f f 7
    7 f 7 7 f f f f f f f f 7 7 f 7
    7 f 7 f f f 9 9 9 9 f f f 7 f 7
    7 f f f f 9 1 1 1 1 9 f f f f 7
    7 f f f 9 1 9 9 9 9 1 9 f f f 7
    7 f f f 9 1 9 7 7 9 1 9 f f f 7
    7 f f f 9 1 9 7 7 9 1 9 f f f 7
    7 f f f 9 1 9 7 7 9 1 9 f f f 7
    7 f f f 9 1 9 7 7 9 1 9 f f f 7
    7 f f f 9 1 9 9 9 9 1 9 f f f 7
    7 f f f f 9 1 1 1 1 9 f f f f 7
    7 f 7 f f f 9 9 9 9 f f f 7 f 7
    7 f 7 7 f f f f f f f f 7 7 f 7
    7 f f f f f f f f f f f f f f 7
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
`

// --- TILES (16x16) ---
const tileFloor = img`
    c c c c c c c c c c c c c c c c
    c b b b b b b b b b b b b b b c
    c b c c c c c c c c c c c c b c
    c b c b b b b b b b b b b c b c
    c b c b b b b b b b b b b c b c
    c b c b b b b b b b b b b c b c
    c b c b b b b b b b b b b c b c
    c b c b b b b b b b b b b c b c
    c b c b b b b b b b b b b c b c
    c b c b b b b b b b b b b c b c
    c b c b b b b b b b b b b c b c
    c b c b b b b b b b b b b c b c
    c b c b b b b b b b b b b c b c
    c b c c c c c c c c c c c c b c
    c b b b b b b b b b b b b b b c
    c c c c c c c c c c c c c c c c
`

const tileChasm = img`
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f b f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f b f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f b f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f
`

// --- RIG REFERENCES ---
let clampA: Sprite = null
let clampB: Sprite = null
let sensorCore: Sprite = null
let airlockSprite: Sprite = null
let cableOverlay: Sprite = null

function createRig(startX: number, startY: number) {
    clampA = sprites.create(imgClampActive, SpriteKind.Clamp)
    clampB = sprites.create(imgClampIdle, SpriteKind.Clamp)
    sensorCore = sprites.create(imgCore, SpriteKind.Core)

    clampA.setPosition(startX, startY)
    clampB.setPosition(startX + 24, startY)
    sensorCore.setPosition(startX + 12, startY)

    clampA.z = 10
    clampB.z = 10
    sensorCore.z = 11

    // Transparent screen-sized canvas used to draw the winch cable each frame
    if (!cableOverlay) {
        cableOverlay = sprites.create(image.create(160, 120), SpriteKind.Player)
        cableOverlay.setFlag(SpriteFlag.RelativeToCamera, true)
        cableOverlay.setFlag(SpriteFlag.Ghost, true)
        cableOverlay.z = 9
    }
}

// --- ROTATIONAL PHYSICS STATE ---
let pivotIndex = 0          // 0 = anchored on clampA, 1 = anchored on clampB, -1 = airborne (Chain-Shot)
let angle = 0               // Current angle in radians
let spinDir = 1             // 1 = clockwise, -1 = counter-clockwise
const omega = 3.2           // Angular velocity (rad/s)

const minRadius = 22        // Resting cable length (pixels, ~0.65m)
const maxRadius = 48        // Max spooled-out cable length
const spoolSpeed = 42       // Cable extension rate (px/s)
let currentRadius = minRadius
let isExtending = false

// Airborne Chain-Shot velocity (center of mass)
let airVx = 0
let airVy = 0

function resetPhysics(startX: number, startY: number) {
    pivotIndex = 0
    angle = 0
    spinDir = 1
    currentRadius = minRadius
    isExtending = false
    airVx = 0
    airVy = 0
    createRig(startX, startY)
}

// Helper: checks if world coordinate (x, y) is over solid floor (not chasm)
function isSolidFloor(x: number, y: number): boolean {
    let loc = tiles.getTileLocation(Math.floor(x / 16), Math.floor(y / 16))
    return !tiles.tileAtLocationEquals(loc, tileChasm)
}

// TAP A / SPACE: Swap anchor to orbiting clamp (or catch floor mid-air)
function swapPivot() {
    if (pivotIndex == -1) {
        // Mid-air catch: check if either clamp is over solid floor
        if (isSolidFloor(clampA.x, clampA.y)) {
            pivotIndex = 0
            angle = Math.atan2(clampB.y - clampA.y, clampB.x - clampA.x)
            spinDir *= -1
            music.playTone(523, 60)
        } else if (isSolidFloor(clampB.x, clampB.y)) {
            pivotIndex = 1
            angle = Math.atan2(clampA.y - clampB.y, clampA.x - clampB.x)
            spinDir *= -1
            music.playTone(523, 60)
        }
        return
    }

    let orbiting = pivotIndex == 0 ? clampB : clampA
    if (isSolidFloor(orbiting.x, orbiting.y)) {
        pivotIndex = pivotIndex == 0 ? 1 : 0
        angle += Math.PI // Flip reference vector 180 deg to new pivot
        spinDir *= -1    // Auto-reverse spin for agile zigzagging
        music.playTone(440, 50)
    } else {
        // Buzz if trying to clamp over open chasm
        music.playTone(140, 80)
    }
}

// RIGHT CLICK / SHIFT / B BUTTON: Detach both clamps for Chain-Shot Launch
function triggerChainShot() {
    if (pivotIndex == -1) return

    // Tangential speed v = omega * r (applied to center of mass at r/2)
    let tangentialSpeed = omega * (currentRadius * 0.5)
    let tangentAngle = angle + (Math.PI / 2) * spinDir

    airVx = Math.cos(tangentAngle) * tangentialSpeed
    airVy = Math.sin(tangentAngle) * tangentialSpeed
    pivotIndex = -1
    music.playTone(660, 100)
}

// R KEY / UP BUTTON: Flip spin direction anytime
function flipSpin() {
    spinDir *= -1
    music.playTone(330, 40)
}

function updateRigPhysics(dt: number) {
    if (!clampA || !clampB || !sensorCore) return

    // 1. Spool winch cable out when holding A, retract when released
    if (isExtending && pivotIndex != -1) {
        currentRadius = Math.min(maxRadius, currentRadius + spoolSpeed * dt)
    } else {
        currentRadius = Math.max(minRadius, currentRadius - spoolSpeed * 1.4 * dt)
    }

    // 2. Advance rotation angle
    angle += omega * spinDir * dt

    if (pivotIndex == 0) {
        // Anchored on Clamp A; Clamp B orbits
        clampA.setImage(imgClampActive)
        clampB.setImage(imgClampIdle)
        clampB.x = clampA.x + Math.cos(angle) * currentRadius
        clampB.y = clampA.y + Math.sin(angle) * currentRadius
    } else if (pivotIndex == 1) {
        // Anchored on Clamp B; Clamp A orbits
        clampB.setImage(imgClampActive)
        clampA.setImage(imgClampIdle)
        clampA.x = clampB.x + Math.cos(angle) * currentRadius
        clampA.y = clampB.y + Math.sin(angle) * currentRadius
    } else {
        // Airborne Chain-Shot: center moves linearly while clamps spin like a bola
        clampA.setImage(imgClampIdle)
        clampB.setImage(imgClampIdle)
        let cx = sensorCore.x + airVx * dt
        let cy = sensorCore.y + airVy * dt
        let halfR = currentRadius * 0.5
        clampA.x = cx - Math.cos(angle) * halfR
        clampA.y = cy - Math.sin(angle) * halfR
        clampB.x = cx + Math.cos(angle) * halfR
        clampB.y = cy + Math.sin(angle) * halfR
    }

    // 3. Suspend fragile cyan core at the exact midpoint of the cable
    sensorCore.x = (clampA.x + clampB.x) * 0.5
    sensorCore.y = (clampA.y + clampB.y) * 0.5

    // 4. Render high-tension winch cable between Clamp A and Clamp B
    let camX = scene.cameraProperty(CameraProperty.Left)
    let camY = scene.cameraProperty(CameraProperty.Top)
    cableOverlay.image.fill(0)
    cableOverlay.image.drawLine(
        clampA.x - camX,
        clampA.y - camY,
        clampB.x - camX,
        clampB.y - camY,
        isExtending ? 5 : 9
    )
}

let currentSector = 1
let modulesCollected = 0
let totalModules = 3
let airlockUnlocked = false

function clearEntities() {
    sprites.destroyAllSpritesOfKind(SpriteKind.Module)
    sprites.destroyAllSpritesOfKind(SpriteKind.Turret)
    sprites.destroyAllSpritesOfKind(SpriteKind.Crate)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    if (airlockSprite) airlockSprite.destroy()
}

function spawnModule(col: number, row: number) {
    let m = sprites.create(imgModule, SpriteKind.Module)
    tiles.placeOnTile(m, tiles.getTileLocation(col, row))
}

function spawnTurret(col: number, row: number) {
    let t = sprites.create(imgTurret, SpriteKind.Turret)
    tiles.placeOnTile(t, tiles.getTileLocation(col, row))
}

function spawnCrate(col: number, row: number) {
    let c = sprites.create(imgCrate, SpriteKind.Crate)
    tiles.placeOnTile(c, tiles.getTileLocation(col, row))
}

function spawnAirlock(col: number, row: number) {
    airlockSprite = sprites.create(imgAirlockLocked, SpriteKind.Airlock)
    tiles.placeOnTile(airlockSprite, tiles.getTileLocation(col, row))
    airlockUnlocked = false
}

function loadSector(sector: number) {
    clearEntities()
    currentSector = sector
    modulesCollected = 0
    totalModules = 3

    if (sector == 1) {
        // SECTOR 1-1: Calibration Bay
        game.splash("SECTOR 1-1", "Calibration Bay")
        tiles.setCurrentTilemap(tilemap`sector1`)
        resetPhysics(32, 88)
        spawnModule(5, 3)
        spawnModule(9, 7)
        spawnModule(13, 3)
        spawnCrate(7, 5)
        spawnCrate(11, 5)
        spawnTurret(8, 2)
        spawnAirlock(16, 5)
    } else if (sector == 2) {
        // SECTOR 1-2: Turret Foundry
        game.splash("SECTOR 1-2", "Turret Foundry")
        tiles.setCurrentTilemap(tilemap`sector2`)
        resetPhysics(32, 88)
        spawnModule(6, 2)
        spawnModule(10, 8)
        spawnModule(14, 3)
        spawnTurret(6, 5)
        spawnTurret(12, 4)
        spawnCrate(9, 5)
        spawnAirlock(17, 5)
    } else {
        // SECTOR 1-3: Reactor Chasm
        game.splash("SECTOR 1-3", "Reactor Chasm")
        tiles.setCurrentTilemap(tilemap`sector3`)
        resetPhysics(32, 88)
        spawnModule(6, 3)
        spawnModule(11, 7)
        spawnModule(15, 3)
        spawnTurret(8, 2)
        spawnTurret(13, 8)
        spawnCrate(11, 4)
        spawnAirlock(18, 5)
    }

    scene.cameraFollowSprite(sensorCore)
}

function checkAirlockUnlock() {
    if (modulesCollected >= totalModules && !airlockUnlocked) {
        airlockUnlocked = true
        airlockSprite.setImage(imgAirlockOpen)
        music.powerUp.play()
        game.showLongText("EXTRACTION AIRLOCK UNLOCKED!", DialogLayout.Top)
    }
}

// --- INITIALIZE GAME STATE ---
info.setLife(3)
info.setScore(0)
loadSector(1)

// --- CONTROLS ---
// A Button (Space / Z): Tap to swap pivot, Hold to spool out cable
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    isExtending = true
    swapPivot()
})

controller.A.onEvent(ControllerButtonEvent.Released, function () {
    isExtending = false
})

// B Button (Enter / X): Chain-Shot Launch
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    triggerChainShot()
})

// Up Button: Flip Spin Direction
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    flipSpin()
})

// --- TURRET FIRING LOOP ---
game.onUpdateInterval(1800, function () {
    if (!sensorCore) return
    for (let turret of sprites.allOfKind(SpriteKind.Turret)) {
        let dx = sensorCore.x - turret.x
        let dy = sensorCore.y - turret.y
        let dist = Math.sqrt(dx * dx + dy * dy)
        if (dist > 0 && dist < 140) {
            let proj = sprites.createProjectileFromSprite(imgBullet, turret, (dx / dist) * 55, (dy / dist) * 55)
            proj.setFlag(SpriteFlag.AutoDestroy, true)
        }
    }
})

// --- COLLISION & OVERLAP RULES ---
// 1. Clamps deflect turret bullets & smash yellow crates
sprites.onOverlap(SpriteKind.Clamp, SpriteKind.Projectile, function (clamp, bullet) {
    bullet.destroy(effects.warmRadial, 100)
    info.changeScoreBy(25)
    music.playTone(880, 30)
})

sprites.onOverlap(SpriteKind.Clamp, SpriteKind.Crate, function (clamp, crate) {
    crate.destroy(effects.disintegrate, 150)
    info.changeScoreBy(50)
    music.knock.play()
})

// 2. Fragile Cyan Core collects modules, docks at airlock, or takes damage
sprites.onOverlap(SpriteKind.Core, SpriteKind.Module, function (core, mod) {
    mod.destroy(effects.halo, 150)
    modulesCollected += 1
    info.changeScoreBy(200)
    music.baDing.play()
    checkAirlockUnlock()
})

sprites.onOverlap(SpriteKind.Core, SpriteKind.Projectile, function (core, bullet) {
    bullet.destroy()
    scene.cameraShake(4, 200)
    info.changeLifeBy(-1)
    music.zapped.play()
})

// 3. Docking at Extraction Airlock (Clamps or Core touch unlocked airlock)
sprites.onOverlap(SpriteKind.Clamp, SpriteKind.Airlock, function (clamp, lock) {
    if (airlockUnlocked && pivotIndex != -1) {
        info.changeScoreBy(500)
        if (currentSector < 3) {
            loadSector(currentSector + 1)
        } else {
            game.over(true, effects.confetti)
        }
    }
})

// --- MAIN FRAME LOOP ---
let lastTime = game.runtime()
game.onUpdate(function () {
    let now = game.runtime()
    let dt = Math.min(0.05, (now - lastTime) / 1000)
    lastTime = now

    updateRigPhysics(dt)

    // Check if airborne rig falls into chasm without clamping
    if (pivotIndex == -1) {
        let speed = Math.sqrt(airVx * airVx + airVy * airVy)
        if (speed < 10) {
            scene.cameraShake(4, 200)
            info.changeLifeBy(-1)
            loadSector(currentSector)
        }
    }
})