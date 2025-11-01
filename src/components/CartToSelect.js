let quantity = 0

class  CartSlect {
 
   
     //constructor(){

       //  this.itens = [] // Lista de produtos no carrinho
     //}
    
    AddUpdateOrQuantity(id, amount ,name,price){

        
        //const itemExistente = this.itens.find(item => item.id === id)

        //if (itemExistente){
            //item.id === id ? { ...item, quantity: Math.max(1, Math.min(9, item.quantity + amount)) } : item
            //this.itens = this.itens.map(item =>

            let item = (quantity + amount - 1) % 9 + 1 
            quantity = item

               //quantity += item
               
           //)
            
       // }
        //  else{

        //      this.itens.push({
        //          id,
        //          name,
        //          price,
        //          quantity:1 //novo item
        //      })
             //console.log(this.item.quantity)
         //}     
        

    }

     getItens(){

        let value = quantity
        return value
        
     }
    
    
   
  
}
export default CartSlect