function rainbow_text() {
    const title = document.getElementById('title');
    const main_panels = document.getElementById('main')?.children;

    const s = 1;
    const whiteness = 100;
    let rgb = [0, 0, 0];
    let frames = 0;

    let oldtime = Date.now();

    function cycle_text() {
        for (let i in rgb) {
            rgb[i] = ((Math.sin(frames*s-i*2*Math.PI/3) + 1) * (255/2)) | 0;
        }
        frames += (Date.now()-oldtime)/500;

        title.style.color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
        if (main_panels) for (let panel of main_panels) {
            panel.style.border = `5px rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}) solid`;
        }

        oldtime = Date.now();

        requestAnimationFrame(cycle_text);
    }
    cycle_text()
}
rainbow_text();