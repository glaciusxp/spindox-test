export interface UserModel {
    name: {
        first: string,
        last: string,
        title: string
    };
    login: {
        username: string,
        password: string
    };
    location: {
        street: {
            name: string;
            number: number;
        }
    };
    dob: {
        age: number;
        date: Date;
    }
    phone: string;
    email: string;
    picture: {
        large: string;
    }
}