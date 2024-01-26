export const getService = async () => {

    const response = await fetch("http://localhost:5000/api/v1/services")
        .then((res) => res.json());

    if (!response.success) {
        throw new Error('Network response was not ok')
    }

    return response

}