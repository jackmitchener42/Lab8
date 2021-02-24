const formatPath = require('../assets/scripts/main');
describe('volume path is', () => {
    test('volume above 66', () => {
        expect(formatPath(67)).toMatch("./assets/media/icons/volume-level-3.svg");
    });

    test('volume above 33 below 66', () => {
        expect(formatPath(35)).toMatch("./assets/media/icons/volume-level-2.svg");
    });

    test('volume above 0 below 33', () => {
        expect(formatPath(5)).toMatch("./assets/media/icons/volume-level-1.svg");
    });

    test('volume at 0', () => {
        expect(formatPath(0)).toMatch("./assets/media/icons/volume-level-0.svg");
    });
});