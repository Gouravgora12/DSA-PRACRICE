class linkList{
    constructor(data){
        this.head={
                value:data,
                next:null
        }
        this.tail= this.head
        this.length= 1

    }
    addNode(data){
         let newNode={
             value:data,
             next:null
         }
         this.tail.next=newNode
         this.tail= newNode
         this.length++
     }
     prepend(data){
      let newNode={
          value: data,
          next:null
      }
      newNode.next= this.head
      this.head= newNode

     }
    traverse(position){
       let currentPoisition=0
       let currentNode= this.head
       while(currentPoisition!=position){

        currentPoisition++
        currentNode=currentNode.next
       }
       return currentNode
   }

   insert(data, position){
       let newNode={
           value: data,
           next:null
       }
       let positionNode= this.traverse(position)
       let nextNode= positionNode.next
       positionNode.next= newNode
       newNode.next= nextNode
   }

}
let myList= new linkList(4)
myList.addNode(10)
myList.addNode(15)
myList.addNode(19)
myList.addNode(21)
myList.prepend(2)
myList.insert(66, 3)
console.log( JSON.stringify( myList));
