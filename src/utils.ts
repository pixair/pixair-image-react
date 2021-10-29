export const getImageSize = (base64: string) => new Promise<{ width: number, height: number }>((resolve) => {
    let img = new Image()
    img.src = base64
    img.onload = () => {
        resolve({
            width: img.width,
            height: img.height
        })
    }
})
