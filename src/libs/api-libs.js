export const getAnimeResponse = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
    const anime = await response.json();
    return anime
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