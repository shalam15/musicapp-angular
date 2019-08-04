export class Music{
    constructor(
        public id:number,
        public author:string,
        public title:string,
        public isExplicit:Boolean,
        public genre:any,
        public lyrics:string,
        public dateCreated:Date,
        public image?:any,
        public musicFile?:any,
        
    ){}
    
    
}
