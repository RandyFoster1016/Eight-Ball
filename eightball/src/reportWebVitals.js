const reportWebVitals = onPerfEntry => {
    if (onPerfEntry && onPerfEntry instanceof Function){
        import('web-vitals').then(({ getCLS, gerFID, getFCP, getLCD, getTTFB }) => {
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCD(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};

export default reportWebVitals