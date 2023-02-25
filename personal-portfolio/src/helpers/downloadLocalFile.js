import axios from "axios";

export async function downloadLocalFile(fileName) {
  try {
    const response = await axios.get('documents/' + fileName, { responseType: 'blob' });
    const url = URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
  } catch (error) {
    console.log(error);
  }
}
