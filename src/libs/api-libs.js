// versi paling mudah
// export const getAnimeResponse = async (resource, query) => {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
//     const anime = await response.json();
//     return anime
// }

// versi menggunakan try and catch agar lebih amana
export const getAnimeResponse = async (resource, query) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
        
        // Memeriksa apakah responsnya OK (status 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const anime = await response.json();
        return anime;
    } catch (error) {
        // Menangani error yang terjadi selama fetch atau parsing
        console.error("Error fetching anime data:", error);
        throw error;  // Melempar kembali error agar bisa ditangani di tempat lain
    }
}
export const getNestedAnimeResponse = async (resource, objectProperty) => {
    const response = await getAnimeResponse(resource);
    return response.data.flatMap(item => item[objectProperty]);
} 

// function to generate random number
export const produceNumber = (data, gapData) => {
    const firstNumber = ~~(Math.random() * (data.length - gapData));
    const lastNumber = firstNumber + gapData;

    const response = {data: data.slice(firstNumber, lastNumber)};
    return response

    console.log({firstNumber, lastNumber});
}