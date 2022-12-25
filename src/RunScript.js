/**
 *
 * @param {string[]} commands
 * @param {any[][]} inputs
 * @param {any} classes
 * @returns {any[]}
 */
function run(commands, inputs, classes) {
    if (inputs.some((v) => v && !Array.isArray(v))) {
        throw Error(
            "If the `inputs` parameter is not an array, it will transform to an empty array"
        );
    }
    if (!classes) classes = [];
    if (!Array.isArray(classes)) classes = [classes];
    const classNames = classes.map((v) => v.name);
    let preObj = null;
    const res = commands.map((v, i) => {
        const input = Array.isArray(inputs[i]) ? inputs[i] : [];
        const index = classNames.indexOf(v);
        if (i === 0) {
            const constructor = index > -1 ? classes[index] : classes[0];
            preObj = new constructor(...input);
            return null;
        } else {
            const res = preObj[v].apply(preObj, input);
            if (res === undefined) return null;
            return res;
        }
    });
    return res;
}

module.exports = run;
