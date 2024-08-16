{
    const text_items = document.getElementsByClassName('rainbowtext');
    const border_items = document.getElementById('main')?.children;

    const s = 1;
    let rgb = [0, 0, 0];
    let frames = 0;

    let oldtime = Date.now();

    const cycle_text = () => {
        for (let i in rgb) {
            rgb[i] = ((Math.sin(frames*s-i*2*Math.PI/3) + 1) * (255/2)) | 0;
        }
        frames += (Date.now()-oldtime)/500;

        for (let item of text_items) {
            item.style.color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
            for (let child of item.children) {
                if (child.tagName === 'HR') {
                    child.style.color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
                }
            }
        }
        if (border_items) for (let item of border_items) {
            item.style.border = `5px rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}) solid`;
        }

        oldtime = Date.now();

        requestAnimationFrame(cycle_text);
    }
    cycle_text()
}
