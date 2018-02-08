export class SvgGenerator {

    static generate(student) {

        let noteBars = '';
        let noteIndex = 0;

        const noteCount = Object.keys(student.notes).length;
        const totalBarWidth = 460 / noteCount;
        const barWidth = totalBarWidth * .8;
        const barGutter = totalBarWidth * .1;

        for(const subject in student.notes) {
            const x = 10 + noteIndex * totalBarWidth + barGutter;
            const height = 300 * student.notes[subject] / 20;
            const y = 10 + 300 - height;
            const fillColor = student.notes[subject] >= 10 ? 'forestgreen' : 'tomato';
            noteBars += `
            <rect class="note" data-subject="${subject}" data-note="${student.notes[subject]}" x="${x}" y="${y}" width="${barWidth}" height="${height}" fill="${fillColor}"></rect>   
            `;
            noteIndex++;
        }

        return `
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 480 320" width="960">
      <rect x="10" y="10" width="460" height="300" style="fill: #eee; stroke: #333; stroke-width: 2"></rect>
      <line x1="10" x2="470" y1="85" y2="85" stroke="#777"></line>  
      <line x1="10" x2="470" y1="160" y2="160" stroke="#333"></line>  
      <line x1="10" x2="470" y1="235" y2="235" stroke="#777"></line>  
      <g class="bars">${noteBars}</g>
</svg>`;
    }
}