const Users = require("./Users")
// @ponicode
describe("Users.fetchUsers", () => {
    test("0", () => {
        let callFunction = () => {
            Users.fetchUsers()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Users.fetchUsersSuccess", () => {
    test("0", () => {
        let callFunction = () => {
            Users.fetchUsersSuccess(123)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Users.fetchUsersSuccess("user_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Users.fetchUsersSuccess("user-name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Users.fetchUsersSuccess("user123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Users.fetchUsersSuccess("username")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Users.fetchUsersSuccess(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Users.selectUser", () => {
    test("0", () => {
        let callFunction = () => {
            Users.selectUser("user name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            Users.selectUser("username")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            Users.selectUser("user123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            Users.selectUser(123)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            Users.selectUser("user_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            Users.selectUser(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
