import { NumberList } from '../NumberList.js';

const expect = chai.expect;

describe('NumberList', function () {

    describe('getSegments()', function () {
        it('returns the segments of this number list.', function () {
            const dataSets = [
                {
                    numberList: new NumberList(1, 2, 3, 4, 5),
                    numberOfSegments: 1,
                    segments: [[1, 2, 3, 4, 5]],
                },
                {
                    numberList: new NumberList(5, 4, 3, 2, 1),
                    numberOfSegments: 1,
                    segments: [[5, 4, 3, 2, 1]],
                },
                {
                    numberList: new NumberList(3, 3, 3, 3, 3),
                    numberOfSegments: 1,
                    segments: [[3, 3, 3, 3, 3]],
                },
                {
                    numberList: new NumberList(4, 4, 3, 2, 1),
                    numberOfSegments: 1,
                    segments: [[4, 4, 3, 2, 1]],
                },
                {
                    numberList: new NumberList(1, 2, 3, 4, 4),
                    numberOfSegments: 1,
                    segments: [[1, 2, 3, 4, 4]],
                },
                {
                    numberList: new NumberList(20, 19, 15, 12, 13, 16, 20),
                    numberOfSegments: 2,
                    segments: [[20, 19, 15, 12], [12, 13, 16, 20]],
                },
                {
                    numberList: new NumberList(5, 4, 3, 3, 4, 5),
                    numberOfSegments: 2,
                    segments: [[5, 4, 3, 3], [3, 4, 5]],
                },
            ];

            for (const dataSet of dataSets) {
                const segments = dataSet.numberList.getSegments();
                expect(segments.length).to.equal(dataSet.numberOfSegments);
                expect(segments).to.deep.equal(dataSet.segments);
            }
        });
    });

    describe('hasBegunDescending()', function () {
        it('returns whether the numbers in this list are in descending order.', function () {
            const dataSets = [
                {
                    numberList: new NumberList(1, 1, 1, 1, 1),
                    hasBegunDescending: false,
                },
                {
                    numberList: new NumberList(20, 18, 16, 14, 12),
                    hasBegunDescending: false,
                },
                {
                    numberList: new NumberList(14, 10, 8, 5, 4, 4),
                    hasBegunDescending: false,
                },
                {
                    numberList: new NumberList(1, 11, 18),
                    hasBegunDescending: false,
                },
                {
                    numberList: new NumberList(10, 9, 7, 4, 3, 1, 1, 2, 2, 3),
                    hasBegunDescending: false,
                },
                {
                    numberList: new NumberList(20, 20, 17, 14, 12, 10, 8, 7),
                    hasBegunDescending: false,
                },
                {
                    numberList: new NumberList(1, 1, 2, 2, 3, 3, 4, 4),
                    hasBegunDescending: false,
                },
                {
                    numberList: new NumberList(14, 10, 8, 5, 4, 4, 5),
                    hasBegunDescending: true,
                },
                {
                    numberList: new NumberList(14, 7, 3, 2, 1, 1, 1, 3, 2, 3),
                    hasBegunDescending: false,
                },
            ];

            for (const dataSet of dataSets) {
                const value = dataSet.numberList.hasBegunDescending();
                expect(value).to.equal(dataSet.hasBegunDescending);
            }
        });
    });

    describe('isDescending()', function () {
        it('returns whether the numbers in this list are in descending order.', function () {
            const dataSets = [
                {
                    numberList: new NumberList(1, 1, 1, 1, 1),
                    isDescending: true,
                },
                {
                    numberList: new NumberList(20, 18, 16, 14, 12),
                    isDescending: true,
                },
                {
                    numberList: new NumberList(14, 10, 8, 5, 4, 4),
                    isDescending: true,
                },
                {
                    numberList: new NumberList(1, 11, 18),
                    isDescending: false,
                },
                {
                    numberList: new NumberList(10, 9, 7, 4, 3, 1, 1, 2, 2, 3),
                    isDescending: false,
                },
                {
                    numberList: new NumberList(20, 20, 17, 14, 12, 10, 8, 7),
                    isDescending: true,
                },
                {
                    numberList: new NumberList(1, 1, 2, 2, 3, 3, 4, 4),
                    isDescending: false,
                },
            ];

            for (const dataSet of dataSets) {
                const value = dataSet.numberList.isDescending();
                expect(value).to.equal(dataSet.isDescending);
            }
        });
    });

    describe('isFlat()', function () {
        it('returns whether the numbers in this list are in descending order.', function () {
            const dataSets = [
                {
                    numberList: new NumberList(1, 1, 1, 1, 1),
                    isFlat: true,
                },
                {
                    numberList: new NumberList(20, 18, 16, 14, 12),
                    isFlat: false,
                },
                {
                    numberList: new NumberList(14, 10, 8, 5, 4, 4),
                    isFlat: false,
                },
                {
                    numberList: new NumberList(1, 11, 18),
                    isFlat: false,
                },
                {
                    numberList: new NumberList(10, 9, 7, 4, 3, 1, 1, 2, 2, 3),
                    isFlat: false,
                },
                {
                    numberList: new NumberList(20, 20, 17, 14, 12, 10, 8, 7),
                    isFlat: false,
                },
                {
                    numberList: new NumberList(1, 1, 2, 2, 3, 3, 4, 4),
                    isFlat: false,
                },
            ];

            for (const dataSet of dataSets) {
                const value = dataSet.numberList.isFlat();
                expect(value).to.equal(dataSet.isFlat);
            }
        });
    });

    describe('isLogical()', function () {
        it('returns whether the numbers in this list are in descending order.', function () {
            const dataSets = [
                {
                    numberList: new NumberList(1, 1, 1, 1, 1),
                    isLogical: true,
                },
                {
                    numberList: new NumberList(20, 18, 16, 14, 12),
                    isLogical: true,
                },
                {
                    numberList: new NumberList(14, 10, 8, 5, 4, 4),
                    isLogical: true,
                },
                {
                    numberList: new NumberList(1, 11, 18),
                    isLogical: true,
                },
                {
                    numberList: new NumberList(10, 9, 7, 4, 3, 1, 1, 2, 2, 3),
                    isLogical: true,
                },
                {
                    numberList: new NumberList(20, 20, 17, 14, 12, 10, 8, 7),
                    isLogical: true,
                },
                {
                    numberList: new NumberList(1, 1, 2, 2, 3, 3, 4, 4),
                    isLogical: true,
                },
                {
                    numberList: new NumberList(14, 7, 3, 2, 1, 1, 1, 3, 2, 3),
                    isLogical: false,
                },
                {
                    numberList: new NumberList(20, 21, 18, 16, 14, 11, 8, 7),
                    isLogical: false,
                },
                {
                    numberList: new NumberList(1, 2, 3, 4, 1),
                    isLogical: false,
                },
                {
                    numberList: new NumberList(10, 13, 19, 21, 18),
                    isLogical: false,
                },
            ];

            for (const dataSet of dataSets) {
                const value = dataSet.numberList.isLogical();
                expect(value).to.equal(dataSet.isLogical);
            }
        });
    });
});