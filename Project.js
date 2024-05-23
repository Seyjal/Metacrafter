var NFT_holder=[];

function mintNFT(NFT_name, NFT_haircolor, NFT_year, NFT_origin,NFT_id){
    var NFT = {
        name:NFT_name,
        haircolor:NFT_haircolor,
        year:NFT_year,
        origin:NFT_origin,
        id:NFT_id
    }
    NFT_holder.push(NFT);
}

function listNFTs(){
    console.log("\nListing all the NFT's...");
    console.log("----------------------------------------------------------------------------------");
    for(let i=0; i<NFT_holder.length; i++){
        console.log("\nNFT ID: " + NFT_holder[i].id);
        console.log("Name: " + NFT_holder[i].name);
        console.log("Year: " + NFT_holder[i].year);
        console.log("Hair Color: " + NFT_holder[i].haircolor);
        console.log("Origin: " + NFT_holder[i].origin + "\n");
    }
    console.log("----------------------------------------------------------------------------------");
}

function getTotalSupply(){
    console.log("\nTotal Supply: " + NFT_holder.length + "\n");
}

mintNFT("maria", "Blonde", 2024, "Metaverse", 1);
mintNFT("sussane green ", "Pink", 2023, "Cyber City", 2);
mintNFT("dark fudge", "Gray", 2018, "The BlockChain", 3);

listNFTs();

getTotalSupply();