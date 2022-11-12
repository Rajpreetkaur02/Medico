import { useState } from 'react'
import { create } from 'ipfs-http-client'
import axios from 'axios';

function CheckingIPFS() {

const REACT_APP_PINATA_API_KEY = "112d6c6e26c39793f8bc" ;
const REACT_APP_PINATA_API_SECRET= "d8f804e15036c267e64429aa858ba2bf3b5433bc34d347f44afebcc5274db01e" ;

  const [fileImg, setFileImg] = useState(null);
 
  const sendFileToIPFS = async (e) => {
    e.preventDefault()
    if (fileImg) {
        try {

            const formData = new FormData();
            formData.append("file", fileImg);

            console.log(formData) ;

            const resFile = await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                data: formData,
                headers: {
                    'pinata_api_key': `${REACT_APP_PINATA_API_KEY}`,
                    'pinata_secret_api_key': `${REACT_APP_PINATA_API_SECRET}`,
                    "Content-Type": "multipart/form-data"
                },
            });

            const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
         console.log(ImgHash); 
        } catch (error) {
            console.log("Error sending File to IPFS: ")
            console.log(error)
        }
    }}

    return(
      <form onSubmit={sendFileToIPFS}>
        <h1>adufhlakhfclad</h1>
      <input type="file" onChange={(e) =>setFileImg(e.target.files[0])} required />
      <button type='submit' >Mint NFT</button>            
      </form>
      );
}

export default CheckingIPFS
