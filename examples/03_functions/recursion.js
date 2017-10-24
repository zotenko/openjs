
function pow(x, n) {
    if (n <= 1) {
        return x; // exit from recursion
    }

    return x * pow(x, n-1);
}
