export class Client {
    constructor ({id, name, email, birthday}) {
        if (!id || !name || !email || !birthday) {
            throw new Error ('All fields are required');
        }

        this.name= name;
        this.id=id;
        this.email=email;
        this.birthday=new Date(birthday).toISOString;
    }
}