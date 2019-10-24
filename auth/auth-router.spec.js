const Auth = require('./auth-model.js');
const db = require('../database/dbConfig.js');

it('should set testing environment', () => {
    // console.log(process.env.DB_ENV);
    expect(process.env.DB_ENV).toBe("testing");
});

describe('users model', () => {
    
    beforeEach(async () => {
        await db('users').truncate();  
    })

  describe('add()', () => {
    it('should add user to database', async () => {
      // check that we add new record
      let user = await Auth.add({username: "user777", password: "pas777"});

      let foundUser = await Auth.findById(user.id);
      expect(foundUser.username).toBe("user777");
    
      // check we now have one record in the table
      const users = await db('users');
      expect(users).toHaveLength(1);
    });
  });

  describe('add() duplicate', () => {
    it('check dublicates', async () => {
      // trying to add the same user
      await Auth.add({username: "user777", password: "pas777"});
    
      // check that we still have one user
      const users = await db('users');
      expect(users).toHaveLength(1);
    });
  });
  
});

describe('add() after duplicate', () => {

    it('check Non duplicates', async () => {
        // add different user with the same pass
        await Auth.add({username: "user888", password: "pas777"});
      
        // check that we have two users
        const users = await db('users');
        expect(users).toHaveLength(2);
      });
  });