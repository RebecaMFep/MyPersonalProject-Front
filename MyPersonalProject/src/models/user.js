export default class User{ 

    id
    name 
    password
    
    constructor(id, name, password) {
        this.id = id
        this.name = name
        this.password = password;
    }
    getId() {
        return this.id
    }
    
    getName() {
        return this.name
    }
    getPassword() {
        return this.password
    }
    }