import { ethers } from "ethers";

function delay(delayTimes) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(2);
        }, delayTimes);
    });
}

function toBigNum(value, d = 18) {
    return ethers.utils.parseUnits(value, d);
}

function fromBigNum(value, d = 18) {
    return parseFloat(ethers.utils.formatUnits(value, d));
}

const styledAddress = (s = "") => {
    if (s && s.length > 10) return s.slice(0, 4) + "..." + s.slice(-4);
    else return s;
};

export { delay, toBigNum, fromBigNum, styledAddress };
