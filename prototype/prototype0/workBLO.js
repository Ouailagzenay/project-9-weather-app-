class WorkBLO{
    #_workList= []
    #_conter =  0 

    get workList(){
        return this.#_workList
    }
    addWork(work){
        this.#_conter += 1
        work.id = this.#_conter
       this.#_workList.push(work)    
    }}