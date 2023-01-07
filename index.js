exports.sleep = (SECONDS) => {
    const DATE = Date.now();
    let CURRENT_DATE = null;
    do {
        CURRENT_DATE = Date.now();
    } while (CURRENT_DATE - DATE < SECONDS*1000)
};
