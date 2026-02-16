
const LoadAllProducts = async () => {
  const product = await fetch("https://fakestoreapi.com/products");
  const data = await product.json();
  showProduct(data);
  showTrending(data)
};

const showProduct = (data) => {

    
  const container = document.getElementById("productContainer");
    if (!container) return; 
  container.innerHTML = "";

  data.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class=' rounded-md border-1 border-gray-400 h-[450px]'>

        <div class='bg-gray-100 p-3'>
        <img class="h-50  mx-auto" src="${item.image}">
        </div>
        

     <div class='p-3 space-y-3'>
       <div class="flex justify-between">
            <h1 class='text-blue-400 bg-blue-100 rounded-lg p-1'>${item.category}</h1>
            <h1><span><i class="fa-solid fa-star text-yellow-600"></i></span>${item.rating.rate} <span>(${item.rating.count})</span></h1>
        </div>

        <h1>${item.title}</h1>
        <h1 class='text-lg font-extrabold'>$${item.price}</h1>
        <div class='flex justify-center gap-10'>
            <button onclick="showDetails(${item.id})" class='p-1 border-1 border-gray-400 rounded-lg '><span><i class="fa-solid fa-eye mx-2"></i></span>details</button> 
            <button class='p-1 border-1 bg-blue-400 border-gray-400 rounded-lg '><span><i class="fa-solid fa-cart-arrow-down mx-2"></i></span>Add</button> 
            
        </div>
     </div>
       </div>
    
    `;
    container.append(div);
  });

};

const showTrending=(data)=>{
  
    const topThree = [...data]
  .sort((a, b) => b.rating.rate - a.rating.rate)
  .slice(0, 3);
    const tredingContainer = document.getElementById("tredingContainer");
    if (!tredingContainer) return; 
  tredingContainer.innerHTML = "";

  topThree.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <div class=' rounded-md border-1 border-gray-400 h-[450px]'>

        <div class='bg-gray-100 p-3'>
        <img class="h-50  mx-auto" src="${item.image}">
        </div>
        

     <div class='p-3 space-y-3'>
       <div class="flex justify-between">
            <h1 class='text-blue-400 bg-blue-100 rounded-lg p-1'>${item.category}</h1>
            <h1><span><i class="fa-solid fa-star text-yellow-600"></i></span>${item.rating.rate} <span>(${item.rating.count})</span></h1>
        </div>

        <h1>${item.title}</h1>
        <h1 class='text-lg font-extrabold'>$${item.price}</h1>
        <div class='flex justify-center gap-10'>
            <button   class='p-1 border-1 border-gray-400 rounded-lg '><span><i class="fa-solid fa-eye mx-2"></i></span>details</button> 
            <button class='p-1 border-1 bg-blue-400 border-gray-400 rounded-lg '><span><i class="fa-solid fa-cart-arrow-down mx-2"></i></span>Add</button> 
            
        </div>
     </div>
       </div>
    
    `;
    tredingContainer.append(div);
  });

}

const showDetails =async(id)=>{
  const url = `https://fakestoreapi.com/products/${id}`

  const data =await fetch(url)
  const details =await data.json()


  showproductDetails(details)
}

const showproductDetails = (data)=>{
   const deatilsBox = document.getElementById("detailsContainer")
   deatilsBox.innerHTML=""
  

   console.log(data)
 
   document.getElementById("my_modal_5").showModal()

   const div = document.createElement("div")

   div.innerHTML = `
    <div class='space-y-5'>
     <h1 class='text-lg font-bold'>${data.title}</h1>
     <p >${data.description}</p>
     <div class="flex justify-center gap-5">
        <p class='text-green-800'>Price:${data.price}</p>
           <p class='text-yellow-800'>Rating:${data.rating.rate}</p>
     </div>
     <div class='flex justify-center gap-10'>
            <button   class='p-1 border-1 border-gray-400 rounded-lg '><span><i class="fa-solid fa-eye mx-2"></i></span>Buy Now</button> 
            <button class='p-1 border-1 bg-blue-400 border-gray-400 rounded-lg '><span><i class="fa-solid fa-cart-arrow-down mx-2"></i></span>Cart</button> 
            
        </div>
    </div>
   `
   deatilsBox.append(div)


}


LoadAllProducts()