const request = require('supertest')
const app = require('../index')
const db = require('../db')


beforeAll(async() =>await db.connect())
beforeEach(async() => await db.clear())
afterAll(async() => await db.close())
afterAll(async () => {
	await new Promise(resolve => setTimeout(() => resolve(), 5000)); // avoid jest open handle error
});

describe("POST /user",  () => {
  test("It should create a new user", (done) => {
     request(app)
    .post('/user')
    .send({username:'jewel'})
    .expect(200)
    .then(res => {
        expect(res.body.newUser.username).toBe("jewel")
        console.log(res.body)
         done()
      })
    .catch(err => done(err))
  })
})

describe("GET /user",() => {
  test("It should return all user", done => {
    request(app)
    .get('/user')
    .expect(200)
    .then(res => {
        console.log(res.body.allUser)
        done()
      })
    .catch(err => done(err))
  })
})
describe("GET /user/:name",() => {
  test("It should return a user by name", done => {
    request(app)
    .get('/user/:jewel')
    .expect(200)
    .then(res => {
        console.log(res.body)
        done()
      })
    .catch(err => done(err))
  })
})
