export default async () => {
    const cookie = await chrome.cookies.get(
        {
            url: 'http://localhost:3001',
            name: 'x-auth-token'
        })
    
    return cookie?.value;
}