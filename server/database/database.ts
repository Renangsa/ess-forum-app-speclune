import { User } from "../src/user";

var fs = require("fs");

export class DBService {
    name: string;
    path: string;
    data: any;

    constructor(name: string) {
        this.name = name;
        this.path = __dirname + '/files/' + name + '.json';
        this.read();
    }

    read() {
        this.data = JSON.parse(
            fs.readFileSync(this.path, "utf8", (err: any) => {
                if (err) throw err;
            })
        );
    }

    write() {
        fs.writeFileSync(this.path, JSON.stringify(this.data), (err: any) => {
            if (err) throw err;
        });
    }

    getData() {
        return this.data[this.name];
    }

    add(data: any) {
        this.data[this.name].push(data);
        this.write();
    }

    delete(id: number) {
        var indice:number = -1;
        const users:User[] = this.getData()
        const userDelete = users.find((value:User,index:number)=>{
            if(value.id === id){
                indice = index;
            }
        });

        this.data[this.name].splice(indice,1);
        
        this.write();
    }

    update(index: any, item: any) {
        this.data[this.name].splice(index, 1, item);
        this.write();
    }
}

exports.DBService = DBService;