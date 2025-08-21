// Define custom LaTeX commands
const custom_latex_commands = {
    // Numbers
    N: "\\mathbb{N}",  // natural numbers
    Z: "\\mathbb{Z}",  // integers
    Q: "\\mathbb{Q}",  // rational numbers
    R: "\\mathbb{R}",  // real numbers
    C: "\\mathbb{C}",  // complex numbers
    HH: "\\mathbb{H}", // quaternions
    // Math font styles
    mbb: ["\\mathbb{#1}", 1],
    mc: ["\\mathcal{#1}", 1],
    mf: ["\\mathfrak{#1}", 1],
    // Math font decoration
    bs: ["\\boldsymbol{#1}", 1],
    wt: ["\\widetilde{#1}", 1],
    // Arrows
    xra: ["\\xrightarrow{#1}", 1],
    // Useful things
    inv: "^{-1}", // inverses
    del: "\\partial", // partial derivatives
    // Special notation
    TT: "\\mathbb{T}", // circle group
};
// Make custom LaTeX commands available for MathJax
window.MathJax = {
    tex: {
        macros: custom_latex_commands
    }
};
// Make custom LaTeX commands available for katex
window.katexMacros = custom_latex_commands;
