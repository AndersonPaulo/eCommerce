class Share{

static async compartilhar(){
    if(navigator.share){
        try{
            await navigator.share({
                title:'Frango Amigo ',
                text:'O melhor da zona Oeste',
                url: window.location.href
            })
        }catch(error){
            console.error(error)

        }
        
    }
}
}

export default Share