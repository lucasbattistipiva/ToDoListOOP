let id = 0;

class Task{

    constructor(name){
        this.id = id++;
        this.name = name ;
        this.completed = false;
    }

    alterConclusion(){
        this.completed = !this.completed;
    }
}