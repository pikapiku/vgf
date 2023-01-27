const { userCreate,  userDelete, userAdd, userLeave } = require('../user.js');
const {SHE, HE, ANY, MATCHING, INQUEUE, IDLE} = require('../globals') 

const {showUsers, showInQueue, showMatching} = require('../showTests')

describe('Show User tests', () => {
    test('testing correct input', () => {
        const user = userCreate('mixa#0007', 'misa#bot', SHE, HE, 'lf carry in gold')
        const res = showUsers();
        expect(res).toStrictEqual(
            expect.objectContaining({
                authUserId: user.authUserId,
                connections: { 
                    discordId: 'mixa#0007',
                    riotId: 'misa#bot'
                },
                pronouns: SHE,
                choice: HE,
                description: 'lf carry in gold',
                status: IDLE
            })
        )
    })
})

describe('Show InQueue tests', () => {
    test('testing correct input', () => {
        const user = userCreate('mixa#0007', 'misa#bot', SHE, HE, 'lf carry in gold')
        userAdd(user.authUserId);
        const res = showInQueue();
        // expect actual and expected array values are equivalent
        expect([user.authUserId]).toEqual(expect.arrayContaining(res));
        expect(res).toEqual(expect.arrayContaining([user.authUserId]));

    })
})

