const { userCreate,  userDelete, userAdd, userLeave } = require('../user.js');
const {SHE, HE, ANY, MATCHING, INQUEUE, IDLE} = require('../globals') 

describe('User Create tests', () => {
    test('testing correct input', () => {
        const user = userCreate('mixa#0007', 'misa#bot', SHE, HE, 'lf carry in gold')
        expect(user).toStrictEqual(
            expect.objectContaining({
                authUserId: expect.any(Number)
            })
        );
    })
})


describe('User Delete tests', () => {
    test('testing correct input', () => {
        const user = userCreate('mixa#0007', 'misa#bot', SHE, HE, 'lf carry in gold')
        const res = userDelete(user.authUserId);

        expect(res).toStrictEqual({});
    })
})


describe('User Add tests', () => {
    test('testing correct input', () => {
        const user = userCreate('mixa#0007', 'misa#bot', SHE, HE, 'lf carry in gold')
        const res = userAdd(user.authUserId);
        expect(res).toStrictEqual({});
    })
})

describe('User Leave tests', () => {
    test('testing correct input', () => {
        const user = userCreate('mixa#0007', 'misa#bot', SHE, HE, 'lf carry in gold')
        userAdd(user.authUserId);
        const res = userLeave(user.authUserId);
        expect(res).toStrictEqual({});
    })
})




