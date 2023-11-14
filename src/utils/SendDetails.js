// Send Details from Form
const sendDetails = async (url, content) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content)
    };
    const response = await fetch(url, requestOptions);
    return response.status;
  } catch (error) {
    console.error(error);
  }
};

export default sendDetails;
