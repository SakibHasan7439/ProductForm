
//Parent function to Add new Form
function parentFunction() {

    let x = document.querySelector(".items-container");
    let htmlTemplate = document.querySelector(".hidden-template.hidden").cloneNode(true);

    console.log({ cls: htmlTemplate.classList })
    htmlTemplate.classList.remove("hidden")
    htmlTemplate.classList = "html-form hidden-template visible";
    x.appendChild(htmlTemplate)
}

//Submit function to submit new forms values
function submit() {

    //store buyers Informations
    const store = {};
    store.buyerName = document.querySelector(".empty-form .buyer-name").value;
    store.phoneNumber = document.querySelector(".empty-form .phone-number").value;
    store.countryName = document.querySelector(".country-name").value;
    console.log(store);


    //stores products Information
    const allItems = document.querySelectorAll(".hidden-template.visible");
    const allItemsData = [];
    allItems.forEach((item) => {
        const itemValues = {};
        itemValues.name = item.querySelector(".name").value;
        itemValues.desc = item.querySelector(".descrip").value;
        itemValues.qty = item.querySelector(".quant").value;
        itemValues.rate = item.querySelector(".rate").value;
        itemValues.amount = item.querySelector(".amount").value;

        //push all value of itemValues in a empty array call allItemsData 
        allItemsData.push(itemValues)

    })

    store.allItemsData = allItemsData;
    console.log(store);

    let resultDiv = document.querySelector(".result");
    resultDiv.textContent = JSON.stringify(store," ",2);
}

function reset() {
    let childElement = document.querySelector(".form-border");
    let parent = childElement.parentNode;
    parent.remove(parent);

}




