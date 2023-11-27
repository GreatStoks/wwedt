export function addNoiseToImage(src, strong) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous'; // Разрешает загрузку изображения с другого домена
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const pixels = imageData.data;
            const alpha1 = 1 - strong;
            let r, g, b;

            for (let i = 0, il = pixels.length; i < il; i += 4) {
                const color = Math.random() * 255;

                r = pixels[i] * color / 255;
                g = pixels[i + 1] * color / 255;
                b = pixels[i + 2] * color / 255;

                pixels[i] = r * strong + pixels[i] * alpha1;
                pixels[i + 1] = g * strong + pixels[i + 1] * alpha1;
                pixels[i + 2] = b * strong + pixels[i + 2] * alpha1;
            }

            ctx.putImageData(imageData, 0, 0);
            const resultImage = canvas.toDataURL("image/jpeg"); // Изменяем формат на image/jpeg

            resolve(resultImage);
        };
    img.onerror = reject;
    img.src = src;
    });
}