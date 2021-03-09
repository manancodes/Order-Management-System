const initialState={
    sidebar:[{id:Math.random()*100,Sale_Order:"Sale Order"},{id:Math.random()*100,Purchase_Order:"Purchase Order"},{id:Math.random()*100,Summary:"Summary"},{id:Math.random()*100,Sighn_out:"Sign Out"}],
    userInfo:{id: Math.random()*10,email:"Jones@gmail.com",name:"Jones Fernandes",password:"123456"},
    order:[{id:Math.random()*1000,Sale_Order:"Sale Order"},{id:Math.random()*1000,Purchase_Order:"Purchase Order"},{id:Math.random()*1000,Order_Summary:"Order Summary"}],
    itemList:[{id:Math.random()*10000,itemName:"iPhone 11 Pro Max", Ordered:32, InStock:21},{id:Math.random()*10000,itemName:"Oneplus 8T", Ordered:12, InStock:1},{id:Math.random()*10000,itemName:"iwatch", Ordered:27, InStock:21,}], //Doubt related to needed
    // Organisation:[{id:Math.random()*1000,company:["Select","Apple","Oneplus","Nokia","Samsung"]},
    // {id:Math.random()*1000,company:["Select","Apple","Oneplus","Nokia","Samsung"] },
    // {id:Math.random()*1000,company:["Select","Apple","Oneplus","Nokia","Samsung"]}],
    Organisation:[{id:Math.random()*1000,},
    {id:Math.random()*1000 },
    {id:Math.random()*1000}],
    
    //
    // Organisation:[{id:Math.random()*1000,company:["Apple","Oneplus"] },
    // {id:Math.random()*1000,company:["Apple","Oneplus"]}],
    // vendor:[{id:Math.random()*1000, firm:["Apple","OnePlus"],Apple:["Iphone 12 Pro Max","Iphone 12 Pro","Iphone 12","Iphone 12 Mini"],
    // Oneplus:["OnePlus Nord 5G","OnePlus 5","OnePlus 6","OnePlus 7T"],
    // Nokia:["Nokia 255 4G","Nokia 215 4G","Nokia C3","Nokia 701"],
    // Samsung:["Samsung Galaxy M21","Samsung Galaxy M31","Samsung Galaxy M51","Samsung Galaxy S20"]}],
    

//The Two Rows
    vendor:[
        {id:Math.random()*100000,Ordered:11,Apple:["Iphone 12 Pro Max","Iphone 12 Pro","Iphone 12","Iphone 12 Mini"],
    Oneplus:["OnePlus Nord 5G","OnePlus 5","OnePlus 6","OnePlus 7T"],
    Nokia:["Nokia 255 4G","Nokia 215 4G","Nokia C3","Nokia 701"],
    Samsung:["Samsung Galaxy M21","Samsung Galaxy M31","Samsung Galaxy M51","Samsung Galaxy S20"],test:[]},


    {id:Math.random()*100000,Ordered:11,Apple:["Iphone 12 Pro Max","Iphone 12 Pro","Iphone 12","Iphone 12 Mini"],
    Oneplus:["OnePlus Nord 5G","OnePlus 5","OnePlus 6","OnePlus 7T"],
    Nokia:["Nokia 255 4G","Nokia 215 4G","Nokia C3","Nokia 701"],
    Samsung:["Samsung Galaxy M21","Samsung Galaxy M31","Samsung Galaxy M51","Samsung Galaxy S20"],test:[]}],

// The First List Valuse displayed from here
com:[
    {id:Math.random()*10000000, value:"Select"},
{id:Math.random()*10000000, value:"Apple",},
{id:Math.random()*10000000, value:"Oneplus"},{id:Math.random()*10000000, value:"Nokia"},
{id:Math.random()*10000000, value:"Samsung"}],

    summary:[{id:Math.random()*1000000,Order_No:"F102",Customer_Name:"Ankush Kumar",Order_Detail:"iPhone 11 Pro Max",phone:9865342712,Add:"ABC Square,New york",status:"Shipped"},
    {id:Math.random()*1000000,Order_No:"F550",Customer_Name:"Aahish Kumar",Order_Detail:"iPhone 11 ",phone:9849282712,Add:"ABCZ square,Frankfurt",status:"Pending"},
    {id:Math.random()*1000000,Order_No:"F9908",Customer_Name:"Roberto Fermino",Order_Detail:"OnePlus 7T",phone:1265942712,Add:"AopC Square,Toronto",status:"Delivered"},
    {id:Math.random()*1000000,Order_No:"F776",Customer_Name:"Virjil Van dijk",Order_Detail:"iPhone 11 Pro ",phone:1111342712,Add:" Square,Japan",status:"Cancelled"}
],
Apple:["Iphone 12 Pro Max","Iphone 12 Pro","Iphone 12","Iphone 12 Mini"],
    Oneplus:["OnePlus Nord 5G","OnePlus 5","OnePlus 6","OnePlus 7T"],
    Nokia:["Nokia 255 4G","Nokia 215 4G","Nokia C3","Nokia 701"],
    Samsung:["Samsung Galaxy M21","Samsung Galaxy M31","Samsung Galaxy M51","Samsung Galaxy S20"],
}
const reducer=(state=initialState,action)=>{
    if(action.type==="Add"){
        var xyz=[...state.vendor]
        xyz.push({id:Math.random()*100000,Ordered:11,Apple:["Iphone 12 Pro Max","Iphone 12 Pro","Iphone 12","Iphone 12 Mini"],
        Oneplus:["OnePlus Nord 5G","OnePlus 5","OnePlus 6","OnePlus 7T"],
        Nokia:["Nokia 255 4G","Nokia 215 4G","Nokia C3","Nokia 701"],
        Samsung:["Samsung Galaxy M21","Samsung Galaxy M31","Samsung Galaxy M51","Samsung Galaxy S20"],})
        return {
            ...state,
            vendor:xyz
            }
        }
    else if(action.type==="Remove"){
        
        return{
            ...state,
            vendor:state.vendor.pop()
                
        }
    }


    else if(action.type==="List"){
        var name=action.value;
        switch(name){
            case "Apple": console.log("Working a")
                    var arr=[]
                    state.Apple.map((value)=>{
                          arr.push(value);    
                    })
                   
                  break;
            case "Oneplus":console.log("Working b");
                console.log("Working OnePlus");
                arr=[]
                  state.Oneplus.map((value,i)=>{
                        arr.push(value);   
                  })
                  break;
            case "Nokia":console.log("Working c");
           
             arr=[]
              state.Nokia.map((value)=>{
                    arr.push(value);
              })
              break;
            case "Samsung": console.log("Working c");
            
             arr=[]
              state.Samsung.map((value)=>{
                    arr.push(value); 
              })
              break;
              default: console.log("Wrong Choice")
              break;
        }
        return{
            ...state,
            
        }
    }
    return state
}
export default reducer;