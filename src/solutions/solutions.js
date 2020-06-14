
// RBI Currency
var rs_2000_c, rs_500_c, rs_200_c, rs_100_c, rs_50_c,  rs_20_c,  rs_10_c, rs_05_c, rs_02_c, rs_01_c;

function reInit() {
    rs_2000_c = 0;
    rs_500_c = 0;
    rs_200_c = 0;
    rs_100_c = 0;
    rs_50_c = 0;
    rs_20_c = 0;
    rs_10_c = 0;
    rs_05_c = 0;
    rs_02_c = 0;
    rs_01_c = 0;
}

// With Recursion
function getCurrencyInfo(currencyValue) {


    if (currencyValue >= 2000) {

        currencyValue = currencyValue - 2000;
        ++rs_2000_c;

        getCurrencyInfo(currencyValue);
    }
    else if (currencyValue >= 500 && currencyValue < 2000) {
        currencyValue = currencyValue - 500;
        ++rs_500_c;

        getCurrencyInfo(currencyValue);
    }
    else if (currencyValue >= 200 && currencyValue < 500) {
        currencyValue = currencyValue - 200;
        ++rs_200_c;

        getCurrencyInfo(currencyValue);
    }
    else if (currencyValue >= 100 && currencyValue < 200) {
        currencyValue = currencyValue - 100;
        ++rs_100_c;

        getCurrencyInfo(currencyValue);
    }
    else if (currencyValue >= 50 && currencyValue < 100) {
        currencyValue = currencyValue - 50;
        ++rs_50_c;

        getCurrencyInfo(currencyValue);
    }
    else if (currencyValue >= 20 && currencyValue < 50) {
        currencyValue = currencyValue - 20;
        ++rs_20_c;

        getCurrencyInfo(currencyValue);
    }
    else if (currencyValue >= 10 && currencyValue < 20) {
        currencyValue = currencyValue - 10;
        ++rs_10_c;

        getCurrencyInfo(currencyValue);
    }
    else if (currencyValue >= 5 && currencyValue < 10) {
        currencyValue = currencyValue - 5;
        ++rs_05_c;

        getCurrencyInfo(currencyValue);
    }
    else if (currencyValue >= 2 && currencyValue < 5) {
        currencyValue = currencyValue - 2;
        ++rs_02_c;

        getCurrencyInfo(currencyValue);
    }
    else if (currencyValue >= 1 && currencyValue < 2) {
        currencyValue = currencyValue - 1;
        ++rs_01_c;

        getCurrencyInfo(currencyValue);
    }
    else {

        return;
    }
}


reInit();
getCurrencyInfo(5566);


if (rs_2000_c > 0) {

    console.log('2000 rs note', rs_2000_c);
}
if (rs_500_c > 0) {

    console.log('500 rs note', rs_500_c);
}
if (rs_200_c > 0) {

    console.log('200 rs note', rs_200_c);
}
if (rs_100_c > 0) {

    console.log('100 rs note', rs_100_c);
}
if (rs_50_c > 0) {

    console.log('50 rs note', rs_50_c);
}
if (rs_20_c > 0) {

    console.log('20 rs note', rs_20_c);
}
if (rs_10_c > 0) {

    console.log('10 rs note', rs_10_c);
}
if (rs_05_c > 0) {

    console.log('05 rs note', rs_05_c);
}
if (rs_02_c > 0) {

    console.log('02 rs note', rs_02_c);
}
if (rs_01_c > 0) {

    console.log('01 rs note', rs_01_c);
}
reInit();

