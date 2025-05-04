const products=[
{
    productId:1,
    name:"maruti suzuki",
    description:"car",
    price:200000,
    stock:2,
    category:["automatic","manual","GA"],
    tags:["car","fourwheeler","twowheeler"],
    discount:null,
    },

    {
    productId:2,
    name:"honda",
    description:"car",
    price:200000,
    stock:30,
    category:["automatic","manual","GA"],
    tags:["car","fourwheeler","twowheeler"],  
    discount:{ type:"percentage",value:22,}
    },
       
    {
     productId:3,
     name:"Toyota",
     description:"car",
     price:200000,
     stock:20,
      category:["automatic","manual","GA"],
     tags:["car","fourwheeler","twowheeler"],
     discount:{ type:"fixed",value:32,}
     },
     
     {
      productId:4,
      name:"BMW",
      description:"car",
      price:200000,
      stock:20,
      category:["automatic","manual","GA"],
      tags:["car","fourwheeler","twowheeler"],
      discount:null,
      }
   ];

   const displayProductDetails=(product)=>{
      console.log("Product details");
      for(const key in product){
     if(key!=="tags"){
      console.log(`${key}: ${product[key]}`);
   } else {
     console.log(`tags: ${product.tags.join(", ")}`);
   }
 }
};
   displayProductDetails();

   const filterProduct=products.filter((product)=>{
      return product.stock ===20;
    });
   console.log(filterProduct);

   const findProductById =(productId)=>{
      return products.find((product)=>product.productId===productId);
   };
      console.log("\n----Find product by Id(3)----\n");
      const product3=findProductById(3);
         if (product3) {
            displayProductDetails(product3);
         }else{
            console.log("---productId 3 not found");
         }
   // ------- discount function------;
const discountModule=(()=>{
   const applyDiscount=(product,discount) => {
   if(discount && discount.type==="percentage"){
     product.price-=product.price*(discount.value/100);
    } 
   else if (discount&& discount.type==="fixed"){
      product.price-=discount.value;
   }
   };
   return {
      applyDiscount: applyDiscount,
    };
  })();
  console.log("\n-----apply discount product(1)");
  const product1 = findProductById(1);
  discountModule.applyDiscount(product1,{type:"percentage",value:12});
 displayProductDetails(product1);

 const updateStock=(productID,quantity)=>{
const productToUpdate=findProductById(productID);
if(productToUpdate){
   productToUpdate.stock=quantity;
   console.log(`stock for product ${productID} updated to ${quantity}`);
}else{
   console.error(`product with id${productId} no found`);
}
 };
 console.log("\n----update stock----");
 updateStock(3,32);
 displayProductDetails(findProductById(3));

 const addTagtoProduct=(productId,tag)=>{
 const product=findProductById(productId)
   if(product){
   if(!product.tags.includes(tag)){
   product.tags.push(tag);
      console.log(`tags${tag} include the ${productId}`);
   }else{
   console.log(`tag${tag} already existed in${productId}`);
   }}
 else{
   console.log(`product with id${productId} not found`);
 }};
 console.log("\n---add tag productid (3)");
 addTagtoProduct(3,"New tag");
 addTagtoProduct(3,"New tag");
 displayProductDetails(findProductById(3));

 const removeProduct=(productId)=>{
const index=products.findIndex((p)=>p.productId===productId);
  if(index!== -1){
   products.splice(index,1);
   console.log(`product with Id ${productId} is Removed`);
  }
  else{
   console.log(`product with Id ${productId} not found`);
  }
 };
  console.log("\n----Remove products");
  removeProduct(3);
  console.log("after removing products");
  products.forEach((product) => displayProductDetails(product));

 const calclulateTotalValue=()=>{
let totalValue=0;
for( const product of products){
  totalValue=product.price*product.stock;
 }
 console.log(`total value${products}`);
};

console.log("\n----Totalvalue----");
calclulateTotalValue();