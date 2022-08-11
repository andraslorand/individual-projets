(()=>{
    const canvas = document.getElementById('.background');
    const context = canvas.getContext('2d');
    
    const width = window.innerWidth;
    const height = window.innerHeight;

   

    canvas.width = width;
    canvas.height = height;

    const drawBackground = () => {
        const background = context.createLinearGradient(0, 0, 0, height);
        background.addColorStop(0, '#000B27');
        background.addColorStop(1, '#6C2484');
    
        context.fillStyle = background;
        context.fillRect(0, 0, width, height);
    };

    const drawForeground = () => {
        context.fillStyle = '#0C1D2D';
        context.fillRect(0, height * .95, width, height);
    
        context.fillStyle = '#182746';
        context.fillRect(0, height * .955, width, height);
    };
})()

