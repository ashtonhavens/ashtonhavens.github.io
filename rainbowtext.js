{
    const text_items = document.getElementsByClassName('rainbowtext');
    const border_items = [...document.getElementsByTagName('main')[0]?.children, ...document.getElementsByClassName('rainbowborder')];
    const svg_items = [document.getElementById('signature')];

    const s = 1;
    let rgb = [0, 0, 0];
    //let frames = 0;

    //let oldtime = Date.now();

    const tau = 2*Math.PI;

    const cycle_text = () => {
        let time_mult = Date.now()/400 % tau;

        for (let i in rgb) {
            rgb[i] = ((Math.sin(time_mult - i*tau/3) + 1) * (255/2)) | 0;
        }
        //frames += (Date.now()-oldtime)/500;

        for (let item of text_items) {
            item.style.color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
            for (let child of item.children) {
                if (child.tagName === 'HR') {
                    child.style.color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
                }
            }
        }
        if (border_items) for (let item of border_items) {
            item.style.borderColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
        }
        for (let svg of svg_items) {
            for (let path of svg.getElementsByTagName('path')) {
                path.style.fill = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
            }
        }

        //oldtime = Date.now();

        requestAnimationFrame(cycle_text);
    }
    cycle_text()
}
