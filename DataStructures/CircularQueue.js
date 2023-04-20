/*
empty use block can use for new items
clock 
streaming data
Traffic lights


enqueue(element) -add element
dequeue()-remove oldest element
isFull()
isEmpty()
peek() -get the value of the element at the front of the queue without removing it
size() 
print()

*/
class CircularQueue
{
    constructor(capacity)
    {
        this.items=new Array(capacity)    //fixed array
        this.capacity=capacity
        this.CurrentLength=0
        this.front=-1  //not pointing any position
        this.rear=-1   //not pointing any position
    }
    isFull()
    {
        return this.CurrentLength===this.capacity
    }
    enqueue(element)
    {
        if(!this.isFull())
        {
               this.rear=(this.rear+1)%this.capacity
               this.items[this.rear]=element
               this.CurrentLength+=1
               if(this.front===-1)
               {
                    this.front=this.rear
               } 
        }
     }
    dequeue()
    {
        if(this.isEmpty()){
            return null
        }
        const item=this.items[this.front]        
        this.items[this.front]=null
        this.front=(this.front+1) % this.capacity
        this.CurrentLength-=1
        if(this.isEmpty()){
            this.front=-1
            this.rear=-1
        }
       return item
    }
    peek()
    {
        if(!this.isEmpty())
        {
            return this.items[this.front]
        }
        return null
    }
    isEmpty()
    {
        return this.CurrentLength===0
    }
    size()
    {
        return this.CurrentLength
    }
    print()
    {
        if(this.isEmpty())
        {
            console.log('Queue is empty')
        }else
        {
            let i
            let str=''
            for(i=this.front;i!==this.rear;i=(i+1)% this.capacity)
            {
                str+=this.items[i]+" "
            }
            str+=this.items[i]
            console.log(str)
        }
    }

}
const queue=new CircularQueue(5)
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
console.log(queue.isFull())
queue.print()
queue.dequeue()
console.log(queue.peek())
queue.print()
queue.enqueue(60)
queue.print()
