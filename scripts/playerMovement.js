
var input = {
    up: false,
    down: false,
    left: false,
    right: false,
}


window.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'w':
        case 'ArrowUp':
            input.down = true;
            break;
        case 'a':
        case 'ArrowLeft':
            input.left = true;
            break;
        case 's':
        case 'ArrowDown':
            input.up = true;
            break;
        case 'd':
        case 'ArrowRight':
            input.right = true;
            break;
        default:
            break;
    }
});

window.addEventListener('keyup', function (event) {
    switch (event.key) {
        case 'w':
        case 'ArrowUp':
            input.down = false;
            break;
        case 'a':
        case 'ArrowLeft':
            input.left = false;
            break;
        case 's':
        case 'ArrowDown':
            input.up = false;
            break;
        case 'd':
        case 'ArrowRight':
            input.right = false;
            break;
        default:
            break;
    }
});

const movement = (prev) => {
    const increment = 0.1;
    const max = 2;
    res = {};
    res.x = prev.x;
    res.y = prev.y;

    if (input.up) res.y += increment;
    if (input.down) res.y -= increment;
    if (input.right) res.x += increment;
    if (input.left) res.x -= increment;

    if (res.x > max) res.x = max;
    if (res.x < -max) res.x = -max;
    if (res.y > max) res.y = max;
    if (res.y < -max) res.y = -max;

    return res;
}
