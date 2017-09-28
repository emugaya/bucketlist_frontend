export class User {
    username: string;
    password: string;
}

export class Bucketlist {
    name: string;
    created_by: number;
}

export class Item {
    name: string;
    done: boolean;
    bucketlist_id: number;
}
