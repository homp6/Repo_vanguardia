const axios = require('axios');
const getAllEstudiantes = async(request,response)=>{
    response.status(200).json({
        'status':200,
        message:"Hello from server"
    })
}

const headers = {
    'Accept': 'application/json',
    'Authorization': `Bearer ${process.env.API_LOR}`
  }

  const fetchData = async (req, res) => {
    const rawQuotes = await axios('https://the-one-api.dev/v2/movie', {
      headers: headers
    })
    // console.log(rawQuotes.data.docs);
    res.status(200).json({
        status:200,
        data: rawQuotes.data.docs
    })
  };

module.exports = {getAllEstudiantes,fetchData};