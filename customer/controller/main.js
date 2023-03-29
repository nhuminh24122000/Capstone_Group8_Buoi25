// const listphoneStore = document.getElementById('phoneList');
// async function getdatafromAPI() {
    
//       const responseAPI = await fetch('https://6408811a8ee73db92e42a343.mockapi.io/PhoneStore_Group8');
//       const data = await responseAPI.json();
//       console.log('data: >>', data);
//       listphoneStore.innerHTML = '';
//       data.forEach(data => {
//         const divItem = document.createElement('div');
//         divItem.innerHTML = `
//         <div class="col-lg-3 col-md-6">
//         //           <div class="card text-black h-100">
//         //             <div class="card-wrapper">
//         //               <div class="content-overlay"></div>
//         //               <img src="${data.img} " class="card-img" alt="Phone Image">
//         //               <div class="content-details  ">
//         //                 <h3 style="color: white;" class="pb-5">Specifications</h3>
//         //                 <div class="d-flex justify-content-start py-1">
//         //                   <span class="text-light"><b>Screen:</b> ${data.screen}</span>
//         //                   <span class="text-light">&nbsp; </span>
//         //                 </div>
//         //                 <div class="d-flex justify-content-start py-1">
//         //                   <span class="text-light"><b>Back Camera:</b> ${data.backCamera}</span>
//         //                 </div>
//         //                 <div class="d-flex justify-content-start py-1">
//         //                   <span class="text-light"><b>Front Camera:</b>${data.frontCamera}</span>
//         //                 </div>
//         //                 <p style="color: white;" class="pt-5"><u>click here for more details</u></p>
//         //                 <button type="button" class="btn btn-warning w-50 btn-add-to-cart">Add to cart</button>
//         //               </div>
                      
//         //               <div class="card-body">
//         //                 <div class="text-center">
//         //                   <h5 class="card-title pt-3">aa</h5>
//         //                   <span class="text-muted mb-2">${data.price}$</span>
//         //                   <span class="text-danger"><s></s></span>
//         //                 </div>
//         //                 <div class="mt-3 brand-box text-center">
//         //                   <span>${data.type}</span>
//         //                 </div>
//         //                 <div class="d-flex justify-content-start pt-3">
//         //                   <span><b>Description:</b> ${data.desc}</span>
//         //                 </div>
//         //                 <div class="d-flex justify-content-between pt-3">
//         //                   <div class="text-warning">
//         //                     <i class="fa-solid fa-star"></i>
//         //                     <i class="fa-solid fa-star"></i>
//         //                     <i class="fa-solid fa-star"></i>
//         //                     <i class="fa-solid fa-star"></i>
//         //                     <i class="fa-solid fa-star"></i>
//         //                   </div>
//         //                   <span class="text-success"><b>In Stock</b></span>
//         //                 </div>
                        
//         //               </div>
//         //             </div>
//         //           </div>
//         //         </div>
//         `
//         listphoneStore.appendChild(divItem);
//       });
// }
// getdatafromAPI();
  
